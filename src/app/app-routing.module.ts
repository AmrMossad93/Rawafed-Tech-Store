import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./Pages/Home-Page/home-page.module').then(module => module.HomePageModule)
  },
  {
    path: 'products',
    loadChildren: () => import('./Pages/Products-Page/products-page.module').then(module => module.ProductsPageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
