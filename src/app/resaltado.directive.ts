import { BoundElementProperty } from '@angular/compiler';
import { Directive,ElementRef } from '@angular/core';

@Directive({
  selector: '[appResaltado]'
})
export class ResaltadoDirective {

  constructor(public el:ElementRef) {
    
    
   }

   ngOnInit(){
    var element =this.el.nativeElement;
    element.style.padding="20px";
    element.style.marginTop="15px";
    element.style.background="blue";
    element.style.color="white";
    element.style.width="50%";

    element.innerText=element.innerText.toUpperCase();
   }
  
}
