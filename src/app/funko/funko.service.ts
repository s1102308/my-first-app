import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';
import {ShopFunko} from './shopFunko.model';
import {ShoppingService} from '../shopping/shopping.service';
import {Collection} from '../collection/collection.model';
import {Funko} from '../shared/funko.model';

@Injectable()
export class FunkoService {
  funkoChanged = new Subject<ShopFunko[]>();
  funkoChosen = false;

  private funko: ShopFunko[] = [
    new ShopFunko('Tony Stark', 449, 'Avengers', 12.99, 'https://www.large.nl/dw/image/v2/BBQV_PRD/on/demandware.static/-/Sites-master-emp/default/dw94aa0ce3/images/3/9/0/1/390166a.jpg?sw=350&sh=400&sm=fit&sfrm=png', []),
    new ShopFunko('Captain America', 450, 'Avengers', 14.99, 'https://www.large.nl/dw/image/v2/BBQV_PRD/on/demandware.static/-/Sites-master-emp/default/dw507172bd/images/3/9/0/1/390167a.jpg?sw=350&sh=400&sm=fit&sfrm=png', []),
    new ShopFunko('Thor', 452, 'Avengers', 14.99, 'https://www.large.nl/dw/image/v2/BBQV_PRD/on/demandware.static/-/Sites-master-emp/default/dwae4b1c3f/images/3/9/0/1/390169a.jpg?sw=350&sh=400&sm=fit&sfrm=png', []),
    new ShopFunko('Harry Potter (Quidditch)', 8, 'Harry Potter', 14.99, 'https://www.large.nl/dw/image/v2/BBQV_PRD/on/demandware.static/-/Sites-master-emp/default/dw5faa9fbe/images/3/8/6/4/386411a.jpg?sw=350&sh=400&sm=fit&sfrm=png', []),
    new ShopFunko('Albus Dumbledore', 15, 'Harry Potter', 14.99, 'https://www.large.nl/dw/image/v2/BBQV_PRD/on/demandware.static/-/Sites-master-emp/default/dw898d0f4e/images/3/2/7/8/327855a-emp.jpg?sw=350&sh=400&sm=fit&sfrm=png', []),
    new ShopFunko('Harry Potter With Marauders Map', 42, 'Harry Potter', 12.99, 'https://www.large.nl/dw/image/v2/BBQV_PRD/on/demandware.static/-/Sites-master-emp/default/dw58b9f666/images/3/5/7/7/357786a.jpg?sw=350&sh=400&sm=fit&sfrm=png', []),
    new ShopFunko('Hermione (Herbology)', 57, 'Harry Potter', 14.99, 'https://www.large.nl/dw/image/v2/BBQV_PRD/on/demandware.static/-/Sites-master-emp/default/dw558f3f79/images/3/7/6/4/376474a.jpg?sfrm=png', []),
    new ShopFunko('Rubeus Hagrid', 78, 'Harry Potter', 24.99, 'https://www.large.nl/dw/image/v2/BBQV_PRD/on/demandware.static/-/Sites-master-emp/default/dwd39274b0/images/3/8/4/8/384894a.jpg?sw=350&sh=400&sm=fit&sfrm=png', []),
    new ShopFunko('Ron Weasley Riding Chess Piece', 82, 'Harry Potter', 34.99, 'https://www.large.nl/dw/image/v2/BBQV_PRD/on/demandware.static/-/Sites-master-emp/default/dw3c3fa554/images/3/8/4/9/384903a.jpg?sw=350&sh=400&sm=fit&sfrm=png', []),
    new ShopFunko('Monkey D. Luffy', 98, 'One Piece', 13.99, 'https://www.large.nl/dw/image/v2/BBQV_PRD/on/demandware.static/-/Sites-master-emp/default/dw069a520c/images/3/2/8/8/328894a-emp.jpg?sw=350&sh=400&sm=fit&sfrm=png', [new Funko('', 1)]),
    new ShopFunko('Portgas D. Ace', 100, 'One Piece', 14.99, 'https://www.large.nl/dw/image/v2/BBQV_PRD/on/demandware.static/-/Sites-master-emp/default/dw98b7422b/images/3/2/8/8/328892a.jpg?sw=350&sh=400&sm=fit&sfrm=png', []),
    new ShopFunko('Roronoa Zoro', 327, 'One Piece', 12.99, 'https://www.large.nl/dw/image/v2/BBQV_PRD/on/demandware.static/-/Sites-master-emp/default/dwc834fc5d/images/3/6/6/2/366221a.jpg?sw=350&sh=400&sm=fit&sfrm=png', []),
    new ShopFunko('Nami', 328, 'One Piece', 12.99, 'https://funkopops.nl/wp-content/uploads/2018/04/Nami-Funko-Pop-2-700x700.jpg', []),
    new ShopFunko('Vinsmoke Sanji', 398, 'One Piece', 14.99, 'https://www.large.nl/dw/image/v2/BBQV_PRD/on/demandware.static/-/Sites-master-emp/default/dw8f47177b/images/3/8/0/2/380281a.jpg?sw=350&sh=400&sm=fit&sfrm=png', []),
    new ShopFunko('Donquixote Doflamingo', 400, 'One Piece', 9.99, 'https://www.large.nl/dw/image/v2/BBQV_PRD/on/demandware.static/-/Sites-master-emp/default/dwf431336e/images/3/8/0/2/380279a.jpg?sw=350&sh=400&sm=fit&sfrm=png', []),
    new ShopFunko('Sora', 406, 'Kingdom Hearts', 12.99, 'https://www.large.nl/dw/image/v2/BBQV_PRD/on/demandware.static/-/Sites-master-emp/default/dw1d92ab2b/images/3/8/2/3/382389a.jpg?sw=350&sh=400&sm=fit&sfrm=png', []),
    new ShopFunko('Soldier Heartless', 407, 'Kingdom Hearts', 12.99, 'https://www.large.nl/dw/image/v2/BBQV_PRD/on/demandware.static/-/Sites-master-emp/default/dw206bc41d/images/3/8/3/2/383288a.jpg?sw=350&sh=400&sm=fit&sfrm=png', []),
    new ShopFunko('Vanitas', 490, 'Kingdom Hearts', 14.99, 'https://www.large.nl/dw/image/v2/BBQV_PRD/on/demandware.static/-/Sites-master-emp/default/dw464c1ecb/images/3/8/3/2/383289a.jpg?sw=350&sh=400&sm=fit&sfrm=png', []),
    new ShopFunko('Sora (Toy Story)', 493, 'Kingdom Hearts', 14.99, 'https://www.large.nl/dw/image/v2/BBQV_PRD/on/demandware.static/-/Sites-master-emp/default/dw3cd714db/images/3/8/1/2/381202a.jpg?sw=350&sh=400&sm=fit&sfrm=png', [])];

  constructor(private shopService: ShoppingService) {
  }

  setShopFunko(shopFunko: ShopFunko[]) {
    this.funko = shopFunko;
    this.funkoChanged.next(this.funko.slice());
  }

  getShopFunko() {
    return this.funko.slice();
  }

  getFunko(index: number) {
    return this.funko[index];
  }

  addToShopping(funkos: Funko[]) {
    this.shopService.addFunkos(funkos);
  }

  funkoChosenActivated() {
    this.funkoChosen = true;
  }
}
