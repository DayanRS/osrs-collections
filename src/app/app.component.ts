import { Component } from '@angular/core';
import { COLLECTIONS } from './collections';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	title = 'osrs-collections';
	collections = COLLECTIONS;
}
