import {Component, OnDestroy, OnInit} from '@angular/core';
import {Funko} from '../shared/funko.model';
import {ShoppingService} from './shopping.service';
import {Subscription} from 'rxjs';
import {withIdentifier} from 'codelyzer/util/astQuery';

@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.css']
})
export class ShoppingComponent implements OnInit, OnDestroy {
  funkos: Funko[];
  private subscription: Subscription;
  confirmance = false;
  purchaseCompleted = false;

  constructor(private shopService: ShoppingService) { }

  ngOnInit() {
    this.funkos = this.shopService.getFunko();
    this.subscription = this.shopService.funkosChanged.subscribe((funkos: Funko[]) => {this.funkos = funkos; });
  }

  onEditFunko(index: number) {
    this.shopService.startedEditing.next(index);
  }

  confirmPurchase() {
    if (this.confirmance) {
      this.confirmance = false;
      this.purchaseCompleted = true;
      while (this.funkos.length > 0) {
        this.shopService.deleteFunko(0);
      }
    }
    if (!this.confirmance) {
      if (!this.purchaseCompleted) {
        this.confirmance = true;
      }
    }
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
