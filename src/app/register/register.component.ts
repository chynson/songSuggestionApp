import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { getCookie, setCookie } from 'typescript-cookie';

@Component({
  selector: 'ssa-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})


export class RegisterComponent {
  userName: string = '';
  constructor(private router: Router, private http: HttpClient) {  }
  goToHomePage() {
    this.router.navigate(['./home']);
  }

  createUser() {
    const newUser = {
      userName: this.userName
    };
  
    const options = {
      headers: { 'Content-Type': 'application/json' }
    };
  
    this.http.post<any>('http://localhost:3000/users', JSON.stringify(newUser), options)
      .subscribe(() => {
        console.log('User added to database');
        this.router.navigate(['./home']);
      },
      (error) => {
        console.error('Error adding user:', error.error);
      }
      );
  }  

}
