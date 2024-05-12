import { Component, Input } from '@angular/core';
import { Empleado } from 'src/app/interfaces/empleado.interface';

@Component({
  selector: 'app-empleado-card',
  templateUrl: './empleado-card.component.html',
  styleUrls: ['./empleado-card.component.css']
})
export class EmpleadoCardComponent {
  // la excalamacion sirve para no tener que inicializar cada campo del input como seria nombre apellidos... etc
  @Input() empleadito!: Empleado
}
