import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { getCookie, setCookie } from 'typescript-cookie';
import { Post } from '../post/post.component'; 


@Component({
  selector: 'ssa-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.scss']
})
export class CreatePostComponent {

  cookieValue: string | undefined = getCookie("userID");
  user_id: number = parseInt(this.cookieValue!, 10);
  title: string = '';
  artist: string = '';
  description: string = '';
  constructor(private router: Router, private http: HttpClient) {  }

  goToHomePage() {
    this.router.navigate(['./home']);
  }
  
  

  createPost() {
    const options = {
      headers: { 'Content-Type': 'application/json' }
    };
    const newPost = {
      user_id: this.user_id,
      title: this.title,
      artist: this.artist,
      description: this.description
    };
    this.http.post('http://localhost:3000/posts', JSON.stringify(newPost), options).subscribe(
      () => {
        console.log('Post added to database');
        this.router.navigate(['./home']);
      },
      (error) => {
        console.error('Error creating post:', error.error);
      }
    );
  }
  
}
