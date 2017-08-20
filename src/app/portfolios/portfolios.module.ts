import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdButtonModule, MdCheckboxModule } from '@angular/material';
import { PortfoliosRoutesModule } from './portfolios-routing.module';

import { PortfoliosComponent } from './portfolios.component';
import { PortfolioListComponent } from './portfolio-list/portfolio-list.component';
import { PortfolioDetailComponent } from './portfolio-detail/portfolio-detail.component';


import { PortfolioService } from './shared/portfolio.service';


@NgModule({
  imports: [
    CommonModule,
    PortfoliosRoutesModule,
    // BrowserAnimationsModule,
    [MdButtonModule, MdCheckboxModule],
  ],
  declarations: [
    PortfoliosComponent,
    PortfolioListComponent,
    PortfolioDetailComponent
],
  providers: [
    PortfolioService
  ]
})
export class PortfoliosModule { }
