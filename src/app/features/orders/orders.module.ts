import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrdersHomeComponent } from './components/orders-home/orders-home.component';
import { OrdersDetailsComponent } from './components/orders-details/orders-details.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    OrdersHomeComponent,
    OrdersDetailsComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class OrdersModule { }
