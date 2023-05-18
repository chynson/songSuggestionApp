import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { getCookie, setCookie } from 'typescript-cookie';

export interface User {
  userName: string;
  userID: number;
}

@Component({
  selector: 'ssa-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  constructor(private router: Router,private http: HttpClient) {  }
  goToHomePage() {
    this.router.navigate(['./home']);
  }

  userList: User[] = [];
  dne = false;

  ngOnInit() {
    this.fetchUserList();
  }

  fetchUserList() {
    this.http.get<User[]>('http://localhost:3000/users').subscribe(
      (response) => {
        this.userList = response;
      },
      (error) => {
        console.error('Error retrieving user list:', error);
      }
    );
  }

  
  loginAs(user: User) {
    if (user.userID != -1) {
      setCookie('userID',user.userID);
      setCookie('userName',user.userName);
      this.router.navigate(['./home']);
    }
    else this.dne = true;
  }



  

}
