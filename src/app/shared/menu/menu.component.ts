import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent  {

  @ViewChild('overlay') overlay: ElementRef;

  
  toggleOverlay(): void {
    this.overlay.nativeElement.classList.toggle("is-active")
  }


  toggleMenu(): void {

    this.toggleOverlay();
    let burger = document.getElementById("burger-menu");
    burger.classList.toggle("is-active");

    let menu = document.getElementById("menu-list");
    menu.classList.toggle("is-visible")
  }

  scrollToSection(section: string) {
     let scroll = document.getElementById(section);
     scroll.scrollIntoView({behavior: "smooth"});

     if(window.innerHeight < 1024 && this.overlay.nativeElement.classList.contains("is-active")) {
      this.toggleOverlay();
     }
  }
}
