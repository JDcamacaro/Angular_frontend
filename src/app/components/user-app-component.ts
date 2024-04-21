import { Component, OnInit } from '@angular/core';
import { User } from '../Models/user';
import { UserService } from '../Services/UserService';


@Component({
  selector: 'user-app',
  standalone: true,
  imports: [],
  templateUrl: './user-app.component.html',
})
export class UserAppComponent implements OnInit {
  title: string = 'Listado de Usuarios!';

  users: User[] = [];

  constructor(private service: UserService) {
  }
  ngOnInit(): void {
    this.service.findAll().subscribe( users => this.users = users);

  }
}
