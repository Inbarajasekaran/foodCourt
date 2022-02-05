import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserDataService } from '../service/user-data.service';

@Component({
  selector: 'app-registeration',
  templateUrl: './registeration.component.html',
  styleUrls: ['./registeration.component.css']
})
export class RegisterationComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private router: Router, private userDataService: UserDataService) { }

  registerForm: FormGroup;
  loading = false;
  submitted = false;
  dataAvail = true;
  userNameAvail = false;
  // userDataService = [{ username: 'Inba', password: '0011' }, { username: 'ADMIN', password: '12345' },]

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      username: ['', [Validators.required]],
      phone: ['', [Validators.required, Validators.pattern("^[0-9]*$"), Validators.minLength(10), Validators.maxLength(10)]],
      // phone: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(4)]],
      retypePassword: ['', [Validators.required]]
    });
  }

  get fval() { return this.registerForm.controls } //insted of using formControlName.controls.errors in template used fval().controls.errors  

  onFormSubmit() {
    this.submitted = true;
    if (this.registerForm.valid) {
      for (let i = 0; i < this.userDataService.userDataVal.length; i++) {
        this.dataAvail = true
        if (this.registerForm.controls.username.value == this.userDataService[i]['username']) {
          this.dataAvail = false;
          break;
        }
      }
      if (this.dataAvail == true) {
        this.userDataService.userDataVal.push({ username: this.registerForm.controls.username.value, password: this.registerForm.controls.password.value, userToken: null })
        console.log(this.userDataService)
        this.router.navigateByUrl('/dashboard');
      }
    }
    this.checkUserName()
  }

  checkPassword(parameterName: FormGroup) { //ParameterName value should be given as FormGroup
    return parameterName.get('password').value === parameterName.get('retypePassword').value;
  }

  checkUserName() {
    for (let i = 0; i < this.userDataService.userDataVal.length; i++) {
      this.userNameAvail = false;
      if (this.registerForm.controls.username.value == this.userDataService[i]['username']) {
        this.userNameAvail = true;
        break;
      }
    }
  }

}
