import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import { UserDataService } from '../user-data.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent {

  constructor(private userDataService: UserDataService, private formBuilder: FormBuilder,
    private router: Router) {}

  registerForm: FormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });

  ngOnInit(): void {
    if(this.userDataService.isLoggedIn()){
      this.router.navigate(['/', 'user-list']);
    }
  }

  onSubmit(): void {
    let username: string = this.registerForm.value.username
    let password: string = this.registerForm.value.password

    let user = this.userDataService.getUser(username)

    if(typeof user === "object"){

      if(username == user.username && password == user.password){
        console.warn('Login Success', this.registerForm.value);
        this.registerForm.reset();
        this.userDataService.loggedin = true;
        this.router.navigate(['/', 'user-list']);
      }
      else {
        console.log(user)
        console.log(username)
        console.log(password)
        console.error('Either username or password is wrong')
      }

    }
    else {
      console.error('User not is undefind')
    }

    
  }

}
