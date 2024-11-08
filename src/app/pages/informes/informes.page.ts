import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ApiService } from 'src/app/servicios/api.service';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-informes',
  templateUrl: './informes.page.html',
  styleUrls: ['./informes.page.scss'],
})
export class InformesPage implements OnInit {

  alumno: any;
  asignatura: any;

  asignaturaId = 1;
  asignaturaId2 = 2;
  asignaturaId3 = 3;
  asignaturaId4 = 4;
  asignaturaId5 = 5;

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

  nombre1a: any;
  nombre2a: any;
  nombre3a: any;
  nombre4a: any;
  nombre5a: any;

  nomusuario: string | null = null;

  constructor(private navCtrl: NavController, private apiSrv: ApiService) { }

  ngOnInit() {
    this.cargarAsignatura1(this.asignaturaId);
    this.cargarAsignatura2(this.asignaturaId2);
    this.cargarAsignatura3(this.asignaturaId3);
    this.cargarAsignatura4(this.asignaturaId4);
    this.cargarAsignatura5(this.asignaturaId5);

    this.cargarAlumno1(this.alumnoId);
    this.cargarAlumno2(this.alumnoId2);
    this.cargarAlumno3(this.alumnoId3);
    this.cargarAlumno4(this.alumnoId4);
    this.cargarAlumno5(this.alumnoId5);


    const rol = localStorage.getItem('Rolusuario');
    this.nomusuario = localStorage.getItem('usuario')
    if (rol !== 'docente'){
      this.navCtrl.navigateForward(['/login'])
      
    }
  }

  cargarAlumno1(id: number) {
    this.apiSrv.getAlumno()
      .subscribe({
        next: (response) => {

          this.alumno = response.find(alumno => alumno.id === id);
          console.log('Alumno encontrado:', this.alumno);
          this.nombre1a = this.alumno.nombre
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
          this.nombre2a = this.alumno.nombre
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
          this.nombre3a = this.alumno.nombre
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
          this.nombre4a = this.alumno.nombre
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
          this.nombre5a = this.alumno.nombre
        },
        error: (error) => {
          console.error('Error al obtener el alumno:', error);
        }
      });
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

  descargarPDF() {
    // Selecciona el elemento HTML que quieres convertir en PDF
    const elemento = document.getElementById('informe');

    if (elemento) {
      // Usa html2canvas para capturar el contenido del elemento como imagen
      html2canvas(elemento).then((canvas) => {
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF('p', 'mm', 'a4');
        
        // Agregar la imagen al PDF
        const imgWidth = 210; // A4 width en mm
        // const imgHeight = (canvas.height * imgWidth) / canvas.width;
        const imgHeight = 430;
        const position = 0;

        pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
        pdf.save('informe.pdf'); // Guarda el PDF con el nombre "informe.pdf"
      });
    }
  }

}
