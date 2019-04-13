import {Component, OnDestroy, OnInit} from '@angular/core';
import {ShopFunko} from '../shopFunko.model';
import {Subscription} from 'rxjs';
import {FunkoService} from '../funko.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-funko-list',
  templateUrl: './funko-list.component.html',
  styleUrls: ['./funko-list.component.css']
})
export class FunkoListComponent implements OnInit, OnDestroy {
  shopFunko: ShopFunko[];
  subscription: Subscription;

  constructor(private funkoService: FunkoService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.subscription = this.funkoService.funkoChanged.subscribe((funkos: ShopFunko[]) => {this.shopFunko = funkos; });
    this.shopFunko = this.funkoService.getShopFunko();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
