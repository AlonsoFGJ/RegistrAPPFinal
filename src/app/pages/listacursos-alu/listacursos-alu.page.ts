import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-listacursos-alu',
  templateUrl: './listacursos-alu.page.html',
  styleUrls: ['./listacursos-alu.page.scss'],
})
export class ListacursosAluPage implements OnInit {

  nomusuario: string | null = null; 

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
    const rol = localStorage.getItem('Rolusuario');
    this.nomusuario = localStorage.getItem('usuario')
    if (rol !== 'alumno'){
      this.navCtrl.navigateBack(['/login'])
      
    }
    
  }

  btninicio(){
    this.navCtrl.navigateBack(['/alumno'])
  }

  btncerrar(){
    this.navCtrl.navigateBack(['/login'])
  }

}
