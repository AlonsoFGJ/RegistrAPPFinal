import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-docente',
  templateUrl: './docente.page.html',
  styleUrls: ['./docente.page.scss'],
})
export class DocentePage implements OnInit {

  nomusuario: string | null = null;

  constructor(private alertController: AlertController, private navCtrl: NavController) { }

  ngOnInit() {
    const rol = localStorage.getItem('Rolusuario');
    this.nomusuario = localStorage.getItem('usuario')
    if (rol !== 'docente'){
      this.navCtrl.navigateBack(['/login'])
    }
  }

  docentelista(){
    this.navCtrl.navigateForward(['/listacursos-doc'])
  }

  docentegenerarqr(){
    this.navCtrl.navigateForward(['/clasesqr'])
  }

  docenteinformes(){
    this.navCtrl.navigateForward(['/informes'])
  }

  cerrarsesion(){
    this.navCtrl.navigateBack(['/login'])
    localStorage.clear();
  }



}
