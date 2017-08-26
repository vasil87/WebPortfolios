import { Injectable, OnInit } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Injectable()
export class FirebaseService implements OnInit {

    user: Observable<firebase.User>;

    constructor(private afAuth: AngularFireAuth) {
    }

    ngOnInit(): void {
        this.user = this.afAuth.authState;

    }
    public signIn(email: string, password: string) {
        this.afAuth.auth.createUserWithEmailAndPassword(email, password)
            .catch(function (error: any) {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                if (errorCode === 'auth/weak-password') {
                    alert('The password is too weak.');
                } else {
                    alert(errorMessage);
                }
                console.log(error);
            });
    }
    public login(email: string, password: string) {
        this.afAuth.auth.signInWithEmailAndPassword(email, password)
            .catch(function (error : any) {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                if (errorCode === 'auth/wrong-password') {
                    alert('Wrong password.');
                } else {
                    alert(errorMessage);
                }
                console.log(error);
            });
    }
    public logout() {
        this.afAuth.auth.signOut();
    }
}
