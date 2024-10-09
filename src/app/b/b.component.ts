import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-b',
  templateUrl: './b.component.html',
  styleUrl: './b.component.css'
})
export class BComponent {
  @Input() name2:string = ""

  lastName:string="";

  @Output() sendToAEvent = new EventEmitter<string>;

  sendToA () {
    this.sendToAEvent.emit(this.lastName);

  }

}
