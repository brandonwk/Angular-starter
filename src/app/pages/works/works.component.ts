import { Component, OnInit } from '@angular/core';
import { ProjectsService } from '../../shared/services/projects.service';

import * as _ from 'lodash';

@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.scss'],
  providers: [ ProjectsService ]
})
export class WorksComponent implements OnInit {

  public loadProjects;
  public randomProjects;

  constructor(public projects: ProjectsService) { }

  async ngOnInit() {
    this.loadProjects = this.projects.allProjects();
    this.randomProjects = _.sampleSize(this.loadProjects, this.loadProjects.length);
  }

}
