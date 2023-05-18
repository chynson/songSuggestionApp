import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { getCookie, setCookie, removeCookie } from 'typescript-cookie';
import { Post } from '../post/post.component';
import { User } from '../login/login.component';

@Component({
  selector: 'ssa-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router,private http: HttpClient) {  }
  postList: Post[] = [];
  userList: User[] = [];

  ngOnInit() {
    this.fetchPostList();
    this.fetchUserList();
  }

  fetchPostList() {
    this.http.get<Post[]>('http://localhost:3000/posts').subscribe(
      (response) => {
        this.postList = response;
      },
      (error) => {
        console.error('Error retrieving user list:', error);
      }
    );
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

  getUserName(userID: number):string {
    for (let user of this.userList) {
      if (user.userID == userID) {
        return user.userName;
      }
    }
    return '';
  }

  goToLoginPage() {
    console.log('Navigating to login page...');
    this.router.navigate(['./login']);
  }

  goToRegisterPage() {
    this.router.navigate(['./register']);
  }

  
  viewPost() {
    let view_post = false;
  }

  logout() {
    removeCookie("userID");
    removeCookie("userName");
    window.location.reload();
  }

  createPost() {
    this.router.navigate(['./create-post']);
  }

  userID? = getCookie("userID");
  userName? = getCookie("userName");
  
}