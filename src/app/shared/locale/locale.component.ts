import { Component, Output, EventEmitter } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-locale',
  templateUrl: './locale.component.html',
  styleUrls: ['./locale.component.scss']
})

export class LocaleComponent {

  @Output() languageEvent = new EventEmitter<string>();

  lang = this.translate.currentLang;

  constructor(private translate: TranslateService) { }

  changeLocale(locale: string): void {
    this.languageEvent.emit(locale)
    this.lang = locale;
  }

}
