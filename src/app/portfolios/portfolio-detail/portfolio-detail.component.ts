import { Observable } from 'rxjs/Observable';
import { PortfolioService } from './../shared/portfolio.service';
import 'rxjs/add/operator/switchMap';
import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
import { Portfolio } from '../shared/portfolio';
import { ISubscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-portfolio-detail',
  templateUrl: './portfolio-detail.component.html',
  styleUrls: ['./portfolio-detail.component.css']
})
export class PortfolioDetailComponent implements OnDestroy {
  private routerSubscription: ISubscription;
  portfolio: Portfolio;

  constructor(
    private portfolioService: PortfolioService,
    private route: ActivatedRoute,
    private location: Location) {
    this.routerSubscription = this.route.paramMap
      .switchMap((params: ParamMap) => this.portfolioService.getPortfolio(+params.get('id')))
      .subscribe(portfolio => this.portfolio = portfolio);
  }

  ngOnDestroy(): void {
    this.routerSubscription.unsubscribe();
  }
}

