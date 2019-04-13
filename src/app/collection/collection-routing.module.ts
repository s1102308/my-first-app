import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CollectionComponent} from './collection.component';
import {CollectionStartComponent} from './collection-start/collection-start.component';
import {CollectionEditComponent} from './collection-edit/collection-edit.component';
import {AuthGuardService} from '../auth/auth-guard.service';
import {CollectionDetailComponent} from './collection-detail/collection-detail.component';

const collectionRoutes: Routes = [
  {path: '', component: CollectionComponent,
    children: [{path: '', component: CollectionStartComponent},
      {path: 'new', component: CollectionEditComponent, canActivate: [AuthGuardService]},
      {path: ':id', component: CollectionDetailComponent},
      {path: ':id/edit', component: CollectionEditComponent, canActivate: [AuthGuardService]}]},
];

@NgModule({imports: [RouterModule.forChild(collectionRoutes)], exports: [RouterModule]})
export class CollectionRoutingModule {
}
