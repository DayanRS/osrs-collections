import { Component, OnInit } from '@angular/core';
import { Item } from '../item';

@Component({
	selector: 'app-coll-item',
	templateUrl: './coll-item.component.html',
	styleUrls: ['./coll-item.component.css']
})
export class CollItemComponent implements OnInit {
	item: Item = {
		name: 'test2'
	}
	
	constructor() { }
	
	ngOnInit(): void {
	}
}
