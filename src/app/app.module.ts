import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {SharedModule} from './shared/shared.module';
import {ShoppingModule} from './shopping/shopping.module';
import {AuthModule} from './auth/auth.module';
import {CoreModule} from './core/core.module';
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
