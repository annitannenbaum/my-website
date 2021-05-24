import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-locale',
  templateUrl: './locale.component.html'
})
export class LocaleComponent implements OnInit {

  @Output() languageEvent = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void { }

  changeLocale(locale: string): void {
    this.languageEvent.emit(locale)
  }

}
