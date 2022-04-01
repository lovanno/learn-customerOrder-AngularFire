import { Component, Input } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.scss']
})
export class UserHomeComponent {
  @Input() sendData: any;


  newItem: any[] = [];
  cardView = true;
  tableView = false;
  addCustomerForm = false;



  constructor(public homeData: UsersService) { }

  toggleCardView() {
    this.cardView = true;
    this.tableView = false;
  }

  toggleTableView() {
    this.cardView = false;
    this.tableView = true;
  }

  toggleAddCustomerForm() {
    if (this.addCustomerForm == false) {
      this.addCustomerForm = true;
    }
    else {
      this.addCustomerForm = false;
    }
  }



}

