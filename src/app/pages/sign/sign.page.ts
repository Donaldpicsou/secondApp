import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/modele/user';
import { NgForm } from '@angular/forms';
import {AuthenticationService} from 'src/app/services/authentication.service';
@Component({
  selector: 'app-sign',
  templateUrl: './sign.page.html',
  styleUrls: ['./sign.page.scss'],
})
export class SignPage implements OnInit {

  signup : User  = {username: "", password: ""};
  submitted = false;
  constructor(private router : Router, private auth : AuthenticationService
  ) { }

  onSignup(form : NgForm){
    this.submitted = true; 
    if(form.valid){
      this.auth.signup(this.signup.username);
      this.router.navigateByUrl('/home');
    }
  }

  ngOnInit() {
  }

}
