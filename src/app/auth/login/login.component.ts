import { AuthenthicationService } from './../../core/providers/authentication/authenthication.service';
import { CoreModule } from './../../core/core.module';
import { UserLoginDetailsModel } from './../../models/user-login-model';
import { Component } from '@angular/core';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  public user = new UserLoginDetailsModel('', '');
  public errorMsg = '';

  constructor(private authSv: AuthenthicationService) { }

  login() {
    if (!this.authSv.login(this.user)) {
      this.errorMsg = 'Failed to login! try again ...';
    }
  }

}
