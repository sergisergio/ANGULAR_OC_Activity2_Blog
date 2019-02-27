import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PostListComponent } from './post-list/post-list.component';
import { NewPostComponent } from './post-list/new-post/new-post.component';

const routes: Routes = [
{
path: 'posts',
component: PostListComponent
},
{
path: '',
redirectTo: '/posts',
pathMatch: 'full'
},
{
path: 'new',
component: NewPostComponent
}
];

@NgModule({
imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }