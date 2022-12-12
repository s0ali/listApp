import { Injectable } from '@angular/core';

interface user {
  username:string,
  password:string,
  name: string,
  country: string,
  email: string,
  phone: number
}

let userData: [user] = [{username:'s0ali',password:'sayed123', name:'Sayed Ali',
country:'Bahrain', email:'s0ali@gmail.com', phone:33221122}];

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  loggedin: boolean = false;

  constructor() { }

  addUser(user: any) {
    userData.push(user)
    console.log(userData)
  }

  getUser(username: string): user {
    let user = userData.find((user) => {return user.username == username});
    return user!;
  }

  getUserList(): [user]{
    return userData;
  }

  isLoggedIn(): boolean {
    if(this.loggedin) {
      return true
    }
    else {
      return false
    }
  }
}
