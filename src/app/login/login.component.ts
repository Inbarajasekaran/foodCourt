import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, NgForm, FormGroupDirective } from '@angular/forms';
import { Router } from '@angular/router';
import { UserDataService } from '../service/user-data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent implements OnInit {

  user = '1';
  loginForm: FormGroup
  isAvail = false;

  constructor(private fb: FormBuilder, private router: Router, private userData: UserDataService) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(4)]]
    });
  }

  submit() {
    for (let i = 0; i < this.userData.userData.length; i++) {
      this.isAvail = false;
      if (this.loginForm.valid && this.loginForm.controls.username.value == this.userData.userData[i]['username'] &&
        this.loginForm.controls.password.value == this.userData.userData[i]['password']) {
        this.isAvail = true;
        break;
      }
    }
    if (this.isAvail == true) {
      localStorage.setItem('user', this.user);
      this.router.navigateByUrl('/dashboard');
    } else {
      alert("Invalid username password..!");
    }
    // if (this.loginForm.valid && this.loginForm.controls.username.value == "ADMIN" && this.loginForm.controls.password.value == "12345") {
    //   localStorage.setItem('user', this.user)
    //   this.router.navigateByUrl('/dashboard');
    // } else {
    //   alert("Invalid username password..!");
    // }
  }

}