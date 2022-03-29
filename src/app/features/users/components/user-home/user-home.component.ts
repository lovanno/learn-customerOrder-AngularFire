import { Component } from '@angular/core';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.scss']
})
export class UserHomeComponent {

  newItem: any[] = [];
  cardView = true;
  tableView = false;



  constructor(public homeData: UsersService) {

  }

  toggleCardView() {
    this.cardView = true;
    this.tableView = false;
  }

  toggleTableView() {
    this.cardView = false;
    this.tableView = true;
  }


  getIconCheck(gender: string) {
    if (gender == 'male') {
      return '../../../../../assets/maleIcon.png'
    }
    return '../../../../../assets/femaleIcon.png'
  }



}

