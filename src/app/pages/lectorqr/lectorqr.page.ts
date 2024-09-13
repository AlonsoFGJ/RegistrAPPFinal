import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-lectorqr',
  templateUrl: './lectorqr.page.html',
  styleUrls: ['./lectorqr.page.scss'],
})
export class LectorqrPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  volver(){
    this.navCtrl.navigateForward(['/alumno'])
  }

  pasarqr(){
    this.navCtrl.navigateForward(['/ticket'])
  }

}
