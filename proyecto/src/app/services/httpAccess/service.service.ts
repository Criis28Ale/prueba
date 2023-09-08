import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { login_datos_response } from 'src/app/models/login_datos_response';
import { verificar } from 'src/app/models/verificar';

const domain = "http://localhost:8888";
const httpOptions = {headers: new HttpHeaders().set('Content-Type', 'application/json')};
@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient) {}

  verificarUser(user:string, pass:string) {
    let ver = new verificar(user, pass);
    return this.http.post<login_datos_response>(domain + '/verD', ver, httpOptions);
  }
}
