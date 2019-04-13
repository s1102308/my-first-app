import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import {AppRoutingModule} from './app-routing.module';
import { CollectionStartComponent } from './collection/collection-start/collection-start.component';
import { CollectionEditComponent } from './collection/collection-edit/collection-edit.component';
import {CollectionService} from './collection/collection.service';
import {StorageService} from './shared/storage.service';
import { FunkoComponent } from './funko/funko.component';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import {AuthService} from './auth/auth.service';
import {AuthGuardService} from './auth/auth-guard.service';
import {CollectionModule} from './collection/collection.module';
import {SharedModule} from './shared/shared.module';
import {ShoppingModule} from './shopping/shopping.module';
import {AuthModule} from './auth/auth.module';
import { HomeComponent } from './core/home/home.component';
import {CoreModule} from './core/core.module';
import { FunkoStartComponent } from './funko/funko-start/funko-start.component';
import { FunkoListComponent } from './funko/funko-list/funko-list.component';
import { FunkoItemComponent } from './funko/funko-list/funko-item/funko-item.component';
import {FunkoModule} from './funko/funko.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    SharedModule,
    ShoppingModule,
    AuthModule,
    CoreModule,
    FunkoModule,
    AppRoutingModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
