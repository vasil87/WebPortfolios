import { AuthModule } from './auth/auth.module';
import { CoreModule } from './core/core.module';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { SharedModule } from './shared/shared.module';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    AuthModule,
    BrowserModule,
    SharedModule,
    CoreModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
