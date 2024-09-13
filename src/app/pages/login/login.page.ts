import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private alertController: AlertController, private navCtrl: NavController) { }

  nombre:string=""
  contrasenia:string=""


  ngOnInit() {
  }

  validarlogin(){
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
  }
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
