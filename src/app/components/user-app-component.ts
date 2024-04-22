import { Component, OnInit } from '@angular/core';

import { UserService } from '../Services/UserService';
import { UserComponent } from './user/user.component';
import { UserFormComponent } from './user-form/user-form.component';
import { User } from '../Models/user';


@Component({
  selector: 'user-app',
  standalone: true,
  imports: [UserComponent,UserFormComponent],
  templateUrl: './user-app.component.html',
})
export class UserAppComponent implements OnInit {
  title: string = 'Listado de Usuarios!';

  users: User[] = [];

  userSelected : User;


  constructor(private service: UserService) {
    this.userSelected= new User();
  }
  ngOnInit(): void {
    this.service.findAll().subscribe( users => this.users = users);
  }
  addUser(user:User){
this.users=[... this.users, { ... user,id: new Date().getDate()} ];
}

  removeUser(id: number): void {
    this.users = this.users.filter(user =>user.id != id );

  }

  setSelectedUser(userRow: User): void{
    this.userSelected = {...userRow};
  }

}
