import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardGuard implements CanActivate {
  constructor(private router: Router) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    // console.log(state.url);
    // console.log(this.getToken())
    if ((state.url == "/login" || state.url == "/" || state.url == '/register') && !this.getToken()) {
      return true;
    }
    else if (!this.getToken() && state.url != "/login" || state.url != '/register') {
      this.router.navigateByUrl("/");
      return true;
    } else {
      return true;
    }
  }

  getToken() {
    return localStorage.getItem('user');
  }

}
