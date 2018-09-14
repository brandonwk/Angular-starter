import { Component, OnInit } from '@angular/core';

import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  linkedin = faLinkedin;
  github   = faGithub;
  facebook = faFacebook;

  // facebook = faFacebook;
  // twitter  = faTwitter;

  constructor() { }

  ngOnInit() {
  }

}
