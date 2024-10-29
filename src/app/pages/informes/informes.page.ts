import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-informes',
  templateUrl: './informes.page.html',
  styleUrls: ['./informes.page.scss'],
})
export class InformesPage implements OnInit {

  nomusuario: string | null = null;

  constructor(private navCtrl: NavController) { }

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

}
