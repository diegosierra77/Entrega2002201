import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import firebase from 'firebase/app';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(public auth: AngularFireAuth) {
//    this.userInfo = JSON.parse(localStorage.getItem("userInfo"))
//    this.loginuser = "Bienvenido: " + this.userInfo.email
  }

  // login() {
  //   this.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  // }
  logout() {
    this.auth.signOut();
    console.log("Logout");
  }

  ngOnInit(): void {
  }

}
