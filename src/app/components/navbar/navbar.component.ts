import { Component } from '@angular/core';
import { AuthLoginService } from 'src/app/services/auth-login.service';

@Component({
	selector: 'app-navbar',
	templateUrl: './navbar.component.html',
	styles: [
	]
})
export class NavbarComponent {

	constructor(public auth: AuthLoginService) {

	}

	login() {
		this.auth.login();
	}

	logout() {
		this.auth.logout();
	}
}
