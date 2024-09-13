import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-alumno',
  templateUrl: './alumno.page.html',
  styleUrls: ['./alumno.page.scss'],
})
export class AlumnoPage implements OnInit {

  constructor(private alertController: AlertController, private navCtrl: NavController) { }
  alumnolistar(){
    this.navCtrl.navigateForward(['/listacursos-alu'])
  }
  alumnoescanear(){
    this.navCtrl.navigateForward(['/lectorqr'])
  }

  cerrarsesion(){
    this.navCtrl.navigateForward(['/login'])
  }

  ngOnInit() {
  }

}
