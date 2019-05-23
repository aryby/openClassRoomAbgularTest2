import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
      signInForm : FormGroup;
      errorMessage : string;
      constructor(private formBuilder: FormBuilder,
        private authService : AuthService,
        private router: Router
        ) { }

    ngOnInit() {
    this.initForm();
    }

    initForm(){
    this.signInForm = this.formBuilder.group({
    email : ['',[Validators.required, Validators.email]],
    password : ['',[Validators.required, Validators.pattern(
        /[0-9a-zA-Z]{6,}/
    )]]
    });
    }

    onSubmit(){
    const email = this.signInForm.get('email').value;
    const password = this.signInForm.get('password').value;
    console.log(email);

    this.authService.signInUser(email, password).then(
    ()=>{
        this.router.navigate(['/posts']);
    },(error)=>{
        this.errorMessage=error;
    }
    );
    }


}
