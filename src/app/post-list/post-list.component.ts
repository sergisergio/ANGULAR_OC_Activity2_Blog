import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { PostsService } from '../services/posts.service';
import { Post } from '../models/post.model';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit, OnDestroy {

  posts: Post[];

  postsSubscription: Subscription;

  constructor(private postsService: PostsService) { }

  ngOnInit() {
    //this.loadPosts();
    this.postsSubscription = this.postsService.postsSubject.subscribe(
      (posts: Post[]) => {
        this.posts = posts.reverse();
      }
    );
    this.postsService.getPosts();
    this.postsService.emitPostSubject()
  }

  /*loadPosts() {

    this.posts = this.postsService.getPosts();
    //this.postsService.getPosts();
    console.log(this.posts);
  }*/

  search($event) {
    console.log($event);
    console.log('prout');
    if ($event) this.posts = $event;
  }

  ngOnDestroy() {
    this.postsSubscription.unsubscribe();
  }

}
