import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-generarqr',
  templateUrl: './generarqr.page.html',
  styleUrls: ['./generarqr.page.scss'],
})
export class GenerarqrPage implements OnInit {

  nomusuario: string | null = null;

  constructor(private alertController: AlertController, private navCtrl: NavController) { }

  ngOnInit() {
    const rol = localStorage.getItem('Rolusuario');
    this.nomusuario = localStorage.getItem('usuario')
    if (rol !== 'docente'){
      this.navCtrl.navigateForward(['/login'])
      
    }
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
