import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { registerLocaleData } from '@angular/common';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {HttpClient, HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { MyDogComponent } from './components/my-dog/my-dog.component';
import { RamenComponent } from './components/ramen/ramen.component';
import { PhotographyComponent } from './components/photography/photography.component';
import { MenuComponent } from './shared/menu/menu.component';
import { LocaleComponent } from './shared/locale/locale.component';
import { PageLayoutComponent } from './shared/page-layout/page-layout.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';

export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient);
}


@NgModule({
  declarations: [
    AppComponent,
    ProjectsComponent,
    MyDogComponent,
    RamenComponent,
    PhotographyComponent,
    MenuComponent,
    LocaleComponent,
    PageLayoutComponent,
    LandingPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
