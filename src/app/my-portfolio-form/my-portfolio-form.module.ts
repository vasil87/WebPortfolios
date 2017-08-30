import { MyPortfolioFormRoutesModule } from './my-portfolio-form-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyPortfolioFormComponent } from './my-portfolio-form.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MyPortfolioFormRoutesModule,
  ],
  declarations: [
    MyPortfolioFormComponent
    ]
})
export class MyPortfolioFormModule { }
