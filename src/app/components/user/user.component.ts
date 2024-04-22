import { Component, EventEmitter, Input, Output} from '@angular/core';
import { User } from '../../Models/user';

@Component({
  selector: 'user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
})
export class UserComponent {

  @Input() users: User[] = [];

  @Output() idUserEventEmitter = new EventEmitter();

  @Output() selectdUserEventEmitter = new EventEmitter();

  onRemoveUser(id:number): void{

    const confirmRemove = confirm ('Esta seguro que desea eliminar');
    if (confirmRemove) {
      this.idUserEventEmitter.emit(id);
    }
  }

  onSelectedUser(user: User ): void{
    this.selectdUserEventEmitter.emit(user);

  }
}
