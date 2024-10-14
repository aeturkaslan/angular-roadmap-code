import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-templatedriven',
  template: `
  <form #frm="ngForm" (ngSubmit)="onSubmit(frm.value)">
    <input type="text" name="name" placeholder="Name" ngModel> <br>
    <input type="text" name="surname" placeholder="Surname" ngModel> <br>
    <input type="email" name="email" placeholder="Email" ngModel> <br>
    <input type="tel" name="tel" placeholder="Tel"> <br> <!--tel'i ngModel ile bağlamadık-->
    <div ngModelGroup="address">
      <input type="text" name="country" placeholder="Country" ngModel> <br>
      <input type="text" name="city" placeholder="City" ngModel> <br>
      <input type="text" name="address" placeholder="Address" ngModel> <br>
    </div>

    <button>Send</button>
  </form>
  `
})
export class TemplatedrivenComponent {
  @ViewChild("frm", { static: true }) frm: NgForm;  //Form'u Component class'ında referans etmek için

  onSubmit(data) {
    console.log(`Value: ${this.frm.value}`);
    console.log(`Valid: ${this.frm.valid}`);
    console.log(`Touched: ${this.frm.touched}`);
    console.log(`Submitted: ${this.frm.submitted}`);

    console.log(data);

    console.log(this.frm);
    console.log(this.frm.form);
    console.log(this.frm.controls);
  }
}
