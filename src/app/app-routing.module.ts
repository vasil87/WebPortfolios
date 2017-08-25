import { ContactComponent } from './shared/contact/contact.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/portfolios', pathMatch: 'full' },
  { path: 'portfolios', loadChildren: './portfolios/portfolios.module#PortfoliosModule' },
  { path: 'contact', component: ContactComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
