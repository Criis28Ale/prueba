import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ServiceService } from 'src/app/services/httpAccess/service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  tipo:string = "";

  user:string = "";
  pass:string = "";

  usere:string = "";
  passe:string = "";

  constructor(private backend: ServiceService, private router: Router, private activateRouter: ActivatedRoute) {} 

  ingresar() {
    this.backend.verificarUser(this.user, this.pass).subscribe(res => {
      console.log(res)
      if (res.rowsAffected[0] == 0) {
        alert('Usuario o Contraseña incorrecta');
      } else if (res.rowsAffected[0] == 1) {
        alert('Entraste');
        this.router.navigate(["/principal"]);
      }
    })
  }

  ingresarE() {
    this.backend.verificarUserE(this.usere, this.passe).subscribe(res => {
      console.log(res)
      if (res.rowsAffected[0] == 0) {
        alert('Usuario o Contraseña incorrecta');
      } else if (res.rowsAffected[0] == 1) {
        alert('Entraste E');
        this.router.navigate(["/principal"]);
      }
    })
  }
}
