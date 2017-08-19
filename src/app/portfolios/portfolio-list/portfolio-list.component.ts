import { PortfolioService } from './../shared/portfolio.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-portfolio-list',
  templateUrl: './portfolio-list.component.html',
  styleUrls: ['./portfolio-list.component.css']
})
export class PortfolioListComponent implements OnInit {

  portfolios;

  constructor(private portfolioService: PortfolioService) { }

  ngOnInit() {
    this.portfolios = this.portfolioService.getAll();
  }

}
