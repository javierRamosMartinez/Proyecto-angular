import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Empleado } from 'src/app/interfaces/empleado.interface';
import { EmpleadosService } from 'src/app/services/empleados.service';

@Component({
  selector: 'app-empleado-view',
  templateUrl: './empleado-view.component.html',
  styleUrls: ['./empleado-view.component.css']
})
export class EmpleadoViewComponent {

  empleado!: Empleado

  constructor(
    private activatedRoute: ActivatedRoute,
    private empleadosService: EmpleadosService,
    private router: Router
  ) { }

  ngOnInit() {
    //Tenemos que capturar el id de la ruta
    this.activatedRoute.params.subscribe((params: any) => {
      const id = params.idempleado
      //teniendo el id ya solo tengo que consultar al servicio mediante el metodo getById
      this.empleadosService.getById(id).subscribe((data) => {
        this.empleado = data
      })
    })
  }

  onDelete(id: string | undefined) {
    if (id) {
      this.empleadosService.delete(id).subscribe((response: Empleado) => {
        if (response._id) {
          alert('Empleado borrado correctamente')
          this.router.navigate(['/empleados'])
        } else {
          alert('El empleado no ha podido borrarse')
        }
      })
    }
  }
}
