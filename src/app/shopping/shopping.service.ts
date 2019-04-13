import {Funko} from '../shared/funko.model';
import {EventEmitter} from '@angular/core';
import {Subject} from 'rxjs';

export class ShoppingService {
  funkosChanged = new Subject<Funko[]>();
  startedEditing = new Subject<number>();
  private funkos: Funko[] = [
    // new Funko('Roronoa Zoro', 12.99),
    // new Funko('Donquixote Doflamingo', 9.99)
  ];

  getFunko() {
    return this.funkos.slice();
  }

  getFun(index: number) {
    return this.funkos[index];
  }

  addFunko(funko: Funko) {
    this.funkos.push(funko);
    this.funkosChanged.next(this.funkos.slice());
  }

  addFunkos(funkos: Funko[]) {
    this.funkos.push(...funkos);
    this.funkosChanged.next(this.funkos.slice());
  }

  updateFunko(index: number, newFunko: Funko) {
    this.funkos[index] = newFunko;
    this.funkosChanged.next(this.funkos.slice());
}

deleteFunko(index: number) {
    this.funkos.splice(index, 1);
    this.funkosChanged.next(this.funkos.slice());
}

}
