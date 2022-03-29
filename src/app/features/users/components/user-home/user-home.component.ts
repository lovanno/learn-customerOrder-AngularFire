import { Component } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.scss']
})
export class UserHomeComponent {
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

  getIconCheck(gender: string) {
    if (gender.toLowerCase() == 'male') {
      return '../../../../../assets/maleIcon.png'
    }
    return '../../../../../assets/femaleIcon.png'
  }

}

