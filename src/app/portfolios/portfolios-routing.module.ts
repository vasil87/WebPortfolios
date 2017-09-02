import { PortfolioDetailsResolver } from './portfolio-detail/portfolio-detail.resolver.service';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { PortfolioDetailComponent } from './portfolio-detail/portfolio-detail.component';
import { PortfolioListComponent } from './portfolio-list/portfolio-list.component';
import { AuthGuard } from '../core/providers/guards/auth-guard.service';

const routes: Routes = [
  { path: '', redirectTo: 'all', pathMatch: 'full' },
  { path: 'all', component: PortfolioListComponent },
  {
    path: 'portfolio-detail/:email', component: PortfolioDetailComponent
    , resolve: { portfolio: PortfolioDetailsResolver }, canActivate: [AuthGuard]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class PortfoliosRoutesModule { }

