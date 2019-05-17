import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/providers/users.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(public _userService:UsersService,private _ar:ActivatedRoute,private router:Router) { }

  ngOnInit() {
    this._ar.params.subscribe((params)=>{
        let id = params['id'];
        let userCached = JSON.parse(localStorage.getItem('user'))||undefined;
        if(userCached){
          this._userService.user = userCached;
        }else{
          this._userService.getUserById(id).subscribe()
        }
    })
  }

  toPages(){
     this.router.navigate(['users']).then(()=>{
       this._userService.user = undefined;
     })
  } 

}
