import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PostListComponent } from './post-list/post-list.component';
import { NewPostComponent } from './post-list/new-post/new-post.component';
import { FourofourComponent } from './fourofour/fourofour.component';

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
    },
    {
        path: 'not-found',
        component: FourofourComponent
    },
    {
        path: '**',
        redirectTo: '/not-found'
    }
];

@NgModule({
imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }