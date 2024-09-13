import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.page.html',
  styleUrls: ['./ticket.page.scss'],
})
export class TicketPage implements OnInit {

  isChecked = false;

  toggleCheck(event: any) {
    this.isChecked = event.detail.checked;
  }

  constructor(private navCtrl:NavController) { }

  ngOnInit() {
    setTimeout(()=>{
      this.navCtrl.navigateForward(['/lista-alu'])
    },5000)
  }

}
