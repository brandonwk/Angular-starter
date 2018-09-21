import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  projects = [
    {
      id: 'RUZ',
      title: 'Ruzzit',
      image: `../../assets/Ruzzit.png`,
      description: `Ruzzit finds the most viral stories on the web and categorises them into a single feed.`,
      longdescription: `Ruzzit finds the most viral stories on the web and categorises them into a single feed. Your feed can also be personalised by selecting categories you’re interested in.`,
      link: `https://www.producthunt.com/posts/ruzzit-1-0`,
      year: 2017,
      role: 'Development',
      type: 'React/React Native',
      completed: true,
      caseStudy: true
    },
    {
      id: 'PMT',
      title: `Pearl Manual Therapy`,
      image: `../../assets/PMT.jpg`,
      description: `Empowering Clinicians To Be Their Best!`,
      longdescription: `Pearl teaches the benefits of manual therapy and physical therapy to physical therapy doctoral programs, orthopedic residency/fellowship programs, practice owners and their staff, other healthcare professionals, and patient groups.`,
      link: `https://pearlmanualtherapy.com/`,
      year: 2017,
      role: 'Design/Development',
      type: 'Angular 2+, email marketing, responsive design',
      completed: true,
      caseStudy: false
    },
    {
      id: 'HOT',
      title: `Hodapp Training`,
      image: `../../assets/hodapp.jpeg`,
      description: `National strength & conditioning association-certified personal trainer website`,
      longdescription: `Hodapp training offers four types of services for exercising along, with the ability to cretate custom plans.`,
      link: `https://hodapptraining.com/`,
      year: 2018,
      role: 'Design/Development',
      type: 'Angular 2+, email marketing, responsive design',
      completed: true,
      caseStudy: false
    },
    {
      id: `WMS`,
      title: `White's machine shop`,
      image: `../../assets/wms.png`,
      description: `A small family owned machine shop located in Pine Grove Pennsylvania.`,
      longdescription: `Offering various reverse engineering, and cnc capabilities to local, and national clients.`,
      link: `https://whitesmachine.com/`,
      year: 2016,
      role: 'Design/Development',
      type: 'Angular 2+, email marketing, responsive design',
      completed: false,
      caseStudy: false
    },
    {
      id: `DPT`,
      title: `Dulak Physical therapy`,
      image: `../../assets/dulak.jpg`,
      description: `Pittsburgh's Specialized Physical Therapy and Golf Rehab Company`,
      longdescription: `Dulak Physical Therapy and Golf has been designed to improve help you live your life to the fullest... without worrying about aches and pains that would limit your lifestyle. We focus on the full body approach and taking the time to locate the TRUE problem and then FIX it.`,
      link: `https://www.dulakphysicaltherapyandgolf.com/`,
      role: 'Design/Development',
      type: 'Angular 2+, email marketing, responsive design',
      year: 2017,
      completed: true,
      caseStudy: false
    },
    {
      id: `EEG`,
      title: `Empire Education Group`,
      image: `../../assets/Empire.jpg`,
      description: `The leading group of cosmetology schools in the U.S.`,
      longdescription: `Providing marketing and educational support with the use of bleeding-edge technology solutions.`,
      link: `https://www.empire.edu/`,
      year: 2018,
      role: 'Design/Development',
      type: 'Angular 2+, backend-development',
      completed: true,
      caseStudy: false
    },
    {
      id: `PPB`,
      title: `Pearl Performance belts`,
      image: `../../assets/ppb.jpg`,
      description: `Providing a webstore to purchase belts used in manual traction physical therapy settings.`,
      longdescription: `DESIGNED BY EXPERT MANUAL THERAPIST MICHAEL FINK, THE PEARL PERFORMANCE BELT WILL ASTOUND YOU WITH THE AESTHETICS AND CRAFTSMANSHIP.`,
      link: `https://www.pearlperformancebelts.com/`,
      year: 2017,
      completed: false,
      caseStudy: false
    },
    {
      id: `BMV`,
      title: `Blue Mountain Velo`,
      image: `../../assets/bmv.jpg`,
      description: `Working to develop riders relatively new to the racing scene.`,
      longdescription: `Blue mountain velo, is an amateur cycling team based in Central Pennsylvania. They work to develop riders relatively new to the racing scene that are serious about improving their skills in road racing, cyclocross, and mountain biking.`,
      link: ``,
      year: 2018,
      role: 'Design/Development',
      type: 'Angular 2+, email marketing, responsive design',
      completed: false,
      caseStudy: false
    },
    {
      id: `DCU`,
      title: `Dickinson College`,
      image: `../../assets/Dickinson.jpg`,
      description: `Building features for continuing excellent student outreach from a website marketing perspective.`,
      longdescription: `Working with an internal marketing department to increase student retention and outreach with various webpages.`,
      link: `https://www.dickinson.edu/`,
      year: 2016,
      role: 'Development',
      type: 'PHP/backend development',
      completed: true,
      caseStudy: false
    },
    {
      id: `SAS`,
      title: `Sight and Sound`,
      image: `../../assets/ss.png`,
      description: `WHERE THE BIBLE COMES TO LIFE ON STAGE`,
      longdescription: `Building an internal company website, while providing a completly new design and features for the exsisting external website.`,
      link: `https://www.sight-sound.com/`,
      year: 2017,
      role: 'Development',
      type: 'Angular 2+, Company portal',
      completed: true,
      caseStudy: false
    },
    {
      id: `GIB`,
      title: `Gibson Island Property Management`,
      image: `../../../assets/Location-one.jpg`,
      description: `Managment service, supporting the entire gibson island community`,
      longdescription: `WE ARE A PROPERTY MANAGEMENT SERVICE, CREATED TO SERVE THE ENTIRE GIBSON ISLAND COMMUNITY.`,
      link: `https://gibsonislandpm.com`,
      year: 2018,
      role: 'Design/Development',
      type: 'Angular 2+, Firebase hosting',
      completed: true,
      caseStudy: false
    }
  ];

  constructor() {}

  public allProjects() {
    return this.projects;
  }
  public singleProject(projectID) {
    return this.projects[projectID];
  }
}
