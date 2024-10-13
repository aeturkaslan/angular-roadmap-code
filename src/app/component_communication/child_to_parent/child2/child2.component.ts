import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child2',
  template: `
  <div>
    <p>Child2 Component</p>
  </div>
  `
})
export class Child2Component implements OnInit {
  //1
  @Output() dataEvent: EventEmitter<any> = new EventEmitter();

  //2
  ngOnInit(): void {
    this.dataEvent.emit({message:'Transfer to Parent Component'});
  }
}
