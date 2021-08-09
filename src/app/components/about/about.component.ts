import { Component, OnInit, HostListener, Input, AfterViewInit, AfterContentChecked } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {

  aboutIcons = [
    '/assets/img/layout/camera.svg',
    '/assets/img/layout/code.svg',
    '/assets/img/layout/palette.svg'
  ]

  public toggleAnimations() {
    document.getElementById('text').classList.add('fadeInLeft')
    document.getElementById('links').classList.add('fadeInRight')
  }

}
