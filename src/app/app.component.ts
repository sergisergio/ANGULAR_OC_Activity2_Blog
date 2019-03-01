import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import * as firebase from 'firebase';

@Component({
selector: 'app-root',
templateUrl: './app.component.html',
styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

    constructor() {
        var config = {
            apiKey: "AIzaSyC78qnJdTlhoGPkDUitJo488FJGL1MXUmw",
            authDomain: "angular-blog2.firebaseapp.com",
            databaseURL: "https://angular-blog2.firebaseio.com",
            projectId: "angular-blog2",
            storageBucket: "angular-blog2.appspot.com",
            messagingSenderId: "921080783067"
          };
          firebase.initializeApp(config);
        }

    ngOnInit() {
        //this.posts = this.postsService.posts;
    }
}
