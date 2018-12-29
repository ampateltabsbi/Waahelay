import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { routerTransition } from '../router.animations';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {
  constructor() {debugger; }

  ngOnInit() {debugger; }

  onBusinessLoggedin() {
    localStorage.setItem('isLoggedin', 'true');
    localStorage.setItem('isAdmin', 'false');
  }

  onAdminLoggedin() {
    localStorage.setItem('isLoggedin', 'true');
    localStorage.setItem('isAdmin', 'true');
  }
}