import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { InputComponent } from './input/input.component';
import { HeaderComponent } from './header/header.component';
import { OffersComponent } from './offers/offers.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CategoriesComponent } from './categories/categories.component';
import { FooterComponent } from './footer/footer.component';
import { CartComponent } from './cart/cart.component';
import { CartItemComponent } from './cart-item/cart-item.component';
import { CartPageComponent } from './cart-page/cart-page.component';
import { CartCheckoutComponent } from './cart-checkout/cart-checkout.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { ProductListComponent } from './product-list/product-list/product-list.component';
import { ProductFilterComponent } from './product-list/product-filter/product-filter.component';
import { ProductItemComponent } from './product-list/product-item/product-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    InputComponent,
    HeaderComponent,
    OffersComponent,
    CategoriesComponent,
    FooterComponent,
    CartComponent,
    CartItemComponent,
    CartPageComponent,
    CartCheckoutComponent,
    LoginComponent,
    RegisterComponent,
    ProductListComponent,
    ProductFilterComponent,
    ProductItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
