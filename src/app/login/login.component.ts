import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserList } from '../users/users';
import { getCookie, setCookie } from 'typescript-cookie';

@Component({
  selector: 'ssa-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  constructor(private router: Router) {  }
  goToHomePage() {
    this.router.navigate(['./home']);
  }


  userList: string[] = ["Carl","Makayla","Prof_Read"];

  dne = false;

  loginAs(userName: string) {
    let userID = this.userList.indexOf(userName);
    if (userID != -1) {
      setCookie('userID',userID);
      setCookie('userName',userName);
      this.router.navigate(['./home']);
    }
    else this.dne = true;
  }

  

  // userList: UserList[] = [
  //   {
  //     userID: 1,
  //     userName: "carl"
  //   },
  //   {
  //     userID: 2,
  //     userName: "makayla"
  //   }
  // ];

  

}
