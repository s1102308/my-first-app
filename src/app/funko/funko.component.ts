import { Component, OnInit } from '@angular/core';
import {FunkoService} from './funko.service';

@Component({
  selector: 'app-funko',
  templateUrl: './funko.component.html',
  styleUrls: ['./funko.component.css']
})
export class FunkoComponent implements OnInit {

  constructor(public funkoShopService: FunkoService) { }

  funkoChecker = this.funkoShopService.funkoChosen;

  ngOnInit() {
  }

}
