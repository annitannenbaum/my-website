import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { MyDogComponent } from './components/my-dog/my-dog.component';
import { RamenComponent } from './components/ramen/ramen.component';
import { PhotographyComponent } from './components/photography/photography.component';
import { MenuComponent } from './shared/menu/menu.component';
import { LocaleComponent } from './shared/locale/locale.component';

@NgModule({
  declarations: [
    AppComponent,
    ProjectsComponent,
    MyDogComponent,
    RamenComponent,
    PhotographyComponent,
    MenuComponent,
    LocaleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
