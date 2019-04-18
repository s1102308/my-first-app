import {Injectable} from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {CollectionService} from '../collection/collection.service';
import {Collection} from '../collection/collection.model';
import {map, catchError} from 'rxjs/operators';
import {AuthService} from '../auth/auth.service';
import {Observable} from 'rxjs';

@Injectable()
export class StorageService {
  collectionObservable: Observable<Collection[]>;
  constructor(private http: HttpClient, private collectionService: CollectionService, private authService: AuthService) {}

  storeCollections() {
    const token = this.authService.getToken();
    return this.http.put('https://funko-winkel.firebaseio.com/collection.json?auth=' + token, this.collectionService.getCollection());
  }

  getCollections() {
    this.collectionObservable = this.http.get<Collection[]>('https://funko-winkel.firebaseio.com/collection.json');
    console.log(this.collectionObservable);
  }
}
