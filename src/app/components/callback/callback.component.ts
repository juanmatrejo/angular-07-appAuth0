import { Component } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
	selector: 'app-callback',
	templateUrl: './callback.component.html',
	styles: [
	]
})
export class CallbackComponent {

	constructor(private auth: AuthService) {

	}

	ngOnInit(): void {

		this.auth.handleRedirectCallback();
	}
}
