import { Directive,ElementRef } from '@angular/core';

@Directive({
  selector: '[appResaltado]'
})
export class ResaltadoDirective {

  constructor(el:ElementRef) {
    console.log(el.nativeElement);
   }
  
}
