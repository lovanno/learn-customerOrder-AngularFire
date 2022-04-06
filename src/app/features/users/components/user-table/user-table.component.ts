import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.scss']
})
export class UserTableComponent {
  @Input() userList: any;       /*The userList will already be sorted by name because of Firestore automatic sorting*/
  @Input() genderTest: any;

  pageNum: number = 1;
  sortedCol!: string;         /*This variable allows clickable data headers to sort by its header's name. It will change if another header is clicked. Currently, multiple filter attributes won't work.*/
  filterDirection = 'asc'

  constructor() {
  }

  /*This allows the sorted list to rearrange backwards when using the custom table filter pipe*/
  sortDirection() {
    if (this.filterDirection == 'asc') {
      this.filterDirection = 'desc';
    }
    else {
      this.filterDirection = 'asc'
    }

  }



}
