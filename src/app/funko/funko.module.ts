import {NgModule} from '@angular/core';
import {FunkoComponent} from './funko.component';
import {FunkoListComponent} from './funko-list/funko-list.component';
import {FunkoItemComponent} from './funko-list/funko-item/funko-item.component';
import { FunkoDetailComponent } from './funko-detail/funko-detail.component';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {FunkoRoutingModule} from './funko-routing.module';
import {SharedModule} from '../shared/shared.module';
import {FunkoStartComponent} from './funko-start/funko-start.component';

@NgModule({declarations: [FunkoComponent, FunkoStartComponent, FunkoListComponent, FunkoItemComponent, FunkoDetailComponent],
  imports: [CommonModule, ReactiveFormsModule, FunkoRoutingModule, SharedModule]})
export class FunkoModule {}
