import { PortfolioService } from './../shared/portfolio.service';
import { Component, OnInit, OnChanges, SimpleChanges, Input,DoCheck } from '@angular/core';
import { Portfolio } from '../shared/portfolio';


@Component({
  selector: 'app-portfolio-list',
  templateUrl: './portfolio-list.component.html',
  styleUrls: ['./portfolio-list.component.css']
})
export class PortfolioListComponent {
  portfolios: Portfolio[];
  filteredPortfolios: Portfolio[];
  sort = '';
  order = '';

  constructor(private portfolioService: PortfolioService) {
   this.getPortfolios();
  }

  getPortfolios(): void {
    this.portfolioService.getAll()
      .then((portfolios) => {
        this.portfolios = portfolios;
        this.filteredPortfolios = this.portfolios;
      });
  }

  searchPortfolio(query: string) {
    this.filteredPortfolios = [];
    this.filteredPortfolios = this.portfolios.filter((portfolio) => {
      return portfolio.profession.toLowerCase().indexOf(query.toLowerCase()) > -1;
    });
    // return this.filteredPortfolios;
  }

}
