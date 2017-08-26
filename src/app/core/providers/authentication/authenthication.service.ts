import { UserLoginDetailsModel } from './../../../models/user-login-model';
import { FirebaseService } from './../firebase/firebase.service';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthenthicationService {

    constructor(private userService: FirebaseService) { }

    login(inputUser: UserLoginDetailsModel) {
        this.userService.login(inputUser.Email, inputUser.Password);
    }

    logout() {
        this.userService.logout();
    }

    signIn(inputUser: UserLoginDetailsModel) {
        this.userService.signIn(inputUser.Email, inputUser.Password);
    }


}