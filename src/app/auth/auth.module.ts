import { SingInComponent } from './sing-in/sing-in.component';
import { LoginComponent } from './login/login.component';
import { AuthRoutingModule } from './auth-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MdInputModule, MdSlideToggleModule, MdButtonModule, MdIconModule } from '@angular/material';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    LoginComponent,
    SingInComponent
  ],
  imports: [
    FormsModule,
    MdInputModule,
    MdButtonModule,
    MdIconModule,
    CommonModule,
    AuthRoutingModule,
    MdSlideToggleModule,
  ],
  providers: []
})
export class AuthModule { }
