import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


import { UserDataService } from '../user-data.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent{
  // userList = this.userDataService.userData

  constructor(private userDataService: UserDataService, private formBuilder: FormBuilder,
    private router: Router) {}

    registerForm: FormGroup = new FormGroup({
      username: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
      ]),
      name: new FormControl('', [
        Validators.required,
        Validators.maxLength(20),
      ]),
      country: new FormControl('', [
        Validators.required,
        Validators.maxLength(15),
      ]),
      email: new FormControl('',[
        Validators.required,
        Validators.email,
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
      ]),
      phone: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(8),
        Validators.pattern("[0-9]")
      ]),
    });

  OnInit(): void {
    if(this.userDataService.isLoggedIn()){
      this.router.navigate(['/', 'user-list']);
    }
  }
  onSubmit(): void {
    // Process checkout data here
    //let newData = this.registerForm.value
    this.userDataService.addUser(this.registerForm.value)
    console.warn('User registred', this.registerForm.value);
    this.registerForm.reset();
    
  }
}
