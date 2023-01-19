import { Component } from '@angular/core';
import { User } from './user.class';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'NG-Kata-Component';

  public user: User = {
    firstname: 'Mark',
    lastname: 'Smith',
    address: 'Tree Road 4500',
    phone_number: 510002424,
  };
}
