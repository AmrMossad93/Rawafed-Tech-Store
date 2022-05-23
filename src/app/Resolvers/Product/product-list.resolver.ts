import {Injectable} from '@angular/core';
import {
  Resolve,
  ActivatedRouteSnapshot
} from '@angular/router';
import {Observable, of} from 'rxjs';
import {ProductService} from 'src/app/Services/ProductsService/product.service';
import {IProductList} from "../../Models/Interfaces/Products/List/product-list";

@Injectable({
  providedIn: 'root'
})
export class ProductListResolver implements Resolve<IProductList[]> {
  constructor(private productService: ProductService) {
  }

  resolve(route: ActivatedRouteSnapshot): Observable<IProductList[]> {
    return this.productService.getProductsList();
  }
}
