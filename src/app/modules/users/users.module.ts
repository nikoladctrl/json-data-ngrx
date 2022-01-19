import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UserListContainerComponent } from './feature/user-list-container/user-list-container.component';
import { UserDetailContainerComponent } from './feature/user-detail-container/user-detail-container.component';
import { UserListComponent } from './ui/user-list/user-list.component';
import UserDetailComponent from './ui/user-detail/user-detail.component';
import { StoreModule } from '@ngrx/store';
import * as fromUser from './data/user.reducer';
import { EffectsModule } from '@ngrx/effects';
import { UserEffects } from './data/user.effects';
import { UserItemComponent } from './ui/user-item/user-item.component';
import { UserNewContainerComponent } from './feature/user-new-container/user-new-container.component';
import { UserNewComponent } from './ui/user-new/user-new.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    UserListContainerComponent,
    UserDetailContainerComponent,
    UserListComponent,
    UserDetailComponent,
    UserItemComponent,
    UserNewContainerComponent,
    UserNewComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    ReactiveFormsModule,
    StoreModule.forFeature(fromUser.usersFeatureKey, fromUser.reducer),
    EffectsModule.forFeature([UserEffects])
  ]
})
export class UsersModule { }
