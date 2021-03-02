import { Injectable } from '@angular/core';
//import { User } from '../models/user.model';
import firebase from "firebase";
import { AngularFireAuth } from '@angular/fire/auth';
import User = firebase.User;

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user?: User;

  constructor(
    private fireAuth: AngularFireAuth
  ) {
    this.fireAuth.authState.subscribe((user) => {
      if (user) {
        // this.setUser(user);
      }
    });

    // setUser(user: User) {
    //   this.user = user;
    // }

    // get isLoggedin(): Boolean {
    //   return (this.user !== undefined);
    // }
  }
}
