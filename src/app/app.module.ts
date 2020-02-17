import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {ProductsComponent} from './products/products.component';
import {SuppliersComponent} from './suppliers/suppliers.component';
import {CategoriesComponent} from './categories/categories.component';
import {ProductListComponent} from './products/product-list/product-list.component';
import {ProductDetailComponent} from './products/product-detail/product-detail.component';
import {ShoppingCartComponent} from './shopping-cart/shopping-cart.component';
import {NavbarComponent} from './navbar/navbar.component';
import {ProductItemComponent} from './products/product-list/product-item/product-item.component';
import {RouterModule, Routes} from "@angular/router";
import { HomeComponent } from './home/home.component';

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'categories', component: CategoriesComponent},
  {path: 'products', component: ProductsComponent},
  {path: 'shopping-cart', component: ShoppingCartComponent},
  {path: 'suppliers', component: SuppliersComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductsComponent,
    SuppliersComponent,
    CategoriesComponent,
    ProductListComponent,
    ProductDetailComponent,
    ShoppingCartComponent,
    NavbarComponent,
    ProductItemComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
