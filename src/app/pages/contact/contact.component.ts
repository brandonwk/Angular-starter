import { Component, OnInit, ViewChild } from '@angular/core';
import { ApiService } from '../../shared/services/api.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  providers: [ ApiService ]
})
export class ContactComponent implements OnInit {

  @ViewChild( 'f' ) lead: any;
  model: any = {};

  public successfulForm;

  constructor( private api: ApiService ) { }

  ngOnInit() {
    this.successfulForm = false;
  }

  async submitContact( formValue: any ) {
    const contactForm = this.getLeadObj( formValue );
    await
      this.api.email(contactForm)
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
    console.log('form submitted: ', contactForm);
  }

  getLeadObj( formValue: any ) {
    const leadApp = {
      // object: this.model
      // Personal information
      name:    this.model.contactName,
      email:   this.model.email,
      company: this.model.contactCompany,
      start:   this.model.startDate,
      details: this.model.projectDetails
    };
    return leadApp;
  }

}
