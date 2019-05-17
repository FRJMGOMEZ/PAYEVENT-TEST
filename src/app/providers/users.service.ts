import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { User } from '../models/user.model';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private urlGetAll: string = 'https://reqres.in/api/users?page='
  private urlGetOne: string = 'https://reqres.in/api/users/'

  public users:User[]

  public user:User

  constructor(private http: HttpClient,private router: Router) {}

  getUsers(page:number){
    this.getUserById(this.urlGetAll)
    return this.http.get(`${this.urlGetAll}${page}`).pipe(map((res:any)=>{
      this.users = res.data;
      localStorage.setItem('users',JSON.stringify(this.users))
    }))
    
  }

  getUserById(id:string){
    return this.http.get(`${this.urlGetOne}${id}`).pipe(map((res:any)=>{
      this.user = res.data;
       this.router.navigate([`user/${this.user.id}`]).then(()=>{
         localStorage.setItem('user', JSON.stringify(this.user))
       })
    }))
  }
}
