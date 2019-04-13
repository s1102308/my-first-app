import {NgModule} from '@angular/core';
import {HeaderComponent} from './header/header.component';
import {HomeComponent} from './home/home.component';
import {SharedModule} from '../shared/shared.module';
import {AppRoutingModule} from '../app-routing.module';
import {ShoppingService} from '../shopping/shopping.service';
import {CollectionService} from '../collection/collection.service';
import {StorageService} from '../shared/storage.service';
import {AuthService} from '../auth/auth.service';
import {AuthGuardService} from '../auth/auth-guard.service';
import {FunkoService} from '../funko/funko.service';

@NgModule({declarations: [HeaderComponent, HomeComponent],
  imports: [SharedModule, AppRoutingModule],
  exports: [AppRoutingModule, HeaderComponent],
  providers: [ShoppingService, CollectionService, StorageService, AuthService, AuthGuardService, FunkoService]})
export class CoreModule {

}
