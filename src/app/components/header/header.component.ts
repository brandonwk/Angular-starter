import { Component, OnInit } from '@angular/core';
import { style, animate, transition, trigger } from '@angular/animations';

// icons
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [
    trigger('myAnimation', [
      transition(':enter', [
        style({ top: '-100vh' }),
        animate('500ms', style({ top: '0' }))
      ]),
      transition(':leave', [
        style({ top: '0' }),
        animate('500ms', style({ top: '-100vh' }))
      ])
    ])
  ]
})
export class HeaderComponent implements OnInit {

  public isClassVisible;

  Download   = faDownload;
  Twitter    = faTwitter;

  constructor() {
    this.isClassVisible = false;
  }

  async ngOnInit() {
  }

}
