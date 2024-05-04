import { Component } from '@angular/core';
import { IChofer } from '../../interfaces/chofer.interface';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-menu-choferes',
  templateUrl: './menu-choferes.component.html',
  styleUrls: ['./menu-choferes.component.css'],
})
export class MenuChoferesComponent {
  arrayChoferes: IChofer[] = [
    {
      _id: '1',
      dni: '12345678',
      nombre: 'Juan Pérez',
      fechaIngreso: new Date('2022-01-15'),
    },
    {
      _id: '2',
      dni: '87654321',
      nombre: 'María Rodríguez',
      fechaIngreso: new Date('2022-03-20'),
    },
    {
      _id: '3',
      dni: '56789012',
      nombre: 'Carlos Gómez',
      fechaIngreso: new Date('2022-05-10'),
    },
    {
      _id: '4',
      dni: '34567890',
      nombre: 'Luisa Fernández',
      fechaIngreso: new Date('2022-07-18'),
    },
    // Agrega más choferes según sea necesario
  ];
}
