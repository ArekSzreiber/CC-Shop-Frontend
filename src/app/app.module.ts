import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {ProductListComponent} from './products/product-list/product-list.component';
import {ProductDetailComponent} from './products/product-detail/product-detail.component';
import {ShoppingCartComponent} from './shopping-cart/shopping-cart.component';
import {NavbarComponent} from './navbar/navbar.component';
import {ProductItemComponent} from './products/product-list/product-item/product-item.component';
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from './home/home.component';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {StoreModule} from '@ngrx/store';
import {shoppingCartReducer} from "./shopping-cart/store/shopping-cart.reducer";
import {CategoriesComponent} from './categories/categories.component';
import {SuppliersComponent} from './suppliers/suppliers.component';
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'categories/:id/products', component: ProductListComponent},
  {path: 'products', component: ProductListComponent},
  {path: 'shopping-cart', component: ShoppingCartComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductListComponent,
    ProductDetailComponent,
    ShoppingCartComponent,
    NavbarComponent,
    ProductItemComponent,
    HomeComponent,
    CategoriesComponent,
    SuppliersComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    FontAwesomeModule,
    RouterModule.forRoot(appRoutes),
    StoreModule.forRoot({shoppingCart: shoppingCartReducer}),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
