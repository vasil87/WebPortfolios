import { AuthGuard } from './../core/providers/guards/auth-guard.service';
import { MyPortfolioFormComponent } from './my-portfolio-form.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';


const routes: Routes = [
  { path: '', component: MyPortfolioFormComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class MyPortfolioFormRoutesModule { }
