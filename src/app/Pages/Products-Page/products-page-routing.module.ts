import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ProductListComponent} from './product-list/product-list.component';
import {ProductDetailsComponent} from "./product-details/product-details.component";
import {ProductListResolver} from "../../Resolvers/Product/product-list.resolver";
import {ProductDetailsResolver} from "../../Resolvers/Product/product-details.resolver";

const routes: Routes = [
  {
    path: '',
    component: ProductListComponent,
    resolve: {
      productList: ProductListResolver
    }
  },
  {
    path: ':productId',
    component: ProductDetailsComponent,
    resolve: {
      productDetails: ProductDetailsResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsPageRoutingModule {
}
