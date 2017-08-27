import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {  MdSelectModule , MdButtonModule, MdCheckboxModule, MdInputModule, MdGridListModule, MdIconModule} from '@angular/material';
import { PortfoliosRoutesModule } from './portfolios-routing.module';
import { PortfolioListComponent } from './portfolio-list/portfolio-list.component';
import { PortfolioDetailComponent } from './portfolio-detail/portfolio-detail.component';


@NgModule({
  imports: [
    SharedModule,
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
    PortfolioListComponent,
    PortfolioDetailComponent,
],
  providers: [
  ]
})
export class PortfoliosModule { }
