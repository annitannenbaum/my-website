import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectsComponent } from './components/projects/projects.component';
import { PhotographyComponent } from './components/photography/photography.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { AboutComponent } from './components/about/about.component';
import { TechComponent } from './components/tech/tech.component';

const routes: Routes = [
{ path: '', component: LandingPageComponent },
{ path: 'about', component: AboutComponent },
{ path: 'blog', component: TechComponent },
{ path: 'projects', component: ProjectsComponent },
{ path: 'photography', component: PhotographyComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
