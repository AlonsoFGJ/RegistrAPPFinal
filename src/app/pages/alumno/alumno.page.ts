import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-alumno',
  templateUrl: './alumno.page.html',
  styleUrls: ['./alumno.page.scss'],
})



export class AlumnoPage implements OnInit {
  nomusuario: string | null = null; //el | null = null es para que en caso de que un valor sea nulo se pase a la consola como undefined

  constructor(private alertController: AlertController, private navCtrl: NavController) { }

  


  alumnolistar(){
    this.navCtrl.navigateForward(['/listacursos-alu'])
  }
  alumnoescanear(){
    this.navCtrl.navigateForward(['/lectorqr'])
  }

  cerrarsesion(){
    this.navCtrl.navigateBack(['/login'])
    localStorage.clear();
  }

  ngOnInit() {
    const rol = localStorage.getItem('Rolusuario');
    this.nomusuario = localStorage.getItem('usuario')
    if (rol !== 'alumno'){
      this.navCtrl.navigateBack(['/login'])
      
    }
    
  }

}
