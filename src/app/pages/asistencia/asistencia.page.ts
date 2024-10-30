import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ApiService } from 'src/app/servicios/api.service';


@Component({
  selector: 'app-asistencia',
  templateUrl: './asistencia.page.html',
  styleUrls: ['./asistencia.page.scss'],
})
export class AsistenciaPage implements OnInit {

  alumno: any;
  nomusuario: string | null = null;

  alumnoId = 1;
  alumnoId2 = 2;
  alumnoId3 = 6;
  alumnoId4 = 4;
  alumnoId5 = 5;

  nombre1: any;
  nombre2: any;
  nombre3: any;
  nombre4: any;
  nombre5: any;

  constructor(private navCtrl: NavController,private apiSrv: ApiService) { }

  ngOnInit() {
    this.cargarAlumno1(this.alumnoId);
    this.cargarAlumno2(this.alumnoId2);
    this.cargarAlumno3(this.alumnoId3);
    this.cargarAlumno4(this.alumnoId4);
    this.cargarAlumno5(this.alumnoId5);

    const rol = localStorage.getItem('Rolusuario');
    this.nomusuario = localStorage.getItem('usuario')
    if (rol !== 'docente'){
      this.navCtrl.navigateBack(['/login'])
    }
    
  }

  cargarAlumno1(id: number) {
    this.apiSrv.getAlumno()
      .subscribe({
        next: (response) => {

          this.alumno = response.find(alumno => alumno.id === id);
          console.log('Alumno encontrado:', this.alumno);
          this.nombre1 = this.alumno.nombre
        },
        error: (error) => {
          console.error('Error al obtener el alumno:', error);
        }
      });
  }

  cargarAlumno2(id: number) {
    this.apiSrv.getAlumno()
      .subscribe({
        next: (response) => {

          this.alumno = response.find(alumno => alumno.id === id);
          console.log('Alumno encontrado:', this.alumno);
          this.nombre2 = this.alumno.nombre
        },
        error: (error) => {
          console.error('Error al obtener el alumno:', error);
        }
      });
  }

  cargarAlumno3(id: number) {
    this.apiSrv.getAlumno()
      .subscribe({
        next: (response) => {

          this.alumno = response.find(alumno => alumno.id === id);
          console.log('Alumno encontrado:', this.alumno);
          this.nombre3 = this.alumno.nombre
        },
        error: (error) => {
          console.error('Error al obtener el alumno:', error);
        }
      });
  }

  cargarAlumno4(id: number) {
    this.apiSrv.getAlumno()
      .subscribe({
        next: (response) => {

          this.alumno = response.find(alumno => alumno.id === id);
          console.log('Alumno encontrado:', this.alumno);
          this.nombre4 = this.alumno.nombre
        },
        error: (error) => {
          console.error('Error al obtener el alumno:', error);
        }
      });
  }

  cargarAlumno5(id: number) {
    this.apiSrv.getAlumno()
      .subscribe({
        next: (response) => {

          this.alumno = response.find(alumno => alumno.id === id);
          console.log('Alumno encontrado:', this.alumno);
          this.nombre5 = this.alumno.nombre
        },
        error: (error) => {
          console.error('Error al obtener el alumno:', error);
        }
      });
  }

  btninicio(){
    this.navCtrl.navigateBack(['/docente'])
  }

  btncerrar(){
    this.navCtrl.navigateBack(['/login'])
  }


}
