import { Directive, ElementRef, ViewChild, AfterViewInit } from '@angular/core';

@Directive({
  selector: '[appBasicTableStyle]',
  exportAs:'exportBasicTableStyle'
})
export class BasicTableStyleDirective{

  constructor(private el: ElementRef) {
    console.log(el)
    el.nativeElement.style.backgroundColor = 'yellow'
  }


}
