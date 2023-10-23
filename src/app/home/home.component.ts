import { Component } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  userData: Array<any> =[]
  constructor (private userService: UserService){
    this.userData=this.userService.userList;
  }

  addUser(user:any){
    this.userService.addUser(user)
  }
}
