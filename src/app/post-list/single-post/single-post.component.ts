import { Component, OnInit } from '@angular/core';
import { Post } from '../../models/post.model';
import { PostsService } from '../../services/posts.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.css']
})
export class SinglePostComponent implements OnInit {

  post: Post;

  constructor(private route: ActivatedRoute,
              private postsService: PostsService,
              private router: Router) { }

  ngOnInit() {

    const id = this.route.snapshot.paramMap.get('id');
    //console.log(id);
    this.postsService.getSinglePost(id).then(
      (post: Post) => {
        this.post = post;
      }
    );
    //this.post = this.postsService.getSinglePost(id);
  }

  onBack() {
    this.router.navigate(['/posts']);
  }
}
