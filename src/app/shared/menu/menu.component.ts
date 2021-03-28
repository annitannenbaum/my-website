import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html'
})
export class MenuComponent implements OnInit {

  constructor() { }

  ngOnInit(): void { }


  toggleMenu(): void {
    let menu = document.getElementById("burger-menu");
    menu.classList.toggle("is-active");
  }

  toggleOverlay(): void {

  }
}
