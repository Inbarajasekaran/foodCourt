import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, RouterEvent } from '@angular/router';

@Component({
  selector: 'app-registeration',
  templateUrl: './registeration.component.html',
  styleUrls: ['./registeration.component.css']
})
export class RegisterationComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
  ) { }
  registerForm: FormGroup;
  loading = false;
  submitted = false;

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      username: ['',[Validators.required]],
      phone: ['', Validators.required, Validators.minLength(10), Validators.maxLength(10)],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(4)]],
      retypePassword: ['', [Validators.required]]
    });
  }


  onFormSubmit() {
    console.log("Working");
    this.router.navigate['dashboard']
  }

  checkPassword(parameterName: FormGroup) { //ParameterName value should be given as FormGroup
    return parameterName.get('password').value === parameterName.get('retypePassword').value;
  }

  // constructor( private fb: FormBuilder) { }
  // registerForm: FormGroup

  // ngOnInit(): void {
  //   this.registerForm = this.fb.group({
  //     name: ['', [Validators.required]],
  //     username: ['', [Validators.required]],
  //   })
  // }

  // submit(){
  //   console.log("Working")
  // }

}
