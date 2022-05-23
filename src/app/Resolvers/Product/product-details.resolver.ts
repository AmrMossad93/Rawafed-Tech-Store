import {Injectable} from '@angular/core';
import {
  Resolve,
  ActivatedRouteSnapshot
} from '@angular/router';
import {Observable, of} from 'rxjs';
import {ProductService} from "../../Services/ProductsService/product.service";
import {IProductDetail} from "../../Models/Interfaces/Products/ProductDetails/product-detail";

@Injectable({
  providedIn: 'root'
})
export class ProductDetailsResolver implements Resolve<IProductDetail> {
  constructor(private productService: ProductService) {
  }

  resolve(route: ActivatedRouteSnapshot): Observable<IProductDetail> {
    // @ts-ignore
    let productId = +route.paramMap.get('productId');
    return this.productService.getProductDetails(productId)
  }
}
