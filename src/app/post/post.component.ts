import { Component } from '@angular/core';

@Component({
  selector: 'ssa-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent {

}

export interface post {
  title: string;
  artist: string;
}
