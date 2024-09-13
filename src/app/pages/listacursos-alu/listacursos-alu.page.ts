import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-listacursos-alu',
  templateUrl: './listacursos-alu.page.html',
  styleUrls: ['./listacursos-alu.page.scss'],
})
export class ListacursosAluPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  btninicio(){
    this.navCtrl.navigateForward(['/alumno'])
  }

  btncerrar(){
    this.navCtrl.navigateForward(['/login'])
  }

}
