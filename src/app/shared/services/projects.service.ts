import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  projects = [
    {
      id: 'RUZ',
      title: 'Ruzzit',
      image: `https://cdn-images-1.medium.com/max/1600/0*13UmC2neWdVecNLV.`,
      description: `Ruzzit finds the most viral stories on the web and categorises them into a single feed.`,
      longdescription: `Ruzzit finds the most viral stories on the web and categorises them into a single feed. Your feed can also be personalised by selecting categories you’re interested in.`,
      link: `https://www.producthunt.com/posts/ruzzit-1-0`,
      year: 2017,
      role: 'Development',
      type: 'React/React Native',
      completed: true
    },
    {
      id: 'PMT',
      title: `Pearl Manual Therapy`,
      image: `http://images.ctfassets.net/s2kor2hftzlf/3wT3zdFFJe04a6Umw6mCqs/b1604b2a74d891de379fed557019e1e1/Hero-2.jpg`,
      description: `Empowering Clinicians To Be Their Best!`,
      longdescription: `Pearl teaches the benefits of manual therapy and physical therapy to physical therapy doctoral programs, orthopedic residency/fellowship programs, practice owners and their staff, other healthcare professionals, and patient groups.`,
      link: `https://pearlmanualtherapy.com/`,
      year: 2017,
      role: 'Design/Development',
      type: 'Angular 2+, email marketing, responsive design',
      completed: true
    },
    {
      id: 'HOT',
      title: `Hodapp Training`,
      image: `http://images.ctfassets.net/tcqbxfcp3htz/fNL0KSapX28WKyc22IuAA/79aba751626c72b042f3fa63974fe92b/C785130F-1A81-4A91-A86E-B66600D2A6DB.jpeg`,
      description: `National strength & conditioning association-certified personal trainer website`,
      longdescription: `Hodapp training offers four types of services for exercising along, with the ability to cretate custom plans.`,
      link: `https://hodapptraining.com/`,
      year: 2018,
      role: 'Design/Development',
      type: 'Angular 2+, email marketing, responsive design',
      completed: false
    },
    {
      id: `WMS`,
      title: `White's machine shop`,
      image: `https://whitesmachine.com/assets/Hero1.png`,
      description: `A small family owned machine shop located in Pine Grove Pennsylvania.`,
      longdescription: `Offering various reverse engineering, and cnc capabilities to local, and national clients.`,
      link: `https://whitesmachine.com/`,
      year: 2016,
      role: 'Design/Development',
      type: 'Angular 2+, email marketing, responsive design',
      completed: false
    },
    {
      id: `DPT`,
      title: `Dulak Physical therapy`,
      image: `https://images.ctfassets.net/82pbo053ocet/5iI2luTNY4QOko8q2SaGKM/c9cd74e456590e304b7c73019a1d4b2e/Hero-image.jpg`,
      description: `Pittsburgh's Specialized Physical Therapy and Golf Rehab Company`,
      longdescription: `Dulak Physical Therapy and Golf has been designed to improve help you live your life to the fullest... without worrying about aches and pains that would limit your lifestyle. We focus on the full body approach and taking the time to locate the TRUE problem and then FIX it.`,
      link: `https://www.dulakphysicaltherapyandgolf.com/`,
      role: 'Design/Development',
      type: 'Angular 2+, email marketing, responsive design',
      year: 2017,
      completed: true
    },
    {
      id: `EEG`,
      title: `Empire Education Group`,
      image: `https://www.empire.edu/images/home_3.jpg`,
      description: `The leading group of cosmetology schools in the U.S.`,
      longdescription: `Providing marketing and educational support with the use of bleeding-edge technology solutions.`,
      link: `https://www.empire.edu/`,
      year: 2018,
      role: 'Design/Development',
      type: 'Angular 2+, backend-development',
      completed: true
    },
    {
      id: `PPB`,
      title: `Pearl Performance belts`,
      image: `https://static1.squarespace.com/static/54e249c1e4b0419b74d2eedb/t/5a04c6c80d9297e9360aad7c/1510262535060/Manip1642016.jpg`,
      description: `Providing a webstore to purchase belts used in manual traction physical therapy settings.`,
      longdescription: `DESIGNED BY EXPERT MANUAL THERAPIST MICHAEL FINK, THE PEARL PERFORMANCE BELT WILL ASTOUND YOU WITH THE AESTHETICS AND CRAFTSMANSHIP.`,
      link: `https://www.pearlperformancebelts.com/`,
      year: 2017,
      completed: true
    },
    {
      id: `BMV`,
      title: `Blue Mountain Velo`,
      image: `https://bmvv-6f105.firebaseapp.com/assets/Race-hero.jpg`,
      description: `Working to develop riders relatively new to the racing scene.`,
      longdescription: `Blue mountain velo, is an amateur cycling team based in Central Pennsylvania. They work to develop riders relatively new to the racing scene that are serious about improving their skills in road racing, cyclocross, and mountain biking.`,
      link: ``,
      year: 2018,
      role: 'Design/Development',
      type: 'Angular 2+, email marketing, responsive design',
      completed: false
    },
    {
      id: `DCU`,
      title: `Dickinson College`,
      image: `https://www.dickinson.edu/images/Campus_Random_JO_20160905008_1_1400.jpg`,
      description: `Building features for continuing excellent student outreach from a website marketing perspective.`,
      longdescription: `Working with an internal marketing department to increase student retention and outreach with various webpages.`,
      link: `https://www.dickinson.edu/`,
      year: 2016,
      role: 'Development',
      type: 'PHP/backend development',
      completed: true
    },
    {
      id: `SAS`,
      title: `Sight and Sound`,
      image: `https://cdn.sight-sound.com/storage/uploads/00000000505.png`,
      description: `WHERE THE BIBLE COMES TO LIFE ON STAGE`,
      longdescription: `Building an internal company website, while providing a completly new design and features for the exsisting external website.`,
      link: `https://www.sight-sound.com/`,
      year: 2017,
      role: 'Development',
      type: 'Angular 2+, Company portal',
      completed: true
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
      completed: true
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
