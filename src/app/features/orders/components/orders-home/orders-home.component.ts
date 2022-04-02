import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { OrdersService } from '../../services/orders.service';

@Component({
  selector: 'app-orders-home',
  templateUrl: './orders-home.component.html',
  styleUrls: ['./orders-home.component.scss']
})
export class OrdersHomeComponent {
  public customerOrders: any[] = [];
  public salesName: any[] = [];

  /*  Totals+Quantity for the itemsSales Section  */
  public dressTotal = 0;
  public dressCount = 0;
  public shirtsTotal = 0;
  public shirtsCount = 0;
  public pantsTotal = 0;
  public pantsCount = 0;
  public shoesTotal = 0;
  public shoesCount = 0;


  cardView = true;
  tableView = false;
  addCustomerForm = false;
  subscription: Subscription;

  constructor(public orderServ: OrdersService) {

    this.subscription =
      this.orderServ.ordersItems
        .subscribe(notes => {
          notes.map(f => {
            this.customerOrders.push(f.order);
            this.salesName.push(f.customID);

            if (f.order?.Dresses?.total) {
              this.dressTotal += f.order?.Dresses?.total;
              this.dressCount += f.order?.Dresses?.quantity;
            }
            if (f.order?.Shirts?.total) {
              this.shirtsTotal += f.order?.Shirts?.total;
              this.shirtsCount += f.order?.Shirts?.quantity;
            }

            if (f.order?.Pants?.total) {
              this.pantsTotal += f.order?.Pants?.total;
              this.pantsCount += f.order?.Pants?.quantity;
            }

            if (f.order?.Shoes?.total) {
              this.shoesTotal += f.order?.Shoes?.total;
              this.shoesCount += f.order?.Shoes?.quantity;
            }


          }
          )
        });


  }


  /* Ensures there aren't any data leaks */
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}






