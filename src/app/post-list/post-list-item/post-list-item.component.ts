import { Component, OnInit, Input } from '@angular/core';
import { PostsService } from '../../services/posts.service';
import { Post } from '../../models/post.model'

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.css']
})
export class PostListItemComponent implements OnInit {

  @Input() title: string
  @Input() content: string
  @Input() createdAt: Date
  @Input() loveIts: number;
  @Input() post: Post;

  constructor(private postsService: PostsService) { }

  ngOnInit() {
  }

  onDelete(post: Post) {
    let confirmDelete = confirm('Confirmez la suppression de ce post SVP !');
    if (confirmDelete) {
      this.postsService.removePost(post);
    }
  }

  onLike(post: Post) {
    this.postsService.likePost(post);
  }

  onNoLike(post: Post) {
    this.postsService.noLikePost(post)
  }

}
