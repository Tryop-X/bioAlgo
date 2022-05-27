import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { LayoutComponent } from './layout/layout.component';
import { ProductListComponent } from './products/product-list/product-list.component';
import { ProductViewComponent } from './products/product-view/product-view.component';
import { MaterialModule } from '../material/material.module';
import { CartViewComponent } from './shoppingCart/cart-view/cart-view.component';
import { ProcesoCompraComponent } from './shoppingCart/proceso-compra/proceso-compra.component';


@NgModule({
  declarations: [
    LayoutComponent,
    ProductListComponent,
    ProductViewComponent,
    LayoutComponent,
    CartViewComponent,
    ProcesoCompraComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    MaterialModule
  ]
})
export class UserModule { }
