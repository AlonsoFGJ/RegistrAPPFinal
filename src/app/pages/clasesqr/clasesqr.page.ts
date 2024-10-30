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
  asignaturaId = 1;
  asignaturaId2 = 2;
  asignaturaId3 = 3;
  asignaturaId4 = 4;
  asignaturaId5 = 5;

  nombre1: any;
  nombre2: any;
  nombre3: any;
  nombre4: any;
  nombre5: any;

  nomusuario: string | null = null;

  constructor(private alertController: AlertController, private navCtrl: NavController, private apiSrv: ApiService) { }

  ngOnInit() {
    this.cargarAsignatura1(this.asignaturaId);
    this.cargarAsignatura2(this.asignaturaId2);
    this.cargarAsignatura3(this.asignaturaId3);
    this.cargarAsignatura4(this.asignaturaId4);
    this.cargarAsignatura5(this.asignaturaId5);

    const rol = localStorage.getItem('Rolusuario');
    this.nomusuario = localStorage.getItem('usuario')
    if (rol !== 'docente'){
      this.navCtrl.navigateBack(['/login'])
    }
  }

  cargarAsignatura1(id: number) {
    this.apiSrv.getAsignaturas()
      .subscribe({
        next: (response) => {

          this.asignatura = response.find(asignatura => asignatura.id === id);
          console.log('Asignatura encontrada:', this.asignatura);
          this.nombre1 = this.asignatura.nombre
        },
        error: (error) => {
          console.error('Error al obtener las asignaturas:', error);
        }
      });
  }

  cargarAsignatura2(id: number) {
    this.apiSrv.getAsignaturas()
      .subscribe({
        next: (response) => {

          this.asignatura = response.find(asignatura => asignatura.id === id);
          console.log('Asignatura encontrada:', this.asignatura);
          this.nombre2 = this.asignatura.nombre
        },
        error: (error) => {
          console.error('Error al obtener las asignaturas:', error);
        }
      });
  }

  cargarAsignatura3(id: number) {
    this.apiSrv.getAsignaturas()
      .subscribe({
        next: (response) => {

          this.asignatura = response.find(asignatura => asignatura.id === id);
          console.log('Asignatura encontrada:', this.asignatura);
          this.nombre3 = this.asignatura.nombre
        },
        error: (error) => {
          console.error('Error al obtener las asignaturas:', error);
        }
      });
  }

  cargarAsignatura4(id: number) {
    this.apiSrv.getAsignaturas()
      .subscribe({
        next: (response) => {

          this.asignatura = response.find(asignatura => asignatura.id === id);
          console.log('Asignatura encontrada:', this.asignatura);
          this.nombre4 = this.asignatura.nombre
        },
        error: (error) => {
          console.error('Error al obtener las asignaturas:', error);
        }
      });
  }

  cargarAsignatura5(id: number) {
    this.apiSrv.getAsignaturas()
      .subscribe({
        next: (response) => {

          this.asignatura = response.find(asignatura => asignatura.id === id);
          console.log('Asignatura encontrada:', this.asignatura);
          this.nombre5 = this.asignatura.nombre
        },
        error: (error) => {
          console.error('Error al obtener las asignaturas:', error);
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
