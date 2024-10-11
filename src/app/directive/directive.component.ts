import { Component } from '@angular/core';

@Component({
  selector: 'app-directive',
  templateUrl: './directive.component.html',
  //styleUrl: './directive.component.css'
  styles: [".myclass{background-color:red}"]
})
export class DirectiveComponent {
  names = ["Ali", "Ayşe", "Ahmet", "Fatma"]
  visible : boolean = true;
  sayi : number = 1;
  cl : string = "myclass";

  style : any = {
    'background-color' : 'blue',
    'color' : 'white',
    'font-size' : '12px',
  }
}
