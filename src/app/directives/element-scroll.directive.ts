import { Directive, HostListener } from "@angular/core";

@Directive({
    selector: '[windowScroll]'
})

export class WindowScrollDirective {

    @HostListener('scroll', ['$event']) onScroll() {
        let arrow = document.getElementById('arrow')

        arrow.classList.remove('pulse')
        arrow.classList.add('fadeOutDown') 
    }
}