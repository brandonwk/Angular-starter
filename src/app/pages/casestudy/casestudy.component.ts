import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ProjectsService } from '../../shared/services/projects.service';

@Component({
  selector: 'app-casestudy',
  templateUrl: './casestudy.component.html',
  styleUrls: ['./casestudy.component.scss'],
  providers: [ ProjectsService ]
})
export class CasestudyComponent implements OnInit {

  public project;
  public projects;
  public selProject;
  public selectedProject;

  public id;

  constructor( public _route: ActivatedRoute, public pro: ProjectsService ) { }

  async ngOnInit() {
    this._route.queryParams.subscribe( params => {
      this.id = params.id;
    });

    this.projects = await this.pro.allProjects();

    this.selProject = [];
    for ( let i = 0, max = this.projects.length; i < max; i += 1) {
      const p  = this.projects[i];
      const ID = this.projects[i].id;
      if ( this.id === ID ) {
        this.selProject.push(p);
      }
    }
    this.selectedProject = [].concat.apply( [], this.selProject );
    this.project = this.selectedProject[0];
    console.log('Current selected project: ', this.id, this.project);
  }

}
