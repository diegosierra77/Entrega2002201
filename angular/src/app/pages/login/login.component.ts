import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import firebase from 'firebase/app';
import { Router } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    public auth: AngularFireAuth,
    private router:Router
  ) { }

  ngOnInit(): void {
  }
  userInfo = {
    email:"",
    password:"",
    username:""
  }
  userInfoValidator = {
    email:false,
    password:false,
    username:false
  }
  variableTemporal = {}
  registrar() {
    //JSON.parse //string a objeto
    //JSON.stringify(this.userInfo) //objeto a string
    if (this.userInfo.email === ""){
      console.log("Email vacio")
      this.userInfoValidator.email=true;
    }else{
      this.userInfoValidator.email=false;
    }
    if (this.userInfo.username === ""){
      //console.log("Usuario vacio")
      this.userInfoValidator.username=true;
    }else{
      this.userInfoValidator.username=false;
    }
    if (this.userInfo.password === ""){
      //console.log("Clave vacia")
      this.userInfoValidator.password=true;
    }else{
      this.userInfoValidator.password=false;
    }
    if(this.userInfo.email !== "" && this.userInfo.username !== "" && this.userInfo.password !== ""){
      localStorage.setItem("userInfo",JSON.stringify(this.userInfo))
      //this.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
      //this.auth.signInWithEmailAndPassword(this.userInfo.email, this.userInfo.password);
      firebase.auth().signInWithEmailAndPassword(this.userInfo.email, this.userInfo.password)
        .then((user) => {
          this.router.navigate(['/'])
        })
        .catch((error) => {
          var errorCode = error.code;
          var errorMessage = error.message;
          alert("Error: " + errorCode + ", " + errorMessage);
        }
        )
    }
    this.variableTemporal=localStorage.getItem("userInfo")
    // console.log("Temp", this.variableTemporal)
    //console.log("User info", this.userInfo)
    // console.log("User info validate", this.userInfoValidator)
  }
}

