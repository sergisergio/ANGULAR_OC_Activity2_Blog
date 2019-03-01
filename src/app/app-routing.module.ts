import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PostListComponent } from './post-list/post-list.component';
import { NewPostComponent } from './post-list/new-post/new-post.component';
import { FourofourComponent } from './fourofour/fourofour.component';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import { SinglePostComponent } from './post-list/single-post/single-post.component';

import { AuthGuardService } from './services/auth-guard.service';

const routes: Routes = [
    {
        path: 'posts',
        component: PostListComponent
    },
    {
        path: 'posts/view/:id',
        component: SinglePostComponent
    },
    {
        path: '',
        redirectTo: '/posts',
        pathMatch: 'full'
    },
    {
        path: 'posts/new',
        canActivate: [AuthGuardService],
        component: NewPostComponent
    },
    {
        path: 'auth/signup',
        component: SignupComponent
    },
    {  path: 'auth/signin',
        component: SigninComponent
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