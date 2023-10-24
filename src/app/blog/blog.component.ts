import {
    Component
}
from '@angular/core';
import {
    ActivatedRoute
}
from '@angular/router';
import {
    BlogService
}
from '../blog.service';

export interface Blog {
    id: number,
    title: string,
    category: string
}

@Component({ selector: 'app-blog', templateUrl: './blog.component.html', styleUrls: ['./blog.component.css'] }) 

export class BlogComponent {
    currentBlog: Blog | undefined;
    constructor(private activeRoute: ActivatedRoute, private blogService: BlogService) {
      console.log(this.activeRoute);
        // let blogId = this.activeRoute.snapshot.params['id'];
        // let blogIndex = this.blogService.blogs.findIndex((b) => b.id == blogId);
        // this.currentBlog = this.blogService.blogs[blogIndex];

        this.activeRoute.params.subscribe((params)=>{
            let blogIndex=this.blogService.blogs.findIndex(
                (b)=>b.id==params['id']
            );
            this.currentBlog=this.blogService.blogs[blogIndex];
        });
    }
}
