import { Component, OnInit, HostListener, Input } from '@angular/core';

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

}
