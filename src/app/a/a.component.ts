import { Component } from '@angular/core';

@Component({
  selector: 'app-a',
  templateUrl: './a.component.html',
  styleUrl: './a.component.css'
})
export class AComponent {
  name:string = "Ahmet"
  lastName2:string="";

  setLastName(event:any){
    this.lastName2=event;
  }

}
