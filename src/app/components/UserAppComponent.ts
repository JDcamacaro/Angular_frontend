import { Component, OnInit } from '@angular/core';
import { UserService } from '../Services/UserService';
import { User } from './../Models/user';


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
    this.service.findAll().subscribe( users => this.users = this.users);

  }
}
