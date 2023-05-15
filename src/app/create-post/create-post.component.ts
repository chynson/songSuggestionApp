import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { getCookie, setCookie } from 'typescript-cookie';
import { Post } from './post'


@Component({
  selector: 'ssa-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.scss']
})
export class CreatePostComponent {
  user_id = getCookie("userID");
  constructor(private router: Router, private http: HttpClient) {  }

  goToHomePage() {
    this.router.navigate(['./home']);
  }
  
  newPost: Post = {
    user_id = parseInt(this.user_id)),

  }

  createPost() {
    this.http.post('/api/users', this.newUser).subscribe(() => {
      console.log('User added to database');
    });
  }
}
