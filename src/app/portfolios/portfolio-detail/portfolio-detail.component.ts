import { PortfolioService } from './../shared/portfolio.service';
import 'rxjs/add/operator/switchMap';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
import { Portfolio } from '../shared/portfolio';

@Component({
  selector: 'app-portfolio-detail',
  templateUrl: './portfolio-detail.component.html',
  styleUrls: ['./portfolio-detail.component.css']
})
export class PortfolioDetailComponent  {
  portfolio: Portfolio;

  constructor(
    private portfolioService: PortfolioService,
    private route: ActivatedRoute,
    private location: Location) {
         this.route.paramMap
      .switchMap((params: ParamMap) => this.portfolioService.getPortfolio(+params.get('id')))
      .subscribe(portfolio => this.portfolio = portfolio);
     }

}
