import * as firebase from 'firebase';
import {Router} from '@angular/router';
import {Injectable} from '@angular/core';

@Injectable()
export class AuthService {
  token: string;

  constructor(private route: Router){

  }

  signupUser(email: string, password: string) {
    firebase.auth().createUserWithEmailAndPassword(email, password).catch(error => console.log(error));
  }

  signinUser(email: string, password: string) {
    firebase.auth().signInWithEmailAndPassword(email, password).then(response => { this.route.navigate(['/']);
    firebase.auth().currentUser.getIdToken().then((token: string) => this.token = token); }).catch(error => console.log(error));
  }

  signoutUser() {
    firebase.auth().signOut().then(response => {this.route.navigate(['/']); });
    this.token = null;
  }

  getToken() {
    firebase.auth().currentUser.getIdToken().then((token: string) => this.token = token);
    return this.token;
  }

  isAuthenticated() {
    return this.token != null;
  }
}
