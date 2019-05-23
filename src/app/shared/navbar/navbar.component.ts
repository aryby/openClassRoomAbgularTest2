import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { AuthService } from 'src/app/services/auth.service';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

    isAuth : boolean;
    constructor(public authService: AuthService) {
    }

    ngOnInit() {
        firebase.auth().onAuthStateChanged(
            (user)=>{
                if (user) {
                   this.isAuth = true; 
                } else {
                    this.isAuth = false;
                }
            }
        );
    }
    onSignOut(){
        this.authService.signOutUser();
    }
}
