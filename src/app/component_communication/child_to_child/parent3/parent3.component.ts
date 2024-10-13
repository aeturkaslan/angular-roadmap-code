import { Component } from '@angular/core';

@Component({
  selector: 'app-parent3',
  template: `
  <div style="background-color: chocolate;">
    <p>Parent 3 Component</p>
    <app-child3a (data)="childData($event)"></app-child3a>
    <app-child3b [data]="child3aMessage"></app-child3b>
  </div>
  `
})
export class Parent3Component {
  child3aMessage: string;
  childData(message:string){
    this.child3aMessage = message;
  }
}
