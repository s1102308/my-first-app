import {Component, EventEmitter, OnDestroy, OnInit, Output} from '@angular/core';
import {Collection} from '../collection.model';
import {CollectionService} from '../collection.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-collection-list',
  templateUrl: './collection-list.component.html',
  styleUrls: ['./collection-list.component.css']
})
export class CollectionListComponent implements OnInit, OnDestroy {
  collection: Collection[];
  subscription: Subscription;

  constructor(private collectionService: CollectionService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.subscription = this.collectionService.collectionChanged.subscribe(
      (collections: Collection[]) => {this.collection = collections; });
    this.collection = this.collectionService.getCollection();
  }

  onNewCollection() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
