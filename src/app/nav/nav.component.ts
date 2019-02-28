import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PostsService } from '../services/posts.service';
import { Post } from '../models/post.model';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  @Output() searchPosts: EventEmitter<Post[]> = new EventEmitter();

  constructor(private postsService: PostsService) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm): void {
    console.log('test');
    const searchPosts = this.postsService.search(form.value['word']);
    if (searchPosts) {
      console.log(searchPosts);
      this.searchPosts.emit(searchPosts);
    }
  }

}
