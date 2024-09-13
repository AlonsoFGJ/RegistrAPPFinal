import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-confirmarasis',
  templateUrl: './confirmarasis.page.html',
  styleUrls: ['./confirmarasis.page.scss'],
})
export class ConfirmarasisPage implements OnInit {

  constructor(private toastController: ToastController, private navCtrl: NavController) { }

  async buttonClicked() {
    this.navCtrl.navigateForward(['/ticket'])
    const toast = await this.toastController.create({
      message: 'Cargando',
      duration: 50,
      
    });
    toast.present();
  }

  ngOnInit() {
  }

}

