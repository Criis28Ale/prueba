import { login_datos } from "./login_datos";

export class login_datos_response {
    status: number;
    mensaje: string;
    values: login_datos[];
  
    constructor(status: number, mensaje: string, values: login_datos[]) {
      this.status = status;
      this.mensaje = mensaje;
      this.values = values;
    }
}