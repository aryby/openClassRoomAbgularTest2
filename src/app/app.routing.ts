import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { PostsComponent } from './posts/posts.component';
import { AuthGuardService } from './services/auth-guard.service';
import { NewPostComponent } from './posts/new-post/new-post.component';

const routes: Routes =[
    { path: '', component: PostsComponent },
    { path: 'posts',  component: PostsComponent },
    { path: 'posts/new', canActivate : [AuthGuardService],  component: NewPostComponent },
    { path: 'register', component: SignupComponent },
    { path: 'login', component: LoginComponent },
    { path: '**', redirectTo: 'posts', pathMatch: 'full' }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
  
    RouterModule.forRoot(routes)
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
