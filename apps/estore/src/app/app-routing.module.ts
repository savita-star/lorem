import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () =>
      import('../../../estore/src/app/login/login.module').then(
        (m) => m.LoginModule
      ),
  },
  {
    path: 'products',
    loadChildren: () =>
      import('../../../estore/src/app/product/product.module').then(
        (m) => m.ProductModule
      ),
  },
  {
    path: 'cart',
    loadChildren: () =>
      import('../../../estore/src/app/cart/cart.module').then(
        (m) => m.CartModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
