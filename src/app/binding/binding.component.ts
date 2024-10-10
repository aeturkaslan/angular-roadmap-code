import { Component } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrl: './binding.component.css'
})
export class BindingComponent {
  //Interpolation and 
  title = 'First Angular Application';
  name = 'Ahmet';
  //Component Binding
  componentBinding = 'This is component binding';
  //Class Binding
  isActive : boolean = true;
  //Style Binding
  isHighlighted: boolean = true;
  fontSize: string = '20px';

  //Event Binding
  onClick() {
    alert('Butona tıklandı!');
  }

  //Deferrable view
  list = ["eleman1", "eleman2"];


}
