import { Component, OnInit } from '@angular/core';
import { UsersService } from '../providers/users.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css']
})
export class PagesComponent implements OnInit {

  page:number= Number(localStorage.getItem('page')) || 1;

  constructor(public _userService:UsersService,private _ar:ActivatedRoute,private router:Router) { }

  ngOnInit() {    

        this._userService.users = JSON.parse(localStorage.getItem('users')) || undefined;
        if (!this._userService.users) {
          this._userService.getUsers(this.page).subscribe()
        }
    
  }

  navigateToUser(id:string){
    let userCached = JSON.parse(localStorage.getItem('user')) || undefined;
    if(userCached.id === id ){
      this._userService.user = userCached;
      this.router.navigate([`user/${this._userService.user.id}`])
    }else{
      this._userService.getUserById(id).subscribe()
    }
  }

  switchPage(page:number){
    this._userService.getUsers(page).subscribe(()=>{
      this.page=page;
      localStorage.setItem('page',JSON.stringify(this.page))
    })
  }


}
