import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsPageRoutingModule } from './products-page-routing.module';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import {AngularMaterialModule} from "../../DesignModules/angular-material.module";
import {PrimeNgModule} from "../../DesignModules/prime-ng.module";
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    ProductListComponent,
    ProductDetailsComponent
  ],
  imports: [
    CommonModule,
    ProductsPageRoutingModule,
    AngularMaterialModule,
    PrimeNgModule,
    FormsModule
  ]
})
export class ProductsPageModule { }
