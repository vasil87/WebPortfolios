import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {  MdSelectModule , MdButtonModule, MdCheckboxModule, MdInputModule, MdGridListModule, MdIconModule} from '@angular/material';
import { PortfoliosRoutesModule } from './portfolios-routing.module';

import { PortfolioListComponent } from './portfolio-list/portfolio-list.component';
import { PortfolioDetailComponent } from './portfolio-detail/portfolio-detail.component';

import { SortPipe } from './shared/sort.pipe';

import { PortfolioService } from './shared/portfolio.service';


@NgModule({
  imports: [
    CommonModule,
    PortfoliosRoutesModule,
    MdButtonModule,
    MdCheckboxModule,
    MdInputModule,
    MdSelectModule,
    MdGridListModule,
    MdIconModule,
    FormsModule
  ],
  declarations: [
    SortPipe,
    PortfolioListComponent,
    PortfolioDetailComponent,
],
  providers: [
    PortfolioService
  ]
})
export class PortfoliosModule { }
