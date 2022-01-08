import { addUser } from './../../data/user.actions';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store';
import * as UserActions from '../../data/user.actions';
import { Router } from '@angular/router';
import { User } from '../../model/user.model';

@Component({
  selector: 'app-user-new-container',
  templateUrl: './user-new-container.component.html',
  styleUrls: ['./user-new-container.component.css']
})
export class UserNewContainerComponent implements OnInit {

  constructor(private store: Store<AppState>, private router: Router) { }

  ngOnInit(): void {

  }

  onCreate(userToCreate: User) {
    this.store.dispatch(UserActions.addUser({ user: userToCreate }));
    this.router.navigate(['/users']);
  }
}
