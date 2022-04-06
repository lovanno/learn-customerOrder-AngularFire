import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule } from '@angular/forms';

import { UserHomeComponent } from './components/user-home/user-home.component';
import { UserTableComponent } from './components/user-table/user-table.component';
import { UserCardComponent } from './components/user-card/user-card.component';
import { UserAdduserComponent } from './components/user-adduser/user-adduser.component';
import { RouterModule } from '@angular/router';
import { TableFilterPipe } from './components/user-table/table-filter.pipe';

@NgModule({
  declarations: [UserHomeComponent, UserTableComponent, UserCardComponent, UserAdduserComponent, TableFilterPipe],
  imports: [
    CommonModule, NgxPaginationModule, FormsModule, RouterModule
  ],
  exports: [UserHomeComponent, UserTableComponent, UserCardComponent, UserAdduserComponent]
})
export class UsersModule { }
