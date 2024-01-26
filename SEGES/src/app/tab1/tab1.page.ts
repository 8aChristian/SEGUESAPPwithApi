import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  usuarios: any[] = [];
  posiciones: string[] = ["A1", "A2", "A3", "B1", "B2", "B3"];

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.apiService.getUsers().subscribe((usuarios) => {
      this.usuarios = usuarios;
      console.log(this.usuarios);
    });
  }

  getUsuarioByPosicion(posicion: string) {
    return this.usuarios.find((usuario) => usuario.posicion === posicion) || { estado: false };
  }

  getEstadoStyle(posicion: string) {
    const usuario = this.getUsuarioByPosicion(posicion);
    return {
      'background-color': usuario.estado ? '#00ff00' : '#ff0000',
    };
  }
}
