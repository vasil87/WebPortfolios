import { Component } from '@angular/core';
import { CoreModule } from './../../core/core.module';
import { UserLoginDetailsModel } from './../../models/user-login-model';
import { AuthenthicationService } from './../../core/providers/authentication/authenthication.service';
import { Router } from '@angular/router';

@Component({
  templateUrl: './sing-in.component.html',
  styleUrls: ['./sing-in.component.css']
})
export class SingInComponent {

  public user = new UserLoginDetailsModel('', '');
  public errorMsg = '';

  constructor(private authSv: AuthenthicationService, private router: Router) { }

  signIn() {
    this.authSv.signIn(this.user).
      then(() => {
        this.router.navigate(['./auth/login']);
      })
  }
}
