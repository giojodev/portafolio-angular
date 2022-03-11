import { Component, OnInit,ViewChild } from '@angular/core';



@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  public widthSlider:number;
  public anchuratoSlider:any;
  public autor:any;
  
  @ViewChild('textos',{static:true}) textos:any;

  constructor() {
    this.widthSlider=0;
    this.anchuratoSlider=0
    this.autor=0;

   }

  ngOnInit(): void {
    //Opcion angular
  //  alert(document.querySelector('#texto')?.innerHTML);
    
  // console.log(this.textos.nativeElement.textContent);

    
  }

  cargarSlider(){
    
    this.anchuratoSlider=this.widthSlider;
    
  }
  resetearSlider(){
    this.anchuratoSlider=null;
  }
  
  getAutor(event:any){
    this.autor=event;
  }
 
}
