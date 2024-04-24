import { Component, OnInit } from '@angular/core';

import Swal from 'sweetalert2';
import { User } from '../Models/user';
import { UserService } from '../Services/UserService';
import { UserFormComponent } from './user-form/user-form.component';
import { UserComponent } from './user/user.component';

@Component({
  selector: 'user-app',
  standalone: true,
  imports: [UserComponent, UserFormComponent],
  templateUrl: './user-app.component.html',
})
export class UserAppComponent implements OnInit {
  title: string = 'Listado de Usuarios!';

  users: User[] = [];

  userSelected: User;

  constructor(private service: UserService) {
    this.userSelected = new User();
  }
  ngOnInit(): void {
    this.service.findAll().subscribe((users) => (this.users = users));
  }
  addUser(user: User) {
    if (user.id > 0) {
      this.users = this.users.map(u => (u.id == user.id) ? {...user}: u);
/*       this.users = this.users.map((u) => {
        if (u.id == user.id) {
          return { ...user };
        }
        return u;
      }); */
    } else {
      this.users = [...this.users, { ...user, id: new Date().getDate() }];
    }
    Swal.fire({
      title: "Guardado!",
      text: "Usuario Guardado con exito!",
      icon: "success"
    });
    this.userSelected = new User();
  }

  removeUser(id: number): void {
    Swal.fire({
      title: "Seque quiere eliminar?",
      text: "Cuidado el usuario sera removido totalmente!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si!"
    }).then((result) => {
      if (result.isConfirmed) {
        this.users = this.users.filter((user) => user.id != id);
        Swal.fire({
          title: "eliminar!",
          text: "Usuario eliminado con exito.",
          icon: "success"
        });
      }
    });
    
  }

  setSelectedUser(userRow: User): void {
    this.userSelected = { ...userRow };
  }
}
