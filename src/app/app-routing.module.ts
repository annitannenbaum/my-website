import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectsComponent } from './components/projects/projects.component';
import { MyDogComponent } from './components/my-dog/my-dog.component';
import { RamenComponent } from './components/ramen/ramen.component';
import { PhotographyComponent } from './components/photography/photography.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';

const routes: Routes = [
{ path: '', component: LandingPageComponent },
{ path: 'projects', component: ProjectsComponent },
{ path: 'my-dog', component: MyDogComponent },
{ path: 'photography', component: PhotographyComponent },
{ path: 'ramen', component: RamenComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
