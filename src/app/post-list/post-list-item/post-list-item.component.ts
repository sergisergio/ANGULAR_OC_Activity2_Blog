import { Component, OnInit, Input } from '@angular/core';
import { PostsService } from '../../services/posts.service'
import { Post } from '../../models/post.model'

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.css']
})
export class PostListItemComponent implements OnInit {

  @Input() postTitle: Post
  @Input() postContent: Post
  @Input() postCreatedAt: Post
  @Input() index: Post

  loveIts = 0;

  constructor(private postsService: PostsService) { }

  ngOnInit() {
  }

  onDelete(post: Post) {
    this.postsService.removePost(post)
  }

}
