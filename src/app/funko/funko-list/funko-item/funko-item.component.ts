import {Component, Input, OnInit} from '@angular/core';
import {ShopFunko} from '../../shopFunko.model';

@Component({
  selector: 'app-funko-item',
  templateUrl: './funko-item.component.html',
  styleUrls: ['./funko-item.component.css']
})
export class FunkoItemComponent implements OnInit {
  @Input() funko: ShopFunko;
  @Input() index: number;

  ngOnInit() {
  }

}
