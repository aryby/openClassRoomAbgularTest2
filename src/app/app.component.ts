import { Component, OnInit} from '@angular/core';

import 'rxjs/add/operator/filter';

import * as firebase from 'firebase';



@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

    constructor() {
                 // Your web app's Firebase configuration
                var firebaseConfig = {
                    apiKey: "AIzaSyBWe4CFgjohzD_0LjqqpjyH31S_QVoYJU4",
                    authDomain: "posts-37f93.firebaseapp.com",
                    databaseURL: "https://posts-37f93.firebaseio.com",
                    projectId: "posts-37f93",
                    storageBucket: "posts-37f93.appspot.com",
                    messagingSenderId: "306545627545",
                    appId: "1:306545627545:web:5c1ee1072ec4c3ce"
                };
                // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

    }

    ngOnInit() {
      
    }
}
