import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserAppComponent } from './components/UserAppComponent';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, UserAppComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'Listado De Usuarios!';
}
