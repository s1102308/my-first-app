import {NgModule} from '@angular/core';
import {CollectionComponent} from './collection.component';
import {CollectionStartComponent} from './collection-start/collection-start.component';
import {CollectionListComponent} from './collection-list/collection-list.component';
import {CollectionItemComponent} from './collection-list/collection-item/collection-item.component';
import {CollectionDetailComponent} from './collection-detail/collection-detail.component';
import {CollectionEditComponent} from './collection-edit/collection-edit.component';
import {ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {CollectionRoutingModule} from './collection-routing.module';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  declarations: [CollectionComponent,
    CollectionStartComponent,
    CollectionListComponent,
    CollectionItemComponent,
    CollectionDetailComponent,
    CollectionEditComponent],
  imports: [CommonModule, ReactiveFormsModule, CollectionRoutingModule, SharedModule]
})
export class CollectionModule {

}
