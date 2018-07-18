import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Bienvenido a Angular';
  contenido: string = "Angular con Spring 5: Mostrando los clientes";
  autor: string = "Cristian Fernando Dávila";
}
