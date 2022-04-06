import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss']
})
export class UserCardComponent {
  @Input() userList: any;
  @Input() genderTest: any;

  users = []
  sortedCol!: string;
  filterDirection = 'asc';

  sortDirection() {
    if (this.filterDirection == 'asc') {
      this.filterDirection = 'desc'
    }
    else {
      this.filterDirection = 'asc'
    }
  }


  constructor() { }


}
