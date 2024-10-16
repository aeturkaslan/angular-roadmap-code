import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-read-user',
  template: `
  <ul>
    <li *ngFor="let user of userService.users">{{ user }}</li>
  </ul>
  `
})
export class ReadUserComponent {
  constructor(public userService: UserService) {

  }
}
