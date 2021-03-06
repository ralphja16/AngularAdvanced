import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {StoreModule} from '@ngrx/store';

// reducer
import {appReducer} from './core/city.reducer';

// component
import {AppComponent} from './app.component';
import {CityService} from './core/city.service';

@NgModule({
	declarations: [
		AppComponent
	],
	imports     : [
		BrowserModule,
		StoreModule.provideStore(appReducer)
	],
	providers   : [CityService],
	bootstrap   : [AppComponent]
})
export class AppModule {
}
