import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UserListContainerComponent } from './feature/user-list-container/user-list-container.component';
import { UserDetailContainerComponent } from './feature/user-detail-container/user-detail-container.component';
import { UserListComponent } from './ui/user-list/user-list.component';
import { UserDetailComponent } from './ui/user-detail/user-detail.component';


@NgModule({
  declarations: [
    UserListContainerComponent,
    UserDetailContainerComponent,
    UserListComponent,
    UserDetailComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule
  ]
})
export class UsersModule { }
