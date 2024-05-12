import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  baseUrl = 'https://crm-empleados.onrender.com/api/usuarios/login'

  constructor(private httpClient: HttpClient) { }

  login(user: any): Observable<any> {
    return this.httpClient.post<any>(this.baseUrl, user)
  }
}
