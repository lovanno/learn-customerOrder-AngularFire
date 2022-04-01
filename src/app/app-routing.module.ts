import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
/*import { UserHomeComponent } from './features/users/components/user-home/user-home.component';
import { UserOrderComponent } from './features/users/components/user-order/user-order.component';*/

const routes: Routes = [
  /*{
    path: '', component: UserHomeComponent
  },
  {
    path: 'order', component: UserOrderComponent
  }
*/
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

