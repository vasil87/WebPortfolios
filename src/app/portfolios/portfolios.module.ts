import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdSelectModule } from '@angular/material';
import { MdButtonModule, MdCheckboxModule } from '@angular/material';
import { MdInputModule } from '@angular/material';
import { PortfoliosRoutesModule } from './portfolios-routing.module';

import { PortfoliosComponent } from './portfolios.component';
import { PortfolioListComponent } from './portfolio-list/portfolio-list.component';
import { PortfolioDetailComponent } from './portfolio-detail/portfolio-detail.component';

import { SortPipe } from './shared/sort.pipe';

import { PortfolioService } from './shared/portfolio.service';


@NgModule({
  imports: [
    CommonModule,
    PortfoliosRoutesModule,
    // BrowserAnimationsModule,
    [MdButtonModule, MdCheckboxModule],
    MdInputModule,
    MdSelectModule,
    FormsModule
  ],
  declarations: [
    PortfoliosComponent,
    PortfolioListComponent,
    PortfolioDetailComponent,
    SortPipe,
],
  providers: [
    PortfolioService
  ]
})
export class PortfoliosModule { }