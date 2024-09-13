import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-docente',
  templateUrl: './docente.page.html',
  styleUrls: ['./docente.page.scss'],
})
export class DocentePage implements OnInit {

  constructor(private alertController: AlertController, private navCtrl: NavController) { }

  ngOnInit() {
  }

  docentelista(){
    this.navCtrl.navigateForward(['/listacursos-doc'])
  }

  docentegenerarqr(){
    this.navCtrl.navigateForward(['/generarqr'])
  }

  docenteinformes(){
    this.navCtrl.navigateForward(['/informes'])
  }

  cerrarsesion(){
    this.navCtrl.navigateForward(['/login'])
  }

}
