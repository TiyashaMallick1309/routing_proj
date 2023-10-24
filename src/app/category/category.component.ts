import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogService } from '../blog.service';
import { Blog } from '../blog/blog.component';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})

export class CategoryComponent {
  blogList: Array<Blog>|undefined;
constructor(private activatedRoute:ActivatedRoute, private blogService: BlogService){
this.activatedRoute.params.subscribe((params)=>{
  this.blogList = this.blogService.blogs.filter(b=>b.category==params['categoryId']);
});
}
}