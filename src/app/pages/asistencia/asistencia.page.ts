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
  asistencia: any;
  nomusuario: string | null = null;

  alumnoId = 1;
  alumnoId2 = 2;
  alumnoId4 = 4;


  nombre1: any;
  nombre2: any;
  nombre4: any;


  porc1: any;
  porc2: any;
  porc4: any;




  

  constructor(private navCtrl: NavController,private apiSrv: ApiService) { }

  ngOnInit() {
    this.cargarAlumno1(this.alumnoId);
    this.cargarAsistencias(this.alumnoId);
    this.cargarAlumno2(this.alumnoId2);
    this.cargarAsistencias2(this.alumnoId2);
    this.cargarAlumno4(this.alumnoId4);
    this.cargarAsistencias4(this.alumnoId4);

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


  cargarAsistencias(id: number) { 
    this.apiSrv.getAsistencia()
      .subscribe({
        next: (response) => {          
          this.asistencia = response.find(asistencia => asistencia.alumno === id);

          if (this.asistencia) {
            console.log('Asistencia encontrada:', this.asistencia);
            this.porc1 = this.asistencia.porcentaje

          } else {
            console.warn(`No se encontró asistencia para la asignatura con ID: ${id}`);
          }
        },
        error: (error) => {
          console.error('Error al obtener asignatura:', error);
        }
      });
  }

  cargarAsistencias2(id: number) { 
    this.apiSrv.getAsistencia()
      .subscribe({
        next: (response) => {
          
          this.asistencia = response.find(asistencia => asistencia.alumno === id);

          if (this.asistencia) {
            console.log('Asistencia encontrada:', this.asistencia);
            this.porc2 = this.asistencia.porcentaje

          } else {
            console.warn(`No se encontró asistencia para la asignatura con ID: ${id}`);
          }
        },
        error: (error) => {
          console.error('Error al obtener asignatura:', error);
        }
      });
  }

  cargarAsistencias4(id: number) { 
    this.apiSrv.getAsistencia()
      .subscribe({
        next: (response) => {
          
          this.asistencia = response.find(asistencia => asistencia.alumno === id);

          if (this.asistencia) {
            console.log('Asistencia encontrada:', this.asistencia);
            this.porc4 = this.asistencia.porcentaje

          } else {
            console.warn(`No se encontró asistencia para la asignatura con ID: ${id}`);
          }
        },
        error: (error) => {
          console.error('Error al obtener asignatura:', error);
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
