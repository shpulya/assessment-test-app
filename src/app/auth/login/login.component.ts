import {Component, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../auth.service';
import {Router} from '@angular/router';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  faGithub = faGithub;

  constructor(private authService: AuthService,
              private router: Router) {
  }

  ngOnInit() {
  }

  onSubmit() {
    this.authService.login();
  }
}
