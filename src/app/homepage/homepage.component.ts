import { Component, OnInit } from '@angular/core';
import { ProjectsService } from '../shared/services/projects.service';

import * as _ from 'lodash';

import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { faCaretRight } from '@fortawesome/free-solid-svg-icons';

// import { faDesktop }    from '@fortawesome/free-solid-svg-icons';
// import { faLayerGroup } from '@fortawesome/free-solid-svg-icons';
// import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';

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

  //
  // sliderArr = [
  //   {
  //     image: 'http://images.ctfassets.net/s2kor2hftzlf/3wT3zdFFJe04a6Umw6mCqs/b1604b2a74d891de379fed557019e1e1/Hero-2.jpg',
  //     title: 'Pearl Manual Therapy',
  //     description: 'Using the web to increase the growth of a physical company.',
  //     link: '/pearl'
  //   },
  //   {
  //     image: 'https://images.ctfassets.net/82pbo053ocet/5iI2luTNY4QOko8q2SaGKM/c9cd74e456590e304b7c73019a1d4b2e/Hero-image.jpg',
  //     title: 'Dulak Physical therapy',
  //     description: 'Providing a modern look for an old website.',
  //     link: '/dulak'
  //   },
  //   {
  //     image: 'http://images.ctfassets.net/tcqbxfcp3htz/fNL0KSapX28WKyc22IuAA/79aba751626c72b042f3fa63974fe92b/C785130F-1A81-4A91-A86E-B66600D2A6DB.jpeg',
  //     title: 'Hodapp Personal Training',
  //     description: 'Lorem ipsum dot sollar dot em',
  //     link: '/hodapp'
  //   }
  // ];

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
