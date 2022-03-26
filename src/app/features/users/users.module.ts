import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserHomeComponent } from './components/user-home/user-home.component';
import { UserOrderComponent } from './components/user-order/user-order.component';


@NgModule({
  declarations: [UserHomeComponent, UserOrderComponent],
  imports: [
    CommonModule,
  ],
  exports: [
    UserHomeComponent, UserOrderComponent
  ]
})
export class UsersModule { }
