import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  loginPage = false;
  opened = false;
  title = 'foodCourt';
  routerURL = '';
  constructor(public router: Router) {
    this.router.events
      .subscribe((event) => {
        if(event instanceof NavigationEnd) 
        {
          this.routerURL = this.router.url;
          if (this.router.url == '/' || this.router.url == '/login' ) {
            this.loginPage = true;
          } else {
            this.loginPage = false;
          }
        }
      });
  }
}