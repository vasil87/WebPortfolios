import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { PortfolioDetailComponent } from './portfolio-detail/portfolio-detail.component';
import { PortfolioListComponent } from './portfolio-list/portfolio-list.component';

const routes: Routes = [
  { path: '', redirectTo: 'all', pathMatch: 'full' },
  { path: 'all', component: PortfolioListComponent },
  { path: 'portfolio-detail/:id', component: PortfolioDetailComponent  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class PortfoliosRoutesModule {}

