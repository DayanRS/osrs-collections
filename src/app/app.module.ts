import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CollItemComponent } from './collection/coll-item/coll-item.component';
import { CollectionComponent } from './collection/collection.component';

@NgModule({
	declarations: [
		AppComponent,
		CollItemComponent,
		CollectionComponent
	],
	imports: [
		BrowserModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
