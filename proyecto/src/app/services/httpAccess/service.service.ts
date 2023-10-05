import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { login_datos_response } from 'src/app/models/login_datos_response';
import { nuevo_usuarioD } from 'src/app/models/nuevo_usuarioD';
import { nuevo_usuarioE } from 'src/app/models/nuevo_usuarioE';
import { perfil_e } from 'src/app/models/perfil_e';
import { perfil_e_response } from 'src/app/models/perfil_e_response';
import { verificar } from 'src/app/models/verificar';
import { verificarE } from 'src/app/models/verificarE';
import { verificarE_response } from 'src/app/models/verificarE_response';
import { verfiicar_response } from 'src/app/models/verificar_response';

const domain = "http://localhost:3000";
const httpOptions = {headers: new HttpHeaders().set('Content-Type', 'application/json')};
@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient) {}

  insertUser(noms:string, apes:string, dpi:string, date:string, tel:string, correo:string, pass:string) {
    let nuser = new nuevo_usuarioD(noms, apes, dpi, date, tel, correo, pass);
    return this.http.post<login_datos_response>(domain + '/datos', nuser, httpOptions);
  }

  insertUserE(nom_e:string, encar:string, dpi:string, correo:string, pass:string, tel:string) {
    let user = new nuevo_usuarioE(nom_e, encar, dpi, correo, pass, tel);
    return this.http.post<perfil_e_response>(domain + '/perfil_e', user, httpOptions);
  }

  verificarUser(correo:string, pass: string) {
    let user = new verificar(correo, pass);
    return this.http.post<verfiicar_response>(domain + '/Ob_datos', user, httpOptions);
  }

  verificarUserE(correo:string, pass:string) {
    let user = new verificarE(correo, pass);
    return this.http.post<verificarE_response>(domain + '/Ob_datosE', user, httpOptions);
  }
}
