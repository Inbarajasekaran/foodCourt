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

  constructor(private fb: FormBuilder, private router: Router, private userDataService: UserDataService) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(4)]]
    });
  }

  submit() {
    for (let i = 0; i < this.userDataService.userDataVal.length; i++) {
      this.isAvail = false;
      if (this.loginForm.valid && this.loginForm.controls.username.value == this.userDataService.userDataVal[i]['username'] &&
        this.loginForm.controls.password.value == this.userDataService.userDataVal[i]['password']) {
        this.isAvail = true;
        this.userDataService.userDataVal[i]['userToken'] = Math.random().toString(36).substring(2)
        this.userToken = this.userDataService.userDataVal[i]['userToken'];
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