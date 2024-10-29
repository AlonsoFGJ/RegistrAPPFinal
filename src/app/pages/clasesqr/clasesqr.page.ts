import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { NavController } from '@ionic/angular';
import { ApiService } from 'src/app/servicios/api.service';

@Component({
  selector: 'app-clasesqr',
  templateUrl: './clasesqr.page.html',
  styleUrls: ['./clasesqr.page.scss'],
})
export class ClasesqrPage implements OnInit {


  asignatura: any;
  nomusuario: string | null = null;

  constructor(private alertController: AlertController, private navCtrl: NavController, private apiSrv: ApiService) { }

  ngOnInit() {
    this.loadAsignatura(1);

    const rol = localStorage.getItem('Rolusuario');
    this.nomusuario = localStorage.getItem('usuario')
    if (rol !== 'docente'){
      this.navCtrl.navigateBack(['/login'])
    }
  }

  loadAsignatura(id: number) {
    this.apiSrv.getAsignaturaById(id)
      .subscribe({
        next: (response) => {
          this.asignatura = response;
          console.log('Asignatura recibida:', this.asignatura);
        },
        error: (error) => {
          console.error('Error al obtener la asignatura:', error);
        }
      });
  }
  


  btninicio(){
    this.navCtrl.navigateBack(['/docente'])
  }

  btncerrar(){
    this.navCtrl.navigateBack(['/login'])
  }

  generar(){
    this.navCtrl.navigateForward(['/qr'])
  }


}
