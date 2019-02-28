import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { PostsService } from '../services/posts.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit, OnDestroy {

  posts: any[];
  postsSubscription: Subscription;


  constructor(private postsService: PostsService) { }

  ngOnInit() {
    //this.loadPosts();
    this.postsSubscription = this.postsService.postsSubject.subscribe(
      (posts: Array<object>) => {
        this.posts = posts.reverse()
      }
    )
    this.postsService.emitPostSubject()
  }

  loadPosts() {

    this.posts = this.postsService.getPosts();
    //this.postsService.getPosts();
    console.log(this.posts);
  }

  ngOnDestroy() {
    this.postsSubscription.unsubscribe();
  }

}
