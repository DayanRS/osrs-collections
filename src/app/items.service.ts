import { Injectable } from '@angular/core';
import { Item } from './item';
import { ITEMS } from './items';
import { Observable, of } from 'rxjs';
import { COLLECTIONS } from './collections';

@Injectable({
	providedIn: 'root'
})
export class ItemsService {
	constructor() { }
	
	getAllItems(): Observable<Item[]> {
		const items = of(ITEMS);
		return items;
	}
	
	private getItemById(itemId: number): Observable<Item> {
		const item = ITEMS.find(i => i.id === itemId);
		return of(item!);
	}
	
	getCollItems(collId: number): Observable<Item[]> {
		const coll = COLLECTIONS.find(c => c.id === collId)!;
		const items: Item[] = [];
		
		for(let i = 0; i < coll.item_ids.length; i++) {
			this.getItemById(coll.item_ids[i]).subscribe(item => items.push(item));
		}
		
		return of(items);
	}
	
	getCollName(collId: number): Observable<string> {
		const coll = COLLECTIONS.find(c => c.id === collId)!;
		return of(coll.name);
	}
}
