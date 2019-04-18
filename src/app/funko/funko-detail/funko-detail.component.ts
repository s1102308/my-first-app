import { Component, OnInit } from '@angular/core';
import {Funko} from '../../shared/funko.model';
import {FunkoService} from '../funko.service';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {ShopFunko} from '../shopFunko.model';

@Component({
  selector: 'app-funko-detail',
  templateUrl: './funko-detail.component.html',
  styleUrls: ['./funko-detail.component.css']
})
export class FunkoDetailComponent implements OnInit {
  funko: ShopFunko;
  id: number;

  constructor(private funkoService: FunkoService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {this.id = +params['id']; this.funko = this.funkoService.getFunko(this.id); });
  }

  onToShopping() {
    this.funko.funkos = [new Funko(this.funko.name, this.funko.price)];
    this.funkoService.addToShopping(this.funko.funkos);
  }

}
