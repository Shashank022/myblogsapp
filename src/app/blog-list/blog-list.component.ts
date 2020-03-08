import { Component, OnInit } from '@angular/core';
import { BlogPost } from '../blog-post';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.css']
})
export class BlogListComponent implements OnInit {

  blogPosts: BlogPost[] = [];

  constructor() { }

  ngOnInit() {
    this.blogPosts.push(new BlogPost("Blog Post 1"," Summary of the Post 1"));
    this.blogPosts.push(new BlogPost("Blog Post 2"," Summary of the Post 2"));
  }

}
 