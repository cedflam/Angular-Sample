import { Component } from '@angular/core';
import construct = Reflect.construct;
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'books';

  constructor() {
    var firebaseConfig = {
      apiKey: "AIzaSyBM3F61c5yvKYkFQfO2qMg2jejnJAUXmcg",
      authDomain: "books-c9432.firebaseapp.com",
      databaseURL: "https://books-c9432.firebaseio.com",
      projectId: "books-c9432",
      storageBucket: "books-c9432.appspot.com",
      messagingSenderId: "450100365011",
      appId: "1:450100365011:web:0797982cbe737af65f3626",
      measurementId: "G-RF6B635RJX"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  }

}
