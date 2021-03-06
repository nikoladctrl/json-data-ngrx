import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { User } from '../../model/user.model';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserListComponent {

  @Input() users: User[];
  // @Output() output = new EventEmitter<boolean>(false);


  // onCreate() {
  //   this.output.emit();
  // }

}
