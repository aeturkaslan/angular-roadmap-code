import { HostBinding } from '@angular/core';
import { HostListener } from '@angular/core';
import { Directive, ElementRef, Input, OnInit } from '@angular/core';

declare var $:any; //jquery kullanabilmek için

@Directive({
  selector: '[appExample]'
})
export class ExampleDirective implements OnInit{

  constructor(private element:ElementRef) {
   }

  ngOnInit(): void {
    this.element.nativeElement.style.backgroundColor =this.color;
    $(this.element.nativeElement).fadeOut(2000).fadeIn();
  }
  @Input() color:string;

  @HostListener("click")
  onClick(){
    alert("HTML nesnesine tıklandı!")
  }

  @HostBinding("style.color")
    writingColor : string = "yellow";
}