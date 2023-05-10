import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'ssa-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  constructor(private router: Router) {  }
  goToHomePage() {
    
    this.router.navigate(['./home']);

  }

}
