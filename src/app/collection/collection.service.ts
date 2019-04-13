import {Collection} from './collection.model';
import {Injectable} from '@angular/core';
import {Funko} from '../shared/funko.model';
import {ShoppingService} from '../shopping/shopping.service';
import {Subject} from 'rxjs';

@Injectable()
export class CollectionService {
  collectionChanged = new Subject<Collection[]>();

  private collection: Collection[] = [
    new Collection('A test collection', 'This is a test', 'https://pm1.narvii.com/6209/4e9025a8c731ad7a59a3899039125b71f48c9270_hq.jpg', [new Funko('Luffy', 13.99), new Funko('Ace', 14.99)]),
    // new Collection('A test collection 2', 'This is a test', 'https://pm1.narvii.com/6209/4e9025a8c731ad7a59a3899039125b71f48c9270_hq.jpg', []),
    // new Collection('A test collection # 3', 'This is a test', 'https://pm1.narvii.com/6209/4e9025a8c731ad7a59a3899039125b71f48c9270_hq.jpg', [])

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
