import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Portfolio } from './../../models/portfolio-model';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, ParamMap } from '@angular/router';
import { PortfolioService } from './../../core/providers/portfolio/portfolio.service';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/observable/fromPromise';

@Injectable()
export class PortfolioDetailsResolver implements Resolve<Portfolio>
{
    constructor(private portfolioService: PortfolioService) {

    }
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Portfolio> {
        const email = route.params['email'];
        return Observable.fromPromise(this.portfolioService.getPortfolio(email));

    }

}
