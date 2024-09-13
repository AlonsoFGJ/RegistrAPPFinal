import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-listacursos-doc',
  templateUrl: './listacursos-doc.page.html',
  styleUrls: ['./listacursos-doc.page.scss'],
})
export class ListacursosDocPage implements OnInit {

  constructor(private alertController: AlertController, private navCtrl: NavController) { }

  ngOnInit() {
  }

  verasistencia(){
    this.navCtrl.navigateForward(['/asistencia'])
  }

  btninicio(){
    this.navCtrl.navigateForward(['/docente'])
  }

  btncerrar(){
    this.navCtrl.navigateForward(['/login'])
  }

}
