import { Component, OnInit, QueryList, ViewChildren, Input } from '@angular/core';
import { Item } from '../item';
import { ItemsService } from '../items.service';
import { CollItemComponent } from './coll-item/coll-item.component';

@Component({
	selector: 'app-collection',
	templateUrl: './collection.component.html',
	styleUrls: ['./collection.component.css']
})
export class CollectionComponent implements OnInit {
	private rowLength = 6;
	
	@Input() collId!: number;
	
	collName: string = "";
	items: Item[] = [];
	numRows: number = -1;
	
	@ViewChildren(CollItemComponent) itemChildren!: QueryList<CollItemComponent>;
	
	constructor(private itemsService: ItemsService) { }
	
	ngOnInit(): void {
		this.itemsService.getCollItems(this.collId).subscribe(items => this.items = items);
		this.itemsService.getCollName(this.collId).subscribe(name => this.collName = name);
		this.numRows = Math.ceil(this.items.length/this.rowLength);
	}
	
	clickItem(col: number, row: number): void {
		this.itemChildren.toArray()[col+row*this.rowLength].toggleItem();
	}
	
	getRowArray(rowIndex: number): Item[] {
		let grid: Item[][] = [];
		
		/*
		for(let i = 0; i < this.numRows; i++) {
			if(i === this.numRows-1) {
				grid[i] = new Array(this.items.length % this.rowLength);
				break;
			}
			
			grid[i] = new Array(this.rowLength);
		}
		
		for(let j = 0; j < this.rowLength; j++) {	//transposed array
			for(let i = 0; i < this.numRows; i++) {
				console.log(i + ", " + j + ", " + (i+(j*this.numRows)));
				let item = this.items[i+(j*this.numRows)];
				if(item === undefined) break;
				grid[i][j] = item;
			}
		}
		
		console.log(grid);
		return grid[rowIndex];
		*/
		
		return this.items.slice(rowIndex*this.rowLength, rowIndex*this.rowLength+this.rowLength);
	}
}
