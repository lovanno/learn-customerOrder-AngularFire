import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.scss']
})
export class UserTableComponent {
  @Input() userList: any;
  @Input() genderTest: any

  constructor() { }




}
