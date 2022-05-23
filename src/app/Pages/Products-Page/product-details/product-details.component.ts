import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {IProductDetail} from "../../../Models/Interfaces/Products/ProductDetails/product-detail";

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  product = {} as IProductDetail

  constructor(private route: ActivatedRoute) {
    route.data.subscribe(res => {
      this.product = res['productDetails'] as IProductDetail;
    })
  }

  ngOnInit(): void {
  }

}
