import { User } from './../Models/user';
import { Injectable } from '@angular/core';
import { User } from '../Models/user';
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  

  private user: User[] = [{
    id: 1,
    name: 'jesus',
    lastname: 'camacaro',
    email: 'jesus.camacaro@mail.com',
    username: 'jesus',
    password: '12345'
  },
  {
    id: 1,
    name: 'david',
    lastname: 'camacaro',
    email: 'david.camacaro@mail.com',
    username: 'david',
    password: '12345'
  }];
  constructor() { }

  findAll(): Observable<User[]>{
    return of(this.user);
  }

}
