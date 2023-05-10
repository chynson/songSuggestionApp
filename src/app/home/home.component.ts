import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { getCookie, setCookie, removeCookie } from 'typescript-cookie';
import { post } from '../post/post.component'; 

@Component({
  selector: 'ssa-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  constructor(private router: Router) {  }

  goToLoginPage() {
    console.log('Navigating to login page...');
    this.router.navigate(['./login']);
  }

  goToRegisterPage() {
    this.router.navigate(['./register']);
  }

  logout() {
    removeCookie("userID");
    removeCookie("userName");
    window.location.reload();
  }

  viewPost() {

  }

  createPost() {
    this.router.navigate(['./create-post']);
  }

  userID? = getCookie("userID");
  userName? = getCookie("userName");

  postList: post[] = [
    {
      title: 'At The Table',
      artist: 'Josh Garrels'
    }
  ];


}