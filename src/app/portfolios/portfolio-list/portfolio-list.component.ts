import { PortfolioService } from './../shared/portfolio.service';
import { Component, OnInit } from '@angular/core';
import { Portfolio } from '../shared/portfolio';


@Component({
  selector: 'app-portfolio-list',
  templateUrl: './portfolio-list.component.html',
  styleUrls: ['./portfolio-list.component.css']
})
export class PortfolioListComponent implements OnInit {

  portfolios: Portfolio[];
  filteredPortfolios: Portfolio[];
  sortProperties: string[] = ['age', 'first name', 'working experience'];
  sort = 'age';
  order = 'ascending';

  constructor(private portfolioService: PortfolioService) { }

  getPortfolios(): void {
    this.portfolioService.getAll().then(portfolios => {
      this.portfolios = portfolios;
      this.filteredPortfolios = this.portfolios;
    });
  }

  ngOnInit(): void {
    this.getPortfolios();
  }
  searchPortfolio(event: any): void {
    this.filteredPortfolios = [];
    const query = event.target.value;
    this.filteredPortfolios = this.portfolios.filter((portfolio) => {
      return portfolio.profession.toLowerCase().indexOf(query.toLowerCase()) > -1;
    });
  }

}
