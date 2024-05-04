import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IItinerario } from '../../interfaces/itinerario.interface';

@Component({
  selector: 'app-menu-itinerario',
  templateUrl: './menu-itinerario.component.html',
  styleUrls: ['./menu-itinerario.component.css']
})
export class MenuItinerarioComponent {
  formItinerario!: FormGroup;
  builder = inject(FormBuilder);

  constructor() {
    this.formItinerario = this.builder.group({
      fecha: ['', [Validators.required]],
    });
  }
  validaFecha() {
    return (
      this.formItinerario.get('fecha')?.valid ||
      this.formItinerario.get('fecha')?.pristine
    );
  }

  ngOnInit(): void {
    console.log(this.formItinerario);
  }
  ejecutar() {}

  limpiar() {}

  arrayItinerarios: IItinerario[] = [
    {
      _id: '1',
      idBus: '1',
      fechaViaje: new Date('2023-01-15'),
      idChofer: '1',
      detalle: [
        { _id: '101', idAsiento: 101, dni: '12345678', nombres: 'Juan Pérez' },
        { _id: '102', idAsiento: 102, dni: '87654321', nombres: 'María Rodríguez' },
        // Agrega más detalles según sea necesario
      ],
    },
    {
      _id: '2',
      idBus: '2',
      fechaViaje: new Date('2023-02-20'),
      idChofer: '2',
      detalle: [
        { _id: '201', idAsiento: 201, dni: '98765432', nombres: 'Carlos González' },
        { _id: '202', idAsiento: 202, dni: '54321678', nombres: 'Ana López' },
        // Agrega más detalles según sea necesario
      ],
    },
    {
      _id: '3',
      idBus: '3',
      fechaViaje: new Date('2023-03-25'),
      idChofer: '3',
      detalle: [
        { _id: '301', idAsiento: 301, dni: '34567890', nombres: 'Luisa Martínez' },
        { _id: '302', idAsiento: 302, dni: '09876543', nombres: 'Pedro Ramírez' },
        // Agrega más detalles según sea necesario
      ],
    },
    {
      _id: '4',
      idBus: '4',
      fechaViaje: new Date('2023-04-30'),
      idChofer: '4',
      detalle: [
        { _id: '401', idAsiento: 401, dni: '23456789', nombres: 'Sofía Fernández' },
        { _id: '402', idAsiento: 402, dni: '56789012', nombres: 'Javier Castillo' },
        // Agrega más detalles según sea necesario
      ],
    },
  ];
}
