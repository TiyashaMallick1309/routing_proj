import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { BlogService } from '../blog.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor (private router: Router, public blogService: BlogService){}
  goToArticle(){
    this.router.navigate(["/category/article/4"]);
  }
}