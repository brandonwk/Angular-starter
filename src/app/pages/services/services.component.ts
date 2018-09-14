import {Component, OnInit, ViewChild} from '@angular/core';
import { ApiService } from '../../shared/services/api.service';

import { faObjectUngroup } from '@fortawesome/free-solid-svg-icons';
import { faCode } from '@fortawesome/free-solid-svg-icons';
import { faServer } from '@fortawesome/free-solid-svg-icons';

import { faConnectdevelop } from '@fortawesome/free-brands-svg-icons';
import { faDesktop } from '@fortawesome/free-solid-svg-icons';
import { faEnvelopeOpen } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss'],
  providers: [ ApiService ]
})
export class ServicesComponent implements OnInit {

  // form stuff
  @ViewChild( 'f' ) lead: any;
  model: any = {};

  public successfulForm;
  public planSelected;
  public plan;

  design  = faObjectUngroup;
  code    = faCode;
  hosting = faServer;
  api     = faConnectdevelop;
  landing = faDesktop;
  email   = faEnvelopeOpen;

  constructor( private API: ApiService) { }

  async ngOnInit() {
    this.successfulForm = false;
    this.planSelected   = false;
  }

  async setPlan( plan ) {
    this.planSelected = true;
    this.plan = plan;
    console.log(plan);
  }

  async submitCTA( formValue: any ) {
    const ctaForm = this.getCTAFormObj( formValue );

    await
      this.API.email( ctaForm )
        .then(
          response => {
            if (response === true) {
              console.log('Success');
              this.successfulForm = true;
            } else {
              console.log('error');
            }
          }
        ).catch(
          error => {
            console.log('Something happened while submitting the cta form');
          }
        );

    console.log('this form submitted: ', ctaForm);
  }

  getCTAFormObj( formValue: any ) {
   const ctaApp = {
     name: this.model.contactName,
     email: this.model.email,
     company: this.model.contactCompany,
     plan: this.plan
   };
    return ctaApp;
  }



}
