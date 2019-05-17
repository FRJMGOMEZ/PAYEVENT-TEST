import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/providers/users.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(public _userService:UsersService) { }

  ngOnInit() {
  }

}
