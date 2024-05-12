import { UsuariosService } from './../../services/usuarios.service';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup

  constructor(
    private formBuilder: FormBuilder,
    private usuariosService: UsuariosService,
    private router: Router
  ) {
    this.loginForm = this.formBuilder.group({
      email: [null, []],
      password: [null, []]
    })
  }

  onSubmit() {
    this.usuariosService.login(this.loginForm.value).subscribe((response: any) => {
      if (response.success) {
        //logrado correctamente, guardamos en localstorage el token
        localStorage.setItem('token', response.token)
        this.router.navigate(['/empleados'])
        // window.location.href = '/empleados'
      } else {
        alert('Usuario erroneo')
      }
    })

  }
}
