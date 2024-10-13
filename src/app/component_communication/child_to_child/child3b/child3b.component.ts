import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-child3b',
  template:`
  <p>Child 3 B Component --- {{ data }}</p>`
})
export class Child3bComponent {
  @Input() data: string;

}
