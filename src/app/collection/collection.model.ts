import {Funko} from '../shared/funko.model';

export class Collection {
  public name: string;
  public description: string;
  public image: string;
  public funkos: Funko[];
  constructor(name: string, desc: string, imagePath: string, funkos: Funko[]) {
    this.name = name;
    this.description = desc;
    this.image = imagePath;
    this.funkos = funkos;
  }
}
