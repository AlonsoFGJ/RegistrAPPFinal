import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-lista-alu',
  templateUrl: './lista-alu.page.html',
  styleUrls: ['./lista-alu.page.scss'],
})
export class ListaAluPage implements OnInit {

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
