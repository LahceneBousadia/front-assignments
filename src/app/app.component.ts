import { Component } from '@angular/core';
import { AssignmentsComponent } from './assignments/assignments.component';
import { AssignmentsService } from './shared/assignments.service';
import { AuthService } from './shared/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {
  title = 'GESTION DES ASSIGNMENTS';

  constructor(
    private authService: AuthService,
    private assignmentService: AssignmentsService
  ) {}

  login() {
    if (!this.authService.loggedIn) {
      this.authService.logIn();
    } else {
      this.authService.logOut();
    }
  }

  
}
