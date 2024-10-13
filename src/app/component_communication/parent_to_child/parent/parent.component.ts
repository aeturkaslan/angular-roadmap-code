import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  template: `
  <div>
    Parent Component
  </div>
  <app-child [childData]="data"></app-child>`

})
export class ParentComponent {
  data:string ="Transfer to Child Component";
}
