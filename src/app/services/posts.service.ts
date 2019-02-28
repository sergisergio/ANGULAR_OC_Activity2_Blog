import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Post } from '../models/post.model'


@Injectable({
    providedIn: 'root'
})
export class PostsService {

    postsSubject = new Subject<any[]>();

    private posts = [
        {
            title: 'Premier post',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque tincidunt blandit nunc, ac ornare odio dictum pulvinar. Vivamus vulputate tincidunt pellentesque. Duis quis lorem ac purus scelerisque venenatis. Integer lacinia porta diam ac elementum. Vivamus pretium aliquam nibh, quis fermentum mi dignissim id. Mauris non congue sem. Quisque suscipit molestie sem id porta.Cras consequat tempus sapien a laoreet. In rutrum ex sed dictum vehicula. Curabitur tempor odio quis arcu auctor cursus. Praesent scelerisque dolor felis, vitae egestas ligula lacinia at. Phasellus convallis ac diam vel cursus. Ut vitae leo ipsum. Ut eu elementum sapien, at consequat ipsum. Etiam lacinia risus fringilla, sodales sapien non, lacinia magna. Praesent et elit posuere, sagittis enim ut, sollicitudin mauris. Sed suscipit ligula ut quam ultricies, et rhoncus metus posuere. Cras interdum, neque et lacinia tempor, metus eros porttitor lacus, sed rutrum quam eros tempor magna. Fusce sollicitudin purus a metus gravida efficitur. Mauris ac neque velit. Suspendisse ullamcorper velit et sem convallis, efficitur rhoncus lorem mollis. Vestibulum sed cursus nisl. ',
            created_at: new Date,
            loveIts: 3
        },
        {
            title: 'Deuxième post',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque tincidunt blandit nunc, ac ornare odio dictum pulvinar. Vivamus vulputate tincidunt pellentesque. Duis quis lorem ac purus scelerisque venenatis. Integer lacinia porta diam ac elementum. Vivamus pretium aliquam nibh, quis fermentum mi dignissim id. Mauris non congue sem. Quisque suscipit molestie sem id porta.Cras consequat tempus sapien a laoreet. In rutrum ex sed dictum vehicula. Curabitur tempor odio quis arcu auctor cursus. Praesent scelerisque dolor felis, vitae egestas ligula lacinia at. Phasellus convallis ac diam vel cursus. Ut vitae leo ipsum. Ut eu elementum sapien, at consequat ipsum. Etiam lacinia risus fringilla, sodales sapien non, lacinia magna. Praesent et elit posuere, sagittis enim ut, sollicitudin mauris. Sed suscipit ligula ut quam ultricies, et rhoncus metus posuere. Cras interdum, neque et lacinia tempor, metus eros porttitor lacus, sed rutrum quam eros tempor magna. Fusce sollicitudin purus a metus gravida efficitur. Mauris ac neque velit. Suspendisse ullamcorper velit et sem convallis, efficitur rhoncus lorem mollis. Vestibulum sed cursus nisl.',
            created_at: new Date,
            loveIts: -1
        },
        {
            title: 'Dernier post',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque tincidunt blandit nunc, ac ornare odio dictum pulvinar. Vivamus vulputate tincidunt pellentesque. Duis quis lorem ac purus scelerisque venenatis. Integer lacinia porta diam ac elementum. Vivamus pretium aliquam nibh, quis fermentum mi dignissim id. Mauris non congue sem. Quisque suscipit molestie sem id porta.Cras consequat tempus sapien a laoreet. In rutrum ex sed dictum vehicula. Curabitur tempor odio quis arcu auctor cursus. Praesent scelerisque dolor felis, vitae egestas ligula lacinia at. Phasellus convallis ac diam vel cursus. Ut vitae leo ipsum. Ut eu elementum sapien, at consequat ipsum. Etiam lacinia risus fringilla, sodales sapien non, lacinia magna. Praesent et elit posuere, sagittis enim ut, sollicitudin mauris. Sed suscipit ligula ut quam ultricies, et rhoncus metus posuere. Cras interdum, neque et lacinia tempor, metus eros porttitor lacus, sed rutrum quam eros tempor magna. Fusce sollicitudin purus a metus gravida efficitur. Mauris ac neque velit. Suspendisse ullamcorper velit et sem convallis, efficitur rhoncus lorem mollis. Vestibulum sed cursus nisl.',
            created_at: new Date,
            loveIts: 2
        }
    ];

    getPosts() {
        return this.posts;
    }

    count() {
        return this.posts.length;
    }

    sayHello() {
        alert('yo');
    }

    emitPostSubject() {
        this.postsSubject.next(this.posts.slice())
    }

    noLikePost(post: Post) {
        post.loveIts--
        this.emitPostSubject();
        console.log(`loveIts: ${ post.loveIts }`);

    }

    likePost(post: Post) {
        post.loveIts++
        console.log(`loveIt: ${ post.loveIts }`);
        this.emitPostSubject();
    }



    createNewPost(newPost: Post) {
        this.posts.push(newPost);
        //this.savePosts();
        this.emitPostSubject();
      }

    removePost(post: Post) {
        this.posts.splice(this.posts.findIndex(postObj => postObj === post), 1)
        this.emitPostSubject()
    }
}