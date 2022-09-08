import { Injectable, Component, ComponentDecorator } from '@angular/core';
import { Router, CanActivate, CanLoad, ActivatedRouteSnapshot, RouterStateSnapshot, Route } from '@angular/router';
import { AuthService } from '../service/auth.service';



@Injectable()
export class AuthGuard implements CanActivate, CanLoad {

    constructor(
        private router: Router,
        private authService:AuthService,
        ) { }
       
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

console.log('guard')

        if (this.authService.isAuthenticated()) {

            return true;
        } else {
            if (state.url != '') {
                this.router.navigate(['']);
            }
            return false;
        }


    }

    canLoad(route: Route): boolean {
        // return this.permissions.canLoadChildren(this.currentUser, route);
        return true;
    }
}
