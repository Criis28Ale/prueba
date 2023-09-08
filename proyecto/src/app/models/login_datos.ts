export class login_datos {
    nombres:string;
	apellidos:string;
	dpi:string;
	fecha:string
	telefono:string;
	correo:string;
	passwaord:string;

    constructor(nombres:string, apellidos:string, dpi:string, fecha:string, telefono:string, correo:string, passwaord:string){
        this.nombres = nombres;
        this.apellidos = apellidos;
        this.dpi = dpi;
        this.fecha = fecha;
        this.telefono = telefono;
        this.correo = correo;
        this.passwaord = passwaord;
    }
}