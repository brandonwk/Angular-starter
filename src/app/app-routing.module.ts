import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomepageComponent } from './homepage/homepage.component';
import { ServicesComponent } from './pages/services/services.component';
import { WorksComponent } from './pages/works/works.component';
import { CasestudyComponent } from './pages/casestudy/casestudy.component';
import { ContactComponent } from './pages/contact/contact.component';

const routes: Routes = [
  { path: '',                       component: HomepageComponent },
  { path: 'services',               component: ServicesComponent },
  { path: 'works',                  component: WorksComponent },
  { path: 'project/:projectID',     component: CasestudyComponent },
  { path: 'contact',                component: ContactComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
