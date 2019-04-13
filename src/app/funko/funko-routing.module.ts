import {RouterModule, Routes} from '@angular/router';
import {FunkoComponent} from './funko.component';
import {FunkoStartComponent} from './funko-start/funko-start.component';
import {FunkoDetailComponent} from './funko-detail/funko-detail.component';
import {NgModule} from '@angular/core';

const funkoRoutes: Routes = [
  {path: '', component: FunkoComponent, children: [
    {path: '', component: FunkoStartComponent},
      {path: ':id', component: FunkoDetailComponent}]}
];

@NgModule({imports: [RouterModule.forChild(funkoRoutes)], exports: [RouterModule]})
export class FunkoRoutingModule {}
