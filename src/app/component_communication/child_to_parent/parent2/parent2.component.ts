import { Component } from '@angular/core';

@Component({
  selector: 'app-parent2',
  template:`
  <div></div>        <!-- 4 -->
  <app-child2 (dataEvent)="childEvent($event)"></app-child2>`
})
export class Parent2Component {
  //3
  childEvent(obj:any){
    console.log(obj);
  }

}
