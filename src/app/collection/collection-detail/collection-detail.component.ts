import {Component, Input, OnInit} from '@angular/core';
import {Collection} from '../collection.model';
import {CollectionService} from '../collection.service';
import {ActivatedRoute, Params, Router} from '@angular/router';

@Component({
  selector: 'app-collection-detail',
  templateUrl: './collection-detail.component.html',
  styleUrls: ['./collection-detail.component.css']
})
export class CollectionDetailComponent implements OnInit {
  collection: Collection;
  id: number;

  constructor(private colService: CollectionService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {this.id = +params['id']; this.collection = this.colService.getCollect(this.id); });
  }

  onToShopping() {
    this.colService.addToShopping(this.collection.funkos);
  }

  onEditCollection() {
    this.router.navigate(['edit'], {relativeTo: this.route});
  }

  onDeleteCollection() {
    this.colService.deleteCollection(this.id);
    this.router.navigate(['/collection']);
  }

}
