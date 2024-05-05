import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IEmpleado } from '../interfaces/empleado.interface';

@Injectable({
  providedIn: 'root',
})
export class EmpleadoService {
  url = 'http://localhost:4000/api/empleados/';

  constructor(private http: HttpClient) {}

  getEmpleados(): Observable<any> {
    return this.http.get(this.url);
  }

  eliminarEmpleado(id: string): Observable<any> {
    return this.http.delete(this.url + id);
  }

  guardarEmpleado(empleado: IEmpleado): Observable<any> {
    return this.http.post(this.url, empleado);
  }

  getEmpleadoById(id: number): Observable<IEmpleado> {
    return this.http.get<IEmpleado>(this.url + id);
  }

  editarEmpleado(id: string, empleado: IEmpleado): Observable<IEmpleado> {
    return this.http.put<IEmpleado>(this.url + id, empleado);
  }
}
