import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ServiceService } from 'src/app/services/httpAccess/service.service';

@Component({
  selector: 'app-create-l',
  templateUrl: './create-l.component.html',
  styleUrls: ['./create-l.component.css']
})
export class CreateLComponent {
  
  tipo:string = "";

  nom:string = "";
  apes:string = "";
  dpi:string = "";
  date:string = "";
  tel:string = "";
  correo:string = "";
  password:string = "";
  

  enom:string = "";
  nome:string = "";
  dpi_e:string = "";
  correo_e:string = "";
  password_e:string = "";
  tel_e:string = "";

  constructor(private backend: ServiceService, private router: Router, private activateRouter: ActivatedRoute) {} 

  insertar() {
    this.backend.insertUser(this.nom, this.apes, this.dpi, this.date, this.tel, this.correo, this.password).subscribe(res => {
      if (res.rowsAffected[0] == 1) {
        alert(res.output);
        this.router.navigate(["/menu"]);
      }
    })
  }

  insertarE() {
    this.backend.insertUserE(this.enom, this.nome, this.dpi_e, this.correo_e, this.password_e, this.tel_e).subscribe(res => {
      console.log(res);
      if(res.rowsAffected[0] == 1) {
        alert("Se guardo el perfil");
        this.router.navigate(["/menu"]);
      }
    })
  }
}
