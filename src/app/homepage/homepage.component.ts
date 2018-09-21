import { Component, OnInit } from '@angular/core';
import { ProjectsService } from '../shared/services/projects.service';

import * as _ from 'lodash';

import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { faCaretRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
  providers: [ ProjectsService ]
})
export class HomepageComponent implements OnInit {

  left       = faChevronLeft;
  right      = faChevronRight;
  caretRight = faCaretRight;

  selectedIndex: number;
  transform: number;

  public allproject;
  public projectsArr;
  public projects;
  public randomProjects;

  constructor( public projectss: ProjectsService ) {
    this.selectedIndex = 0;
    this.transform = 100;
  }

  async ngOnInit() {
    this.allproject = await this.projectss.allProjects();
    this.projectsArr = [];

    for ( let i = 0, max = this.allproject.length; i < max; i += 1 ) {
      const p = this.allproject[i];
      this.projectsArr.push(p);
    }
    this.projects = [].concat.apply([], this.projectsArr );
    this.randomProjects = _.sampleSize(this.projects, 1);
    console.log(this.randomProjects);
  }

  // Slider controls
  up() {
    this.selectedIndex ++;
    if ( this.selectedIndex > 2) {
      this.selectedIndex = 0;
    }
  }

  down() {
    this.selectedIndex --;
    if ( this.selectedIndex < 0) {
      this.selectedIndex = 2;
    }
  }

}
