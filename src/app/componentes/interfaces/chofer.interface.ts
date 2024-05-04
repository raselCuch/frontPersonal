export interface IContrato {
  ContrModalidad: string;
  ContrFechInicio: Date;
  ContrFechFin: Date;
  ContrJornada: string;
  ContrSalario: number;
}

export interface IEmpleados {
  _id: string;
  EmpDni: string;
  EmpNombre: string;
  EmpApPaterno: string;
  EmpApMaterno: string;
  EmpGenero: string;
  EmpArea: string;
  EmpFechNacimiento: Date;
  EmpFechIngreso: Date;
  contrato: IContrato;
}
