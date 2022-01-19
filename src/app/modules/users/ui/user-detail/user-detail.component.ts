import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { User } from '../../model/user.model';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export default class UserDetailComponent implements OnInit {

  @Input() user: User;

  constructor(private cd: ChangeDetectorRef) {

  }
  ngOnInit(): void {
    this.cd.detectChanges();
  }

}
