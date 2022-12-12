import { Component } from '@angular/core';
import { UserDataService } from '../user-data.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent {

  userList = this.userDataService.getUserList()
  
  constructor(private userDataService: UserDataService,private router: Router) {}

  OnInit(): void {
    if(!this.userDataService.isLoggedIn()){
      this.router.navigate(['/', 'login']);
    }
  }

}
