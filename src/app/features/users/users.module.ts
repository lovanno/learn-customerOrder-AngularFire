import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserHomeComponent } from './components/user-home/user-home.component';
import { UserOrderComponent } from './components/user-order/user-order.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [UserHomeComponent, UserOrderComponent],
  imports: [
    CommonModule, NgxPaginationModule, FormsModule
  ],
  exports: [
    UserHomeComponent, UserOrderComponent
  ]
})
export class UsersModule { }
