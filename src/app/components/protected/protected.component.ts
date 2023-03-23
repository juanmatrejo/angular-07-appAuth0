import { Component } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
	selector: 'app-protected',
	templateUrl: './protected.component.html',
	styles: [
	]
})
export class ProtectedComponent {

	constructor(public auth: AuthService) {

	}
}
