import { Observable } from 'rxjs/Observable';
import { AuthenthicationService } from './../authentication/authenthication.service';
import { Injectable, OnInit } from '@angular/core';
import {
    ActivatedRouteSnapshot, RouterStateSnapshot, Router, Route,
    CanActivate, CanActivateChild, CanLoad
} from '@angular/router';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/observable/of';


@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild, CanLoad {

    private isUserLogged;
    constructor(private authService: AuthenthicationService, private router: Router) {
        this.checkLoggedIn('').subscribe(x => {
            if (!x) {
                this.authService.redirectUrl = this.router.url;
                this.router.navigate(['/auth/login']);
            }
        });
    }


    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
        console.log('In canActivate: ' + state.url);
        return this.checkLoggedIn(state.url);
    }

    canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
        console.log('In canActivateChild: ' + state.url);
        return this.checkLoggedIn(state.url);
    }

    canLoad(route: Route): Observable<boolean> {
        console.log('In canLoad: ' + route.path);
        return this.checkLoggedIn(route.path);
    }

    private checkLoggedIn(url: string): Observable<boolean> {

        return this.authService.currentUser.switchMap(x => {
            if (!!x) {
                this.isUserLogged = true;
                return Observable.of(true);
            }
            this.isUserLogged = false;
            this.authService.redirectUrl = url;
            this.router.navigate(['/auth/login']);
            return Observable.of(false);
        });
    }
}
