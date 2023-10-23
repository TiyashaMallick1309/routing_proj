import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  userList=[
    {
      id:1,
      name: "Person1"
    },
    {
      id:2,
      name:"Person2"
    }
  ]
  constructor() { }

  addUser(user:any){
    this.userList.push(user)
  }
}
