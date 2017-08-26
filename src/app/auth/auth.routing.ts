import { SingInComponent } from './sing-in/sing-in.component';
import { LoginComponent } from './login/login.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path:'auth',
    children:[
      { path: 'login', component : LoginComponent },
      { path: 'signIn', component: SingInComponent}
      ] 
  }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})

export class AuthRoutingModule {}
