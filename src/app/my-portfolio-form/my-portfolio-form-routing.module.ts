import { MyPortfolioFormComponent } from './my-portfolio-form.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { AuthGuard } from '../core/providers/guards/auth-guard.service';


const routes: Routes = [
  { path: '', component: MyPortfolioFormComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class MyPortfolioFormRoutesModule { }
