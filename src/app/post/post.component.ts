import { Component } from '@angular/core';

@Component({
  selector: 'ssa-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent {
  
}

export interface Post {
  title: string;
  artist: string;
  description: string;
  userID: number;
}
