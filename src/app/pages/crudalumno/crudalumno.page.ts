import { Component, OnInit } from '@angular/core';
//importar
import { Alumno } from 'src/app/model/Alumno';
import { CrudalumnoService } from 'src/app/servicios/crudalumno.service';
@Component({
  selector: 'app-crudalumno',
  templateUrl: './crudalumno.page.html',
  styleUrls: ['./crudalumno.page.scss'],
})
export class CrudalumnoPage implements OnInit {

  constructor(private ca:CrudalumnoService) { }

  alumno:Alumno={nombre:'',correo:'', contrasena:''}
  nuevo_alumno:Alumno={id:'',nombre:'',correo:'', contrasena:''}
  lista_alumnos:Alumno[]=[]
  sw:boolean=false


  ngOnInit() {
    this.listar()
  }

  cancelar(){
    this.sw=false
  }

  actualizar(){
    this.ca.modificar(this.nuevo_alumno).then(()=>{
      alert("modifico");
      this.sw=false;
    }).catch((err)=>{
      console.log(err)
    })
  }

  modificar(alumno:Alumno){
    this.nuevo_alumno=alumno
    this.sw=true
  }

  eliminar(id:any){
    this.ca.eliminar(id).then(()=>{
      alert("elimino")
    }).catch((err)=>{
      console.log(err)
    })
  }

  listar(){
    this.ca.listarTodo().subscribe(data=>{
      this.lista_alumnos=data
    })
  }

  grabar() {
    this.ca.grabar(this.alumno).then(()=>{
      alert("grabo")
    }).catch((err)=>{
      console.log(err);
    })
  }
}
