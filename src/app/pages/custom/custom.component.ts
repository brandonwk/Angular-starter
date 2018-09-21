import {Component, OnInit, ViewChild} from '@angular/core';
import { ApiService } from '../../shared/services/api.service';

@Component({
  selector: 'app-custom',
  templateUrl: './custom.component.html',
  styleUrls: ['./custom.component.scss'],
  providers: [ ApiService ]
})
export class CustomComponent implements OnInit {

  @ViewChild( 'f' ) lead: any;
  model: any = {};

  public successfulForm;

  constructor( private api: ApiService ) { }

  ngOnInit() {
    this.successfulForm = false;
  }

  async submitPlan( formValue: any ) {
    const planForm = this.getLeadObj( formValue );
    await
      this.api.plan( planForm )
        .then(
          response => {
            if (response === true) {
              console.log('Success');
              this.successfulForm = true;
            } else {
              console.log('error');
            }
          }
        )
        .catch(
          error => {
            console.log('Something happened while sending email: ', error.toString() )
          }
        );
    console.log('form submitted: ', planForm);
  }

  getLeadObj( formValue: any ) {
    const leadApp = {
      // object: this.model
      // Personal information
      name:    this.model.contactName,
      email:   this.model.email,
      company: this.model.contactCompany,
      numberofpages: this.model.pagesNeeded,
      customlandingpages: this.model.landingPagesNeeded,
      numberoflandingpages: this.model.numberoflandingpage,
      cmsIntegration: this.model.CMSNeeded,
      socialMarketing: this.model.Social,
      apiIntegration: this.model.SocialAPI,
      emailCampaigns: this.model.emailCampaigns,
      numberofcampaignspermonth: this.model.campaignsPerMonth,
      monthlyReports: this.model.websiteReports,
      monthlyConsultations: this.model.consultations
    };
    return leadApp;
  }

}
