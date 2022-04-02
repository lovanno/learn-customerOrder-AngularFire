import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersPageRoutingModule } from './users-page-routing.module';
import { UsersModule } from '../../features/users/users.module';
import { HeaderModule } from 'src/app/features/header/header.module';
import { UsersPageComponent } from './users-page.component';



@NgModule({
  declarations: [UsersPageComponent],
  imports: [
    CommonModule,
    UsersPageRoutingModule,
    UsersModule,
    HeaderModule
  ]
})
export class UsersPageModule { }
