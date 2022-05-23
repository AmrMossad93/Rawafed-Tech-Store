import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ProductService} from 'src/app/Services/ProductsService/product.service';
import {IProductList} from "../../../Models/Interfaces/Products/List/product-list";
import {MatDialog} from "@angular/material/dialog";
import {AddEditProductComponent} from "../../../Widgets/Dialogues/add-edit-product/add-edit-product.component";
import {MatSnackBar} from "@angular/material/snack-bar";
import {ToastrService} from "../../../Services/ToastrService/toastr.service";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  productList: IProductList[] = []

  constructor(
    private route: ActivatedRoute,
    public productService: ProductService,
    private toastrService: ToastrService,
    public dialog: MatDialog,
    private router: Router) {
    route.data.subscribe(res => {
      this.productList = res['productList'] as IProductList[];
    })
  }

  ngOnInit(): void {
  }

  onReloadProductsList(): void {
    this.productService.getProductsList().subscribe(res => {
      this.productList = res;
    })
  }

  onLoadMoreProductsList(): void {
    this.productService.limit = this.productService.limit + 10;
    this.onReloadProductsList();
  }

  onAddNewProduct(): void {
    const dialogRef = this.dialog.open(AddEditProductComponent, {
      minWidth: '50vw',
      maxWidth: '50vw',
      maxHeight: '90vh',
    });
    dialogRef.afterClosed().subscribe(res => {
      if (res) {
        this.productService.addProductOBJ = res;
        this.productService.addNewProductOBJ().subscribe(res => {
          this.onReloadProductsList();
        }, error => {
        }, () => {
          this.toastrService.onSuccess('Added Successfully', 'Product')
        })
      }
    })
  }

  onNavigateToProductDetails(productId: number): void {
    this.router.navigate(['products', productId])
  }
}
