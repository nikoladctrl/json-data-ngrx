import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from '../../model/user.model';

@Component({
  selector: 'app-user-new',
  templateUrl: './user-new.component.html',
  styleUrls: ['./user-new.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserNewComponent implements OnInit {

  @Output() create = new EventEmitter<User>(null);
  
  constructor() { }
  
  createForm: FormGroup;

  ngOnInit(): void {
    this.createForm = this.initializeForm();
  }

  private initializeForm() {
    return new FormGroup({
      name: new FormControl('', [Validators.required]),
      username: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      phone: new FormControl('', [Validators.required]),
      website: new FormControl()      
    });
  }

  onSubmit() {
    this.create.emit(this.createForm.value);
  }

}
