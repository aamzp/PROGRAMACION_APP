import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { PasswordService } from '../../services/password.service'; // Asegúrate de importar el servicio


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  mdl_usuario: string = '';
  mdl_contrasena: string = '';

  isAlertOpen = false;
  alertButtons = ['OK'];

  constructor(
    private router: Router,
    private passwordService: PasswordService // Inyectar
    ) { }

  ngOnInit() {
  }

  navegar() {
  // Obtener la contraseña actualizada del servicio PasswordService
    const contrasenaActualizada = this.passwordService.getContrasena();


    if(this.mdl_usuario == 'ad@duoc.cl' && this.mdl_contrasena == contrasenaActualizada) {

      let parametros: NavigationExtras = {
        state: {
          user: this.mdl_usuario,
          pass: contrasenaActualizada
        }
      }

      this.router.navigate(['principal'], parametros);
    } else {
      this.isAlertOpen = true;
    }
  }

  setOpen(isOpen: boolean) {
    this.isAlertOpen = isOpen;
  }

}
