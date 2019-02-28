import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { PostsService } from './services/posts.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
selector: 'app-root',
templateUrl: './app.component.html',
styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

    posts: any[];

    constructor(private postsService: PostsService) {}

    ngOnInit() {
        //this.posts = this.postsService.posts;
    }

    search($event) {
        if ($event) this.posts = $event;
    }
}
