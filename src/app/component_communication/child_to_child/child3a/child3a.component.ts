import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child3a',
  template: `
  <p>Child 3 A Component</p>`
})
export class Child3aComponent implements OnInit{
  
  @Output() data: EventEmitter<any> = new EventEmitter();

  ngOnInit(): void {
    this.data.emit("Child 3 A'dan gelen veri...");
  }
}
