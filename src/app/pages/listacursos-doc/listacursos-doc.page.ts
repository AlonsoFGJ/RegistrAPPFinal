import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-listacursos-doc',
  templateUrl: './listacursos-doc.page.html',
  styleUrls: ['./listacursos-doc.page.scss'],
})
export class ListacursosDocPage implements OnInit {

  nomusuario: string | null = null;

  constructor(private alertController: AlertController, private navCtrl: NavController) { }

  ngOnInit() {
    const rol = localStorage.getItem('Rolusuario');
    this.nomusuario = localStorage.getItem('usuario')
    if (rol !== 'docente'){
      this.navCtrl.navigateBack(['/login'])
      
    }
  }

  verasistencia(){
    this.navCtrl.navigateForward(['/asistencia'])
  }

  btninicio(){
    this.navCtrl.navigateBack(['/docente'])
  }

  btncerrar(){
    this.navCtrl.navigateBack(['/login'])
  }

}
