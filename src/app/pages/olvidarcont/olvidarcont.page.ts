import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { NavController } from '@ionic/angular';
import { AuthService } from 'src/app/servicios/auth.service';

@Component({
  selector: 'app-olvidarcont',
  templateUrl: './olvidarcont.page.html',
  styleUrls: ['./olvidarcont.page.scss'],
})
export class OlvidarcontPage implements OnInit {

  constructor(private alertController: AlertController, private navCtrl: NavController,private authService: AuthService) { }

  correoConf:string=""


  ngOnInit() {
  }

  async enviarCorreocon(){
    try {
      const correo:string = this.correoConf;
      await this.authService.restContra(correo);
      this.presentAlertConf();
    } catch (error) {
      this.presentAlert();
    }
  }



  volver(){
    this.navCtrl.navigateBack(['/login'])
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Correo Incorrecto',
      message: 'Por favor, intente nuevamente',
      buttons: ['OK'],
    });
    await alert.present();
  }

  async presentAlertConf() {
    const alert = await this.alertController.create({
      header: 'Correo Enviado',
      message: 'Continue con las instrucciones entregadas a su correo',
      buttons: ['OK'],
    });
    await alert.present();
    this.navCtrl.navigateForward(['/login']);
  }

}
