import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../users/users';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { getCookie, setCookie } from 'typescript-cookie';

@Component({
  selector: 'ssa-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  name: string = '';
  user_id: number = 0;
  constructor(private router: Router, private http: HttpClient) {  }
  goToHomePage() {
    this.router.navigate(['./home']);
  }
  
  newUser: User = { 
    user_name: this.name
  };

  createUser() {
    // const user = { user_name: this.newUser.user_name, user_id: this.newUser.user_id };
    this.http.post('/api/users', this.newUser).subscribe(() => {
      console.log('User added to database');
    });
    setCookie("userName",this.name);
    this.router.navigate(['./home']);
  }

}
