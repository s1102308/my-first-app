import {Collection} from './collection.model';
import {Injectable} from '@angular/core';
import {Funko} from '../shared/funko.model';
import {ShoppingService} from '../shopping/shopping.service';
import {Subject} from 'rxjs';

@Injectable()
export class CollectionService {
  collectionChanged = new Subject<Collection[]>();

  private collection: Collection[] = [
    new Collection('Bart', 'This is my personal collection, that I have at home.', 'https://covers.magazinecloner.com/covers/137139.jpg', [new Funko('Monkey D. Luffy', 13.99), new Funko('Roronoa Zoro', 12.99), new Funko('Portgas D. Ace', 14.99), new Funko('Nami', 12.99), new Funko('Vinsmoke Sanji', 14.99), new Funko('Donquixote Doflamingo', 9.99), new Funko('Vanitas', 14.99), new Funko('Ron Weasley Riding Chess Piece', 34.99)]),

  ];

  constructor(private shopService: ShoppingService) {
  }

  setCollection(collection: Collection[]) {
    this.collection = collection;
    this.collectionChanged.next(this.collection.slice());
  }

  getCollection() {
    return this.collection.slice();
  }

  getCollect(index: number) {
    return this.collection[index];
  }

  addToShopping(funkos: Funko[]) {
    this.shopService.addFunkos(funkos);
  }

  addCollection(collection: Collection) {
    this.collection.push(collection);
    this.collectionChanged.next(this.collection.slice());
  }

  updateCollection(index: number, newCollection: Collection) {
    this.collection[index] = newCollection;
    this.collectionChanged.next(this.collection.slice());
  }

  deleteCollection(index: number) {
    this.collection.splice(index, 1);
    this.collectionChanged.next(this.collection.slice());
  }
}
