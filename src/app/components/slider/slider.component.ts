import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';
declare var $: any;
@Component({
  selector: 'slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {

  @Input() anchura:number;
  @Output() conseguirAutor=new EventEmitter();
  public autor:any;
  // @Input('etiquetas') etiqueta:boolean;
  constructor() { 
    this.anchura=0;
    this.autor={
      nombre:"Giovanni Orozco",
      web:"www.github.com/giojodev",
      youtube:"youtube.com"
    }
  }

  ngOnInit(): void {

    (<any>$('.galeria')).bxSlider({
      mode: 'fade',
      captions: true,
      slideWidth: this.anchura
    })
  }

  lanzar(event:any){
    this.conseguirAutor.emit(this.autor);
  }

}
