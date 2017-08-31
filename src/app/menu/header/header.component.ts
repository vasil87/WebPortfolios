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
   this.isUserLogedIn = !!this.auth.currentUser;
   this.curentUserEmail = this.isUserLogedIn ? this.auth.currentUser.email : '';
  }

}
