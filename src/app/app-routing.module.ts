import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './core/home/home.component';
import {ShoppingComponent} from './shopping/shopping.component';

const approutes: Routes = [{path: '', component: HomeComponent},
  {path: 'collection', loadChildren: './collection/collection.module#CollectionModule'},
  {path: 'funko', loadChildren: './funko/funko.module#FunkoModule'},
  {path: 'shopping', component: ShoppingComponent}];
@NgModule({
  imports: [RouterModule.forRoot(approutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
