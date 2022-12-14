import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserDataService } from './user-data.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private router: Router, private userDataService: UserDataService) {}
}
