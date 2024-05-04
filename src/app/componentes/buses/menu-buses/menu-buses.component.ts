import { Component } from '@angular/core';
import { IBus } from '../../interfaces/bus.interface';

@Component({
  selector: 'app-menu-buses',
  templateUrl: './menu-buses.component.html',
  styleUrls: ['./menu-buses.component.css'],
})
export class MenuBusesComponent {
  arrayBuses: IBus[] = [
    {
      _id: '1',
      placa: 'ABC123',
      marca: 'Toyota',
      modelo: 'Corolla',
      asientos: [
        { idAsiento: 1, correlativo: 101 },
        { idAsiento: 2, correlativo: 102 },
      ],
    },
    {
      _id: '2',
      placa: 'XYZ789',
      marca: 'Honda',
      modelo: 'Civic',
      asientos: [
        { idAsiento: 1, correlativo: 201 },
        { idAsiento: 2, correlativo: 202 },
      ],
    },
    {
      _id: '3',
      placa: 'DEF456',
      marca: 'Ford',
      modelo: 'Mustang',
      asientos: [
        { idAsiento: 1, correlativo: 301 },
        { idAsiento: 2, correlativo: 302 },
      ],
    },
    {
      _id: '4',
      placa: 'GHI789',
      marca: 'Chevrolet',
      modelo: 'Camaro',
      asientos: [
        { idAsiento: 1, correlativo: 401 },
        { idAsiento: 2, correlativo: 402 },
      ],
    },
  ];
}
