import { PortfolioService } from './../shared/portfolio.service';
import { Component, OnInit } from '@angular/core';
import { Portfolio} from '../shared/portfolio';


@Component({
  selector: 'app-portfolio-list',
  templateUrl: './portfolio-list.component.html',
  styleUrls: ['./portfolio-list.component.css']
})
export class PortfolioListComponent implements OnInit {

  portfolios: Portfolio[];

  constructor(private portfolioService: PortfolioService) { }

  getPortfolios(): void {
    this.portfolioService.getAll().then(portfolios => this.portfolios = portfolios);
  }

  ngOnInit(): void {
    this.getPortfolios();
  }

}
