import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { NavController } from '@ionic/angular';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AuthService } from 'src/app/servicios/auth.service';






@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {


  constructor(private alertController: AlertController,
     private navCtrl: NavController, private afAuth: AngularFireAuth, private authService: AuthService) { }

  correo:string=""
  contrasena:string=""



  ngOnInit() {
    localStorage.clear();
  }

  async login() {
    try {
      const user = await this.authService.login(this.correo, this.contrasena);
      console.log('Usuario autenticado:', user);
      this.correo='';
      this.contrasena='';
    } catch (error) {
      console.error('Error al iniciar sesión:', error);
      this.presentAlert();
    }
  }



  /*validarlogin(){
    if (this.nombre=="ryan" && this.contrasenia=="drive") {
      console.log("Bienvenido")
      localStorage.setItem("usuario",this.nombre)
      this.navCtrl.navigateForward(['/alumno'])
    } else if (this.nombre=="tony" && this.contrasenia=="yayo"){
      console.log("Bienvenido")
      localStorage.setItem("usuario",this.nombre)
      this.navCtrl.navigateForward(['/docente'])
    } else {
      console.log("Usuario/Password incorrecto")
      this.presentAlert()
    }
  }*/

  
  olvidar_contra(){
    this.navCtrl.navigateForward(['/olvidarcont'])
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Login fallido',      
      message: 'Usuario o contraseña incorrecto.',
      buttons: ['Action'],
    });

    await alert.present();
  }
}

