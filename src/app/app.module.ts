import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {HttpClient, HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';

import { ProjectsComponent } from './components/projects/projects.component';
import { PhotographyComponent } from './components/photography/photography.component';
import { MenuComponent } from './shared/menu/menu.component';
import { LocaleComponent } from './shared/locale/locale.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { AboutComponent } from './components/about/about.component';
import { TechComponent } from './components/tech/tech.component';
import { FloatingIconsComponent } from './shared/floating-icons/floating-icons.component';
import { AppearDirective } from './shared/directives/add-animation.directive';

export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient);
}


@NgModule({
  declarations: [
    AppComponent,
    ProjectsComponent,
    PhotographyComponent,
    MenuComponent,
    LocaleComponent,
    LandingPageComponent,
    AboutComponent,
    TechComponent,
    FloatingIconsComponent,
    AppearDirective
  ],
  imports: [
    BrowserModule,
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
