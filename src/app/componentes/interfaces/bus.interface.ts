export interface IAsiento {
  idAsiento: number;
  correlativo: number;
}

export interface IBus {
  _id: string;
  placa: string;
  marca: string;
  modelo: string;
  asientos: IAsiento[];
}
