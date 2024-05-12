import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Empleado } from 'src/app/interfaces/empleado.interface';
import { EmpleadosService } from 'src/app/services/empleados.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  empleadosForm: FormGroup;
  title: string = 'Nuevo'

  constructor(
    private formBuilder: FormBuilder,
    private empleadosService: EmpleadosService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    // Inicializo el formulario con todos sus campos
    this.empleadosForm = this.formBuilder.group({
      nombre: [null, []],
      apellidos: [null, []],
      telefono: [null, []],
      email: [null, []],
      salario: [null, []],
      departamento: [null, []]
    })
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: any) => {
      const id = params.idempleado
      if (id) {
        //actualizando
        //traerme los datos de un usuario por id
        this.title = 'Actualizar'
        this.empleadosService.getById(id).subscribe((data: Empleado) => {
          //aqui relleno el formulario con los datos que tiene data
          this.empleadosForm = this.formBuilder.group({
            _id: [data._id, []],
            nombre: [data.nombre, []],
            apellidos: [data.apellidos, []],
            telefono: [data.telefono, []],
            email: [data.email, []],
            salario: [data.salario, []],
            departamento: [data.departamento, []]
          })
        })
      }
    })
  }

  onSubmit() {
    if (this.empleadosForm.value._id) {
      const empleadoActualizado = this.empleadosForm.value
      this.empleadosService.update(empleadoActualizado).subscribe((response: Empleado) => {
        if (response._id) {
          // window.location.reload  ESTO PARA VOLVER Y RECARGAR LISTADO DE EMPLEADOS

          this.router.navigate(['/empleados', response._id])
        }

      })
    } else {

      const nuevoEmpleado = this.empleadosForm.value
      this.empleadosService.insert(nuevoEmpleado).subscribe((response) => {
        if (response._id) {
          //Redirijo a empleados para mostrar el nuevo empleado,
          this.router.navigate(['/empleados'])
        } else {
          alert('Usuario no se ha podido crear, intentalo de nuevo')
        }
      })

    }

  }

}

