import { UserDetailContainerComponent } from './feature/user-detail-container/user-detail-container.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListContainerComponent } from './feature/user-list-container/user-list-container.component';
import { UserNewContainerComponent } from './feature/user-new-container/user-new-container.component';

const routes: Routes = [
  { path: '', component: UserListContainerComponent },
  { path: 'new', component: UserNewContainerComponent },
  { path: ':id', component: UserDetailContainerComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
