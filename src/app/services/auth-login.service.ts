import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';

// Import the AuthService type from the SDK
import { AppState, AuthService } from '@auth0/auth0-angular';

@Injectable({
	providedIn: 'root'
})
export class AuthLoginService {

	isLoggedIn: boolean = false;

	constructor(public auth: AuthService, @Inject(DOCUMENT) private doc: Document) {

		auth.isAuthenticated$.subscribe(logged => {
			console.log(logged);
			this.isLoggedIn = logged;
		});
	}

	login() {
		console.log('login')
		this.auth.loginWithRedirect();
	}

	logout() {
		console.log('logout')
		this.auth.logout({ logoutParams: { returnTo: this.doc.location.origin } });
	}
}
