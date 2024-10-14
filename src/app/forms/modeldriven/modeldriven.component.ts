import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-modeldriven',
  template: `
  <form [formGroup]="frm" (ngSubmit)="onSubmit()">
    <input type="text" placeholder="Name" formControlName="name"> <br>
    <input type="text" placeholder="Surname" formControlName="surname"> <br>
    <input type="text" placeholder="Email" formControlName="email"> <br>
    <input type="text" placeholder="Tel" formControlName="tel"> <br>
    <div formGroupName="address">
      <input type="text" placeholder="Country" formControlName="country"> <br>
      <input type="text" placeholder="City" formControlName="city"> <br>
      <input type="text" placeholder="Address" formControlName="address"> <br>
    </div>

    <button>Send</button>
  </form>
  `
})
export class ModeldrivenComponent {
  frm: FormGroup;
  constructor(private formBuilder: FormBuilder) {
    this.frm = formBuilder.group({
      name: [""],
      surname: [""],
      email: [""],
      tel: [""],
      address: formBuilder.group({
        country: [""],
        city: [""],
        address: [""]
      })
    })
  }

  onSubmit() {
    console.log(this.frm.value);

  }
}
