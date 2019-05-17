import { Component, OnInit } from '@angular/core';
import { UsersService } from '../providers/users.service';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css']
})
export class PagesComponent implements OnInit {

  constructor(public _userService:UsersService) { }

  ngOnInit() {
    this._userService.getUsers(1).subscribe()
  }
  navigateToUser(id:string){
    this._userService.getUserById(id).subscribe()
  }
  switchPage(page:number){
    this._userService.getUsers(page).subscribe()
  }
}
