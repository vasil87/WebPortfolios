import { Routes, RouterModule } from '@angular/router';

import { PortfoliosComponent } from './portfolios.component';

const routes: Routes = [
  { path: '', component: PortfoliosComponent  },
];


export const PortfoliosRoutesModule = RouterModule.forChild(routes);
