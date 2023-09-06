import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { PasswordService } from '../../services/password.service'; // Asegúrate de importar el servicio


@Component({
  selector: 'app-restablecer',
  templateUrl: './restablecer.page.html',
  styleUrls: ['./restablecer.page.scss'],
})
export class RestablecerPage implements OnInit {

  mdl_usuario: string = '';
  isAlertOpen = false;
  isSuccessAlertOpen = false;
  alertButtons = ['OK'];
  successAlertButtons = ['ACEPTAR'];

  constructor(
    private router: Router,
    private passwordService: PasswordService // Inyecta 
    ) { }

  ngOnInit() {
  }

  restablecer() {
    if (this.mdl_usuario == 'ad@duoc.cl') {
      // Mostrar la alerta de éxito cuando los datos son correctos
      this.passwordService.setContrasena('54321');
      this.setSuccessOpen(true);
      console.log('Función restablecer() ejecutada');
    } else {
      this.isAlertOpen = true;
    }
  }

  setOpen(isOpen: boolean) {
    this.isAlertOpen = isOpen;
  }

  setSuccessOpen(isOpen: boolean) {
    this.isSuccessAlertOpen = isOpen;
  }

  // Manejador de eventos para el botón "Aceptar" en la alerta de éxito
  onAcceptSuccess() {
    console.log('Navegando a la página de destino');

    // Navegar a la página 'login' cuando se presiona "Aceptar"
    this.router.navigate(['login']);
  }
}