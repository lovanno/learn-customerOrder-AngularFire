import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-user-adduser',
  templateUrl: './user-adduser.component.html',
  styleUrls: ['./user-adduser.component.scss']
})
export class UserAdduserComponent {
  @Output() sendData = new EventEmitter();





  sendUp(Data: any) {
    console.log(Data);
    this.sendData.emit(Data);
  }



  constructor() { }

}
