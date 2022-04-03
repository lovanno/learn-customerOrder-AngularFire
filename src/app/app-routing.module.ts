import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrdersDetailsComponent } from './features/orders/components/orders-details/orders-details.component';
import { OrdersHomeComponent } from './features/orders/components/orders-home/orders-home.component';
import { OrdersModule } from './features/orders/orders.module';
/*import { UserHomeComponent } from './features/users/components/user-home/user-home.component';
import { UserOrderComponent } from './features/users/components/user-order/user-order.component';*/

const routes: Routes = [
  {
    path: 'info',
    loadChildren: () =>
      import('./pages/users-page/users-page.module').then((m) => m.UsersPageModule),
  },
  {
    path: 'orders', component: OrdersHomeComponent,
    children: [
      { path: ':name', component: OrdersDetailsComponent },
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

