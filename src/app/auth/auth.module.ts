import { AngularFireAuth } from 'angularfire2/auth';
import { FirebaseService } from './../core/providers/firebase/firebase.service';
import { AuthenthicationService } from './../core/providers/authentication/authenthication.service';
import { CoreModule } from './../core/core.module';
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
    CoreModule
  ],
  providers: [AuthenthicationService, FirebaseService, AngularFireAuth]
})
export class AuthModule { }
