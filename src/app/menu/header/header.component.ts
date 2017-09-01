import { AuthenthicationService } from './../../core/providers/authentication/authenthication.service';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isUserLogedIn = false;
  curentUserEmail = '';
  constructor(private auth: AuthenthicationService) {
  }

  SignOut() {
    this.auth.logout();
  }
  ngOnInit() {
    this.auth.currentUser.subscribe(x => {
      if (!!x) {
        this.curentUserEmail = x.email;
        this.isUserLogedIn = true;
      }else {
        this.curentUserEmail = '';
        this.isUserLogedIn = false;
      }
    });
  }
}
