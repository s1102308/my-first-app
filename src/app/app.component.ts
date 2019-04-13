import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loadedFeature = 'collection';

  ngOnInit() {
    firebase.initializeApp({
      apiKey: "AIzaSyCNdRhanhU2ubZQBLMGspNTcAId6AxLQ-0",
      authDomain: "funko-winkel.firebaseapp.com"
    });
  }

  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }
}
