import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-generarqr',
  templateUrl: './generarqr.page.html',
  styleUrls: ['./generarqr.page.scss'],
})
export class GenerarqrPage implements OnInit {

  constructor(private alertController: AlertController, private navCtrl: NavController) { }

  ngOnInit() {
  }

  btninicio(){
    this.navCtrl.navigateForward(['/docente'])
  }

  btncerrar(){
    this.navCtrl.navigateForward(['/login'])
  }

  generar(){
    this.navCtrl.navigateForward(['/qr'])
  }


}
