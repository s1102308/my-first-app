import {Component, ElementRef, EventEmitter, OnDestroy, OnInit, Output, ViewChild} from '@angular/core';
import {Funko} from '../../shared/funko.model';
import {ShoppingService} from '../shopping.service';
import {NgForm} from '@angular/forms';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  @ViewChild('f') shopForm: NgForm;
  subscription: Subscription;
  editMode = false;
  editedItemIndex: number;
  editedItem: Funko;

  constructor(private shopService: ShoppingService) { }

  ngOnInit() {
    this.subscription = this.shopService.startedEditing.subscribe((index: number) => {
      this.editedItemIndex = index; this.editMode = true; this.editedItem = this.shopService.getFun(index);
      this.shopForm.setValue({name: this.editedItem.name, price: this.editedItem.price}); });
  }

  onAddItem(form: NgForm) {
    const value = form.value;
    const newFunko = new Funko(value.name, value.price);
    if (this.editMode) {this.shopService.updateFunko(this.editedItemIndex, newFunko);  } else {this.shopService.addFunko(newFunko); }
    this.editMode = false; form.reset();
  }

  onClear() {
    this.shopForm.reset();
    this.editMode = false;
  }

  onDelete() {
    this.shopService.deleteFunko(this.editedItemIndex);
    this.onClear();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
