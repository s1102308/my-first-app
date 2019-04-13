import {Funko} from '../shared/funko.model';

export class ShopFunko {
  public name: string;
  public id: number;
  public series: string;
  public image: string;
  public price: number;
  public funkos: Funko[];
  constructor(name: string, id: number, series: string, price: number, image: string, funkos: Funko[]) {
    this.name = name;
    this.id = id;
    this.series = series;
    this.price = price;
    this.image = image;
    this.funkos = funkos;
  }
}
