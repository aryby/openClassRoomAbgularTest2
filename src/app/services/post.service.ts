import { Injectable } from '@angular/core';
import { Post } from '../models/post.model';
import { Subject } from 'rxjs';
import * as firebase from 'firebase';

@Injectable()
export class PostService {

  posts :Post[] = [];
  postsSubject = new Subject<Post[]>();

  constructor() {
    this.getPost();
  }


  emitPosts(){
    this.postsSubject.next(this.posts);
  }

  savePosts(){
    firebase.database().ref('/posts').set(this.posts);
  }


  getPost(){
    firebase.database().ref('/posts').on('value', (data)=>{
      this.posts = data.val() ? data.val() : [];
      this.emitPosts();
    });
  }

  getSingleBook(id : number){
    return new Promise(
      (resolve, reject)=>{
        firebase.database().ref('/posts').once('value').then(
          (data)=>{
            resolve(data.val());
          },(error)=>{
            reject(error);
          }
        );
      }
    );
  }

  createNewPost(newPost : Post){
    if (this.posts.length<=0) {
      newPost.id=1;
    } else {
      newPost.id=this.posts.length+1;
    }
    this.posts.push(newPost);
    this.savePosts();
    this.emitPosts();
  }

  removePost(post : Post){
    const postIndexToRemove = this.posts.findIndex(
      (postEl)=>{
        if(postEl=== post){
          return true;
        }
      }
    );
    this.posts.splice(postIndexToRemove, 1);
    this.savePosts();
    this.emitPosts();
  }

}
