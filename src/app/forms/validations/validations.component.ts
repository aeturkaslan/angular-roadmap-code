import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-validations',
  template: `
  <form [formGroup]="frm" (ngSubmit)="onSubmit()">
    <input type="text" placeholder="Name" formControlName="name"> <br>
    <div *ngIf="!name.valid && (name.dirty || name.touched)">
      {{name.errors | json}}
    </div>

    <input type="text" placeholder="Surname" formControlName="surname"> <br>
    <div *ngIf="!surname.valid && (surname.dirty || surname.touched)">
      {{surname.errors | json}}
    </div>

    <input type="text" placeholder="Email" formControlName="email"> <br>
    <div *ngIf="!email.valid && (email.dirty || email.touched)">
      {{email.errors | json}}
    </div>

    <button>Send</button>
  </form>
  `
})
export class ValidationsComponent {
  frm:FormGroup;
  constructor(private formBuilder: FormBuilder){
    this.frm = formBuilder.group({
      name: ["", [Validators.required, Validators.minLength(3)]],
      surname: ["", Validators.required],
      email: ["", [Validators.required, Validators.email]]
    })
  }

  onSubmit(){
    console.log("Valid? - " + this.frm.valid);   
    console.log(this.frm.value);
  }

  get name(){
    return this.frm.get("name");
  }
  get surname(){
    return this.frm.get("surname");
  }
  get email(){
    return this.frm.get("email");
  }
}
