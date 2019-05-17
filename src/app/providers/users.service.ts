import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { User } from '../models/user.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private urlGetAll: string = 'https://reqres.in/api/users?page='
  private urlGetOne: string = 'https://reqres.in/api/users/'

  public users:User[]

  public user:User

  constructor(private http:HttpClient) {}

  getUsers(page:number){
    return this.http.get(`${this.urlGetAll}${page}`).pipe(map((res:any)=>{
      this.users = res.data;
      console.log(res.data)
    }))
  }

  getUserById(id:string){
    return this.http.get(`${this.urlGetOne}${id}`).pipe(map((res:any)=>{
      this.user = res.data;
    }))
  }
}
