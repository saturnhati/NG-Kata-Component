import { Component, Input, OnInit } from '@angular/core';
import { User } from '../user.class';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  @Input() user: User | undefined = undefined;

  constructor() {}

  ngOnInit(): void {}
}
