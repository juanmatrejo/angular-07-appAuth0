import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { ProtectedComponent } from './components/protected/protected.component';
import { PricesComponent } from './components/prices/prices.component';

// Import the module from the SDK
import { AuthHttpInterceptor, AuthModule } from '@auth0/auth0-angular';
import { CallbackComponent } from './components/callback/callback.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

@NgModule({
	declarations: [
		AppComponent,
		NavbarComponent,
		HomeComponent,
		ProtectedComponent,
		PricesComponent,
		CallbackComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		// Import the module into the application, with configuration
		AuthModule.forRoot({
			domain: 'dev-n7brpej8roq41dcv.us.auth0.com',
			clientId: '7rHjgoRgslMqhyyyZhRYJSmNMB6no95G',
			authorizationParams: {
				redirect_uri: window.location.origin
			},
		})
	],
	providers: [
		{
			provide: HTTP_INTERCEPTORS,
			useClass: AuthHttpInterceptor,
			multi: true,
		},
		{
			provide: Window,
			useValue: window,
		},
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
