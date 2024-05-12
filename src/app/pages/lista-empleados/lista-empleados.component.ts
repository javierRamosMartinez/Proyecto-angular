import { Component } from '@angular/core';
import { Empleado } from 'src/app/interfaces/empleado.interface';
import { EmpleadosService } from 'src/app/services/empleados.service';

@Component({
  selector: 'app-lista-empleados',
  templateUrl: './lista-empleados.component.html',
  styleUrls: ['./lista-empleados.component.css']
})
export class ListaEmpleadosComponent {

  /* para poder usar el servicio de empleados tengo que inyectarlo, para inyectarlo tengo que añadirlo como parametro dentro del mentodo constructor */
  arrEmpleados: Empleado[] = []
  constructor(private empleadosServices: EmpleadosService) { }

  ngOnInit() {
    //llamar al servicio y me voy a traer los datos del este
    this.empleadosServices.getAll().subscribe((data) => {
      this.arrEmpleados = data;
    })
  }
}