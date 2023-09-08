import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ServiceService } from 'src/app/services/httpAccess/service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  user:string = "";
  pass:string = "";

  constructor(private backend: ServiceService, private router: Router, private activateRouter: ActivatedRoute) {}

  ingresar() {
    this.backend.verificarUser(this.user, this.pass).subscribe(res => {
      if (res.status == 0) {
        alert(res.mensaje);
      } else if (res.status == 1) {
        alert(res.mensaje);
        location.reload();
      }
    })
  }
}
