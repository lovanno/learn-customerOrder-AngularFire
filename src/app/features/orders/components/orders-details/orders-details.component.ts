import { Component } from '@angular/core';
import { OrdersService } from '../../services/orders.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-orders-details',
  templateUrl: './orders-details.component.html',
  styleUrls: ['./orders-details.component.scss']
})
export class OrdersDetailsComponent {
  public currentRoute;
  public currentDoc;
  public orderTotal = 0;
  subscriptionOrders: Subscription;


  constructor(public ordersService: OrdersService, private router: Router) {
    this.currentRoute = (router.url).slice(8);
    this.currentDoc = ordersService.getOrder(this.currentRoute);
    /* The following lines discovered a flaw with my program: Lazy loading.
          console.log(ordersHome.customerOrders[0])
          console.log(ordersHome.customerOrders?.[0].Pants.price)

    With lazy loading working, the customerOrders array stays empty because orders-home (parent component) is never loaded
    While it's unlikely someone will access the child routes manually, I have to prepare for the possibility.
    */


    /*ERROR. Sometimes runs twice. Can't figure out why*/
    this.subscriptionOrders = this.currentDoc.subscribe(f => {
      this.addTotal(f?.order.Dresses?.total!)
      this.addTotal(f?.order.Shirts?.total!)
      this.addTotal(f?.order.Pants?.total!)
      this.addTotal(f?.order.Shoes?.total!)
    })
  }


  addTotal(itemTotal: any) {
    if (itemTotal) {
      this.orderTotal += itemTotal;
    }
  }


  ngOnDestroy() {
    this.subscriptionOrders;
  }




}




