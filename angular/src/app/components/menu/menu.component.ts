import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor() { 
  }

  ngOnInit(): void {
  }

  // loginuser = ""
  // userInfo = {
  //   email:"",
  //   password:"",
  //   username:""
  // }

  // updatename(): {
  //   var target = document.getElementById('loginuser')
  //   console.log("User info 2:", localStorage.getItem("userInfo"))
  //   this.userInfo = JSON.parse(localStorage.getItem("userInfo"))
  //   this.loginuser = this.userInfo.email
  //   console.log("Otro:", this.loginuser)
  //   // var x = angular.element(document.getElementById("loginuser"));
  //   // document.getElementById("loginuser").innerHTML = this.userInfo.email
  // }

}
