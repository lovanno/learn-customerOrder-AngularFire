import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { map } from 'rxjs'
import { Customers } from '../../interfaces/customers';
import { Orders } from '../../interfaces/orders';


@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.scss']
})
export class UserHomeComponent {

  newItem: any[] = [];

  constructor(public homeData: UsersService) {

    /*  homeData.getAllCustomers().snapshotChanges().pipe(
        map((changes: any) =>
          changes.map((c: any) =>
            ({ id: c.payload.doc.id, ...c.payload.doc.data() })
          )
        )
      ).subscribe((data: any) => {
        this.newItem.push(data);
      });*/





  }



}

