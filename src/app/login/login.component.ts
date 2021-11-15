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

  userToken: string = '';
  loginForm: FormGroup
  isAvail: boolean = false;
  generateToken: any = '';

  constructor(private fb: FormBuilder, private router: Router, private userData: UserDataService) { }x

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
        this.userData.userData[i]['userToken'] = Math.floor(100000 + Math.random() % 7 ).toString().substr(0, 10);
        this.userToken = this.userData.userData[i]['userToken'];
        break;
      }
    }
    if (this.isAvail == true) {
      localStorage.setItem("user", this.userToken);
      this.router.navigateByUrl('/dashboard');
    } else {
      alert("Invalid username password..!");
    }
  }

}