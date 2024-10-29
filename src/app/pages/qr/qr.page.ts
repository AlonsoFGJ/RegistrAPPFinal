import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-qr',
  templateUrl: './qr.page.html',
  styleUrls: ['./qr.page.scss'],
})
export class QrPage implements OnInit {

  public progress = 0;

  constructor(private navCtrl: NavController) {
    setInterval(() => {
      this.progress += 0.01;

      // Reset the progress bar when it reaches 100%
      // to continuously show the demo
      if (this.progress > 1) {
        setTimeout(() => {
          this.progress = 0;
        }, 60000);
      }
    }, 60000);
  }




  ngOnInit() {
    setTimeout(()=>{
      this.navCtrl.navigateForward(['/lista'])
    },10000)

   
  }
  valorQR:string=''
  valorQRJSON={
    codigoCurso:'0001',
    codigoProfe:'001'
  }
}
