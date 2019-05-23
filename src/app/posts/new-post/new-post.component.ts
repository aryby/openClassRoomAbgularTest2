import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PostService } from 'src/app/services/post.service';
import { Router } from '@angular/router';
import { Post } from 'src/app/models/post.model';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})
export class NewPostComponent implements OnInit {

  postForm : FormGroup;

  constructor(private formBuilder: FormBuilder,
              private postService: PostService,
              private router : Router) { }

  ngOnInit() {
    this.initForm();
  }

  initForm(){
    this.postForm = this.formBuilder.group({
      titre: ['', Validators.required],
      contenu : ['', Validators.required]
    });
  }

  onSavePost(){
    
    const titre = this.postForm.get('titre').value;
    const contenu = this.postForm.get('contenu').value;

    const newPost = new Post(titre, contenu);

    this.postService.createNewPost(newPost);
    this.router.navigate(['/posts']);
  }

}
