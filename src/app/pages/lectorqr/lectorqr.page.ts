import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-lectorqr',
  templateUrl: './lectorqr.page.html',
  styleUrls: ['./lectorqr.page.scss'],
})
export class LectorqrPage implements OnInit {

  nomusuario: string | null = null; 

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
    const rol = localStorage.getItem('Rolusuario');
    this.nomusuario = localStorage.getItem('usuario')
    if (rol !== 'alumno'){
      this.navCtrl.navigateForward(['/login'])
      
    }
    
  }

  volver(){
    this.navCtrl.navigateForward(['/alumno'])
  }

  pasarqr(){
    this.navCtrl.navigateForward(['/ticket'])
  }

}
