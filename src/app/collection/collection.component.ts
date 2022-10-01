import { Component, OnInit, QueryList, ViewChildren } from '@angular/core';
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
	
	items: Item[] = [];
	numRows: number = -1;
	
	@ViewChildren(CollItemComponent) itemChildren!: QueryList<CollItemComponent>;
	
	constructor(private itemsService: ItemsService) { }
	
	ngOnInit(): void {
		this.itemsService.getCollItems(0).subscribe(items => this.items = items);
		this.numRows = Math.ceil(this.items.length/this.rowLength);
	}
	
	ngAfterViewInit(): void {
		console.log(this.itemChildren);
		let arr = this.itemChildren.toArray();
		
		for(let i = 0; i < arr.length; i++) {
			console.log(arr[i].item.name);
		}
	}
	
	test(col: number, row: number): void {
		this.itemChildren.toArray()[col+row*this.rowLength].toggleItem();
		//this.child!.toggleItem();
		//console.log(child);
	}
	
	getRowArray(rowIndex: number): Item[] {
		let grid: Item[][] = [];
		
		for(let i = 0; i < this.numRows; i++) {
			grid[i] = new Array(this.rowLength);
		}
		
		for(let j = 0; j < this.rowLength; j++) {	//transposed array
			for(let i = 0; i < this.numRows; i++) {
				grid[i][j] = this.items[i+(j*this.numRows)];
			}
		}
		
		return grid[rowIndex];
	}
}
