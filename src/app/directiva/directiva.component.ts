import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directiva',
  templateUrl: './directiva.component.html',
  styleUrls: ['./directiva.component.css']
})
export class DirectivaComponent{

  listaCurso: string[] = ['TypeScript', 'JavaScript', 'Java', 'C#', 'PHP'];
  habilitar: boolean = true;
  textoBoton: string = "Ocultar";

  constructor() { }

  setHabilitar(): void {
    this.habilitar = (this.habilitar==true)? false: true;
    this.textoBoton = (this.habilitar==true)? 'Ocultar': 'Mostrar';
  }

}
