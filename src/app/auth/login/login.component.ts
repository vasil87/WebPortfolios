import { AuthenthicationService } from './../../core/providers/authentication/authenthication.service';
import { CoreModule } from './../../core/core.module';
import { UserLoginDetailsModel } from './../../models/user-login-model';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  public user = new UserLoginDetailsModel('', '');
  public errorMsg = '';

  constructor(private authSv: AuthenthicationService, private router: Router) { }

  login() {
    this.authSv.login(this.user)
      .then((isOk: boolean) => {
        if (isOk) {
          if (this.authSv.redirectUrl) {
            const url = this.authSv.redirectUrl;
            this.authSv.redirectUrl = '';
            this.router.navigateByUrl(url);
          } else {
            this.router.navigate(['./portfolios/all']);
          }
        }
      });
  }

}
