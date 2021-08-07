import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent  {

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
