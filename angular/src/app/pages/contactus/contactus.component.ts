import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {

  constructor(
    private router:Router
    ) { }

  ngOnInit(): void {
  }
  Info = {
    name:"",
    email:"",
    phone:"",
    message:""
  }
  InfoValidator = {
    name:false,
    email:false,
    phone:false,
    message:false
  }
  contact() {
    // Validate contact info.
    if (this.Info.name === ""){
      console.log("Name empty")
      this.InfoValidator.name=true;
    }else{
      this.InfoValidator.name=false;
    }
    if (this.Info.email === ""){
      console.log("EMail empty")
      this.InfoValidator.email=true;
    }else{
      this.InfoValidator.email=false;
    }
    if (this.Info.phone === ""){
      console.log("Cell phone is empty")
      this.InfoValidator.phone=true;
    }else{
      this.InfoValidator.phone=false;
    }
    if (this.Info.message === ""){
      console.log("Message empty")
      this.InfoValidator.message=true;
    }else{
      this.InfoValidator.message=false;
    }
    //Validate all fields are not empty and then link to home
    if(this.Info.name !== "" && this.Info.email !== "" && this.Info.phone !== "" && this.Info.message !== ""){
      localStorage.setItem("Info",JSON.stringify(this.Info))
      this.router.navigate(['/'])
    }
    console.log("Info", this.Info);
  }

}