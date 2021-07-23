import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, NgForm, FormGroupDirective } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent implements OnInit {

  user = '1';
  loginForm: FormGroup

  constructor(private fb: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(4)]]
    });
  }

  submit() {
    if (this.loginForm.valid && this.loginForm.controls.username.value == "ADMIN" && this.loginForm.controls.password.value == "12345") {
      localStorage.setItem('user', this.user)
      this.router.navigateByUrl('/dashboard');
    } else {
      alert("Invalid username password..!");
    }
  }

}