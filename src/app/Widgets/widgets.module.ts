import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NavBarComponent} from './Components/nav-bar/nav-bar.component';
import {AngularMaterialModule} from "../DesignModules/angular-material.module";
import {RouterModule} from "@angular/router";
import { AddEditProductComponent } from './Dialogues/add-edit-product/add-edit-product.component';
import {ReactiveFormsModule} from "@angular/forms";
import {MatSnackBar} from "@angular/material/snack-bar";


@NgModule({
  declarations: [
    NavBarComponent,
    AddEditProductComponent
  ],
  exports: [
    NavBarComponent
  ],
  imports: [
    CommonModule,
    AngularMaterialModule,
    RouterModule,
    ReactiveFormsModule
  ],
  providers: [MatSnackBar]
})
export class WidgetsModule {
}
