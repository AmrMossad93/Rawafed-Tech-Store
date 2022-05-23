import {Injectable} from '@angular/core';
import {DataService} from '../DataService/data.service';
import {Observable} from "rxjs";
import {APIName} from "../../Models/API-Name/APIName";
import {HttpParams} from "@angular/common/http";
import {IProductList} from "../../Models/Interfaces/Products/List/product-list";
import {IAddProduct} from "../../Models/Interfaces/Products/AddEditProduct/add-product";
import {IAddProductResponse} from "../../Models/Interfaces/Products/AddEditProduct/add-product-response";
import {IProductDetail} from "../../Models/Interfaces/Products/ProductDetails/product-detail";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  limit: number = 10;
  addProductOBJ = {} as IAddProduct;

  constructor(private dataService: DataService) {
  }

  getProductsList(): Observable<IProductList[]> {
    let params = new HttpParams();
    params = params.append('limit', this.limit);
    return this.dataService.getWithParams(APIName.product.list, params)
  }

  addNewProductOBJ(): Observable<IAddProductResponse> {
    return this.dataService.post(APIName.product.add, this.addProductOBJ)
  }

  getProductDetails(id: number): Observable<IProductDetail> {
    return this.dataService.get(APIName.product.productDetails + `/${id}`);
  }
}
