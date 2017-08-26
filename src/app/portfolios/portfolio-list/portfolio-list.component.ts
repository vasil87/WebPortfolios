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
  sortProperties: string[] = ['age', 'rating', 'workingExperience'];
  sort = 'first name';
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

  searchPortfolio(event: any) {
    console.log('filteredPortfolio length is', this.filteredPortfolios.length);
    this.filteredPortfolios = [];
    const query = event.target.value;
    this.filteredPortfolios = this.portfolios.filter((portfolio) => {
      return portfolio.profession.toLowerCase().indexOf(query.toLowerCase()) > -1;
    });
    return this.filteredPortfolios;
  }

}
