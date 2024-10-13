import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  template: `
  <div style="background-color: aqua;">
    <p>Child Works!</p>
    {{childData}}
  </div>`
})
export class ChildComponent {
  @Input() childData:string ;
}
