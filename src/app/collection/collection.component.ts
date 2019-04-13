import { Component, OnInit } from '@angular/core';
import {Collection} from './collection.model';
import {CollectionService} from './collection.service';

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.css']
})
export class CollectionComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
