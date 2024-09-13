import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-olvidarcont',
  templateUrl: './olvidarcont.page.html',
  styleUrls: ['./olvidarcont.page.scss'],
})
export class OlvidarcontPage implements OnInit {

  constructor(private alertController: AlertController, private navCtrl: NavController) { }

  codigo:string=""


  ngOnInit() {
  }

  validarcodigo(){
    if (this.codigo=="123") {
      console.log("Codigo aceptado")
      this.navCtrl.navigateForward(['/recupcontra'])      
    }else{
      console.log("Codigo incorrecto")
      this.presentAlert()
    }
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Codigo Incorrecto',
      message: 'Por favor, intente nuevamente',
      buttons: ['OK'],
    });

    await alert.present();
  }

}
