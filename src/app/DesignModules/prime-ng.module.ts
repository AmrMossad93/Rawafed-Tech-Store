import {NgModule} from '@angular/core';
import {ImageModule} from "primeng/image";
import {RatingModule} from "primeng/rating";

const primeNgModule = [
  ImageModule,
  RatingModule
]

@NgModule({
  exports: [
    primeNgModule
  ]
})
export class PrimeNgModule {
}
