import { Component, ElementRef, HostListener, Input } from '@angular/core';

@Component({
  selector: 'app-floating-icons',
  templateUrl: './floating-icons.component.html',
  styleUrls: ['./floating-icons.component.scss']
})
export class FloatingIconsComponent {

  @Input() iconPaths: Array<string>;

  posX: number;
  posY: number;

  constructor(public el: ElementRef<HTMLElement>) {}

  @HostListener('mousemove', ['$event']) 
    onMouseMove(event: MouseEvent) {
      this.posX = ( event.clientX / 10)
      this.posY = ( event.clientY / 10)
  }

  get iconStyle() {
    return {
      'transform': `translate(${this.posX}px, ${this.posY}px)`
    }
  }
}
