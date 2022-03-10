import { Component, OnInit,Input } from '@angular/core';
declare var $: any;
@Component({
  selector: 'slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {

  @Input() anchura:number;
  // @Input('etiquetas') etiqueta:boolean;
  constructor() { 
    this.anchura=0;
    
  }

  ngOnInit(): void {

    (<any>$('.galeria')).bxSlider({
      mode: 'fade',
      captions: true,
      slideWidth: this.anchura
    })
  }

}
