import { Component, OnInit, Input } from '@angular/core';
import { Item } from '../../item';

@Component({
	selector: 'app-coll-item',
	templateUrl: './coll-item.component.html',
	styleUrls: ['./coll-item.component.css']
})
export class CollItemComponent implements OnInit {
	@Input() item!: Item;
	
	opacity: number = 50;
	isSelected: boolean = false;
	
	constructor() { }
	
	ngOnInit(): void {
		this.item.nameFull = this.item.name.replaceAll(" ","_");
	}
	
	toggleItem(): void {
		if(this.isSelected) {
			this.opacity = 50;
		} else {
			this.opacity = 100;
		}
		
		this.isSelected = !this.isSelected;
	}
}
