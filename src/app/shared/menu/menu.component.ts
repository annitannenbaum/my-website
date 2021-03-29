import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html'
})
export class MenuComponent implements OnInit {

  constructor() { }

  ngOnInit(): void { }

  toggleOverlay(): void {
    let overlay = document.getElementById("overlay")
    overlay.classList.toggle("is-active")
  }


  toggleMenu(): void {

    this.toggleOverlay();
    let burger = document.getElementById("burger-menu");
    burger.classList.toggle("is-active");

    let menu = document.getElementById("menu-list");
    menu.classList.toggle("is-visible")
  }
}
