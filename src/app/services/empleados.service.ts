import { Empleado } from 'src/app/interfaces/empleado.interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmpleadosService {

  baseUrl: string = 'https://crm-empleados.onrender.com/api/empleados'
  constructor(private httpClient: HttpClient) { }

  /* crear los diferentes metodos (C R U D) de la base de datos  (create, read, update, delete) */

  getAll(): Observable<Empleado[]> {
    return this.httpClient.get<Empleado[]>(this.baseUrl)
  }

  getById(id: string): Observable<Empleado> {
    return this.httpClient.get<Empleado>(`${this.baseUrl}/${id}`)
  }

  /* Insert inserta un elemento dentro de la base de datos*/

  insert(nuevoEmpleado: Empleado): Observable<Empleado> {
    return this.httpClient.post<Empleado>(this.baseUrl, nuevoEmpleado)
  }

  delete(id: string): Observable<Empleado> {
    return this.httpClient.delete<Empleado>(`${this.baseUrl}/${id}`)
  }

  update(empleadoActualizado: Empleado): Observable<Empleado> {
    return this.httpClient.put<Empleado>(`${this.baseUrl}/${empleadoActualizado._id}`, empleadoActualizado)
  }

}
