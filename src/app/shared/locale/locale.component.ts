import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-locale',
  templateUrl: './locale.component.html'
})
export class LocaleComponent implements OnInit {

  @Output() languageEvent = new EventEmitter<string>();

  reverse: boolean = false;

  constructor() { }

  ngOnInit(): void { }

  toggleReverse() {
    let el = document.getElementById('custom-select')
    el.classList.toggle('reverse')
  }

  changeLocale(locale: string) {
    this.languageEvent.emit(locale)
    this.reverse = !this.reverse;
  }

}
