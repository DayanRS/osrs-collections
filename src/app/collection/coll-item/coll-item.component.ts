import { Component, OnInit, Input } from '@angular/core';
import { Item } from '../../item';

@Component({
	selector: 'app-coll-item',
	templateUrl: './coll-item.component.html',
	styleUrls: ['./coll-item.component.css']
})
export class CollItemComponent implements OnInit {
	@Input() item!: Item;
	
	private DESELECTED_OPACITY = 25;
	private SELECTED_OPACITY = 100;
	
	opacity: number = this.DESELECTED_OPACITY;
	isSelected: boolean = false;
	
	constructor() { }
	
	ngOnInit(): void {
		console.log(this.item);
		this.item.nameFull = this.item.name.replaceAll(" ","_");
		
		if(document.cookie === "") {
			document.cookie = "items=,"
		} else {
			if(document.cookie.indexOf(","+this.item.id+",") >= 0) {	//selected in cookie
				this.selectItem();
			}
		}
	}
	
	toggleItem(): void {
		if(this.isSelected) {
			this.deselectItem();
		} else {
			this.selectItem();
		}
	}
	
	private selectItem(): void {
		this.isSelected = true;
		this.opacity = this.SELECTED_OPACITY;
		
		if(document.cookie.indexOf(","+this.item.id+",") === -1) {	//only add to cookie if not already in it
			document.cookie = document.cookie + this.item.id + ",";
		}
	}
	
	private deselectItem(): void {
		this.isSelected = false;
		this.opacity = this.DESELECTED_OPACITY;
		document.cookie = document.cookie.replace(`,${this.item.id},`, ",");
	}
}
