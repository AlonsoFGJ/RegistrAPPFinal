import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-recupcontra',
  templateUrl: './recupcontra.page.html',
  styleUrls: ['./recupcontra.page.scss'],
})
export class RecupcontraPage implements OnInit {

  constructor(private navCrtl: NavController, private alertController: AlertController) { }

  campo1:string=""
  campo2:string=""

  ngOnInit() {
  }

  confirmarcontra() {
    if (this.campo1==this.campo2) {
      this.navCrtl.navigateForward(['/login'])
    }else{
      console.log("Campos incorrectos")
      this.presentAlert()
    }
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Error al cambiar contraseña',
      message: 'Ambos campos deben coincidir',
      buttons: ['OK'],
    });

    await alert.present();
  }


}
