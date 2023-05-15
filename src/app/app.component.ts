import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'ssa-root',
  templateUrl: './app.component.html',
  // template: '<h1>Song suggestion app from inline template</h1>
  // <p>Angular is awesome</p>
  // ',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'song-suggest-app';
  

}
