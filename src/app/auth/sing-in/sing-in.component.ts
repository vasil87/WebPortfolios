import { Component } from '@angular/core';
import { CoreModule } from './../../core/core.module';
import { UserLoginDetailsModel } from './../../models/user-login-model';
import { AuthenthicationService } from './../../core/providers/authentication/authenthication.service';

@Component({
  templateUrl: './sing-in.component.html',
  styleUrls: ['./sing-in.component.css']
})
export class SingInComponent {

  public user = new UserLoginDetailsModel('', '');
  public errorMsg = '';

  constructor(private authSv: AuthenthicationService) { }

  signIn() {
    if (!this.authSv.login(this.user)) {
      this.errorMsg = 'Failed to login! try again ...';
    }
  }
}
