// password.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PasswordService {
  private mdlContrasena: string = '123'
  

  setContrasena(contrasena: string) {
    // Asegúrate de que estás recibiendo la nueva contraseña correctamente
    console.log('contraseña:', contrasena);
    this.mdlContrasena = contrasena;
    console.log('Cambiar contraseña a:', contrasena);
  }

  getContrasena() {
    return this.mdlContrasena;
  }
}