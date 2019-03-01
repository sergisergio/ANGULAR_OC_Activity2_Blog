import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Post } from '../models/post.model';
import * as firebase from 'firebase';
import DataSnapshot = firebase.database.DataSnapshot;


@Injectable({
    providedIn: 'root'
})
export class PostsService {

    posts: Post[] = [];
    postsSubject = new Subject<Post[]>();

    /*private posts = [
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
            title: 'Troisième post',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque tincidunt blandit nunc, ac ornare odio dictum pulvinar. Vivamus vulputate tincidunt pellentesque. Duis quis lorem ac purus scelerisque venenatis. Integer lacinia porta diam ac elementum. Vivamus pretium aliquam nibh, quis fermentum mi dignissim id. Mauris non congue sem. Quisque suscipit molestie sem id porta.Cras consequat tempus sapien a laoreet. In rutrum ex sed dictum vehicula. Curabitur tempor odio quis arcu auctor cursus. Praesent scelerisque dolor felis, vitae egestas ligula lacinia at. Phasellus convallis ac diam vel cursus. Ut vitae leo ipsum. Ut eu elementum sapien, at consequat ipsum. Etiam lacinia risus fringilla, sodales sapien non, lacinia magna. Praesent et elit posuere, sagittis enim ut, sollicitudin mauris. Sed suscipit ligula ut quam ultricies, et rhoncus metus posuere. Cras interdum, neque et lacinia tempor, metus eros porttitor lacus, sed rutrum quam eros tempor magna. Fusce sollicitudin purus a metus gravida efficitur. Mauris ac neque velit. Suspendisse ullamcorper velit et sem convallis, efficitur rhoncus lorem mollis. Vestibulum sed cursus nisl.',
            created_at: new Date,
            loveIts: 2
        },
        {
            title: 'Dernier post',
            content: 'Oh no! The professor will hit me! But if Zoidberg fixes it… then perhaps gifts! Who said that? SURE you can die! You want to die?! Daddy Bender, we re hungry. Ah, the Breakfast Club soundtrack! I can t wait til I m old enough to feel ways about stuff!',
            created_at: new Date,
            loveIts: 2
        }
    ];*/

    constructor() {
        this.getPosts();
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
        this.savePosts();
        this.emitPostSubject();
    }

    removePost(post: Post) {
        const postIndexToRemove = this.posts.findIndex(
            (postEl) => {
                if(postEl === post) {
                    return true;
                }
            }
        );
        this.posts.splice(postIndexToRemove, 1);
        this.savePosts();
        this.emitPostSubject();
    }

    search(word: string): Post[] {
        if (word.length > 2) {
          let response = [];
          this.posts.forEach(post => {
            if (post.title.includes(word) || post.content.includes(word)) response.push(post);
          });

          return response;
        }
      }

    savePosts() {
        firebase.database().ref('/posts').set(this.posts);
    }

    emitPosts() {
        this.postsSubject.next(this.posts);
    }

    getPosts() {
        firebase.database().ref('/posts')
          .on('value', (data: DataSnapshot) => {
              this.posts = data.val() ? data.val() : [];
              this.emitPosts();
            }
          );
    }

    getSinglePost(id: string) {
        return new Promise((resolve, reject) => {
            firebase.database().ref('/posts/' + id).once('value').then(
                (data: DataSnapshot) => {
                    resolve(data.val());
                }, (error) => {
                reject(error);
                }
            );
        }
    );
    }
}