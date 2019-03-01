import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PostsService } from '../services/posts.service';
import { Post } from '../models/post.model';
import { AuthService } from '../services/auth.service';
import * as firebase from 'firebase';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  posts: any[];
  isAuth: boolean;

  @Output() searchPosts: EventEmitter<Post[]> = new EventEmitter();

  constructor(private postsService: PostsService, private authService: AuthService) { }

  ngOnInit() {
      firebase.auth().onAuthStateChanged(
      (user) => {
        if(user) {
          this.isAuth = true;
        } else {
          this.isAuth = false;
        }
      }
    );
  }

  onSubmit(form: NgForm): void {
    const searchPosts = this.postsService.search(form.value['word']);
    if (searchPosts) {
      //console.log(searchPosts);
      this.searchPosts.emit(searchPosts);
    }
  }

  onSignOut() {
    this.authService.signOutUser();
  }

}
