import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PortfoliosComponent } from './portfolios.component';
import { PortfoliosRoutesModule } from './portfolios-routing.module';
import { PortfolioListComponent } from './portfolio-list/portfolio-list.component';

import { PortfolioService } from './shared/portfolio.service';

@NgModule({
  imports: [
    CommonModule,
    PortfoliosRoutesModule,
  ],
  declarations: [
    PortfoliosComponent,
    PortfolioListComponent
  ],
  providers: [
    PortfolioService
  ]
})
export class PortfoliosModule { }
