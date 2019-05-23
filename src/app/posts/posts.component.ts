import { Component, OnInit, OnDestroy } from '@angular/core';
import { Post } from '../models/post.model';
import { Subscription } from 'rxjs';
import { PostService } from '../services/post.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit ,OnDestroy {


  posts: Post[];
  postsSubscription : Subscription;

  constructor(private postService : PostService,
              private router: Router,
              private httpClient : HttpClient
              ) { }

  ngOnInit() {
    this.postsSubscription = this.postService.postsSubject.subscribe(
      (posts : Post[])=>{
        this.posts = posts;
      }
    );
    this.postService.getPost();
    this.postService.emitPosts();
  }

  onNewPost(){
    this.router.navigate(['/posts/new']);
  }

  onLike(post: Post){
    post.loveIts++;
    this.postService.savePosts();
    this.postService.emitPosts();
  }

  onDesLike(post: Post){
    post.loveIts--;
    this.postService.savePosts();
    this.postService.emitPosts();
  }
  

  onDeletePost(post: Post){
    this.postService.removePost(post);
  }
//cette methode n'est pas neccessaire vous pouver l'ajouter /posts/view/id
  onViewPost(id: number){
    this.router.navigate(['/posts'])
  }

  ngOnDestroy(): void {
    this.postsSubscription.unsubscribe();
  }


}
