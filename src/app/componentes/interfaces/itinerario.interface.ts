// En itinerario.interface.ts
export interface IDetalleItinerario {
  _id: string;
  // idItinerario: number;
  idAsiento: number;
  dni: string;
  nombres: string;
}

export interface IItinerario {
  _id: string;
  idBus: string;
  fechaViaje: Date;
  idChofer: string;
  detalle: IDetalleItinerario[];
}
