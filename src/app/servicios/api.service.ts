import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiUrl = 'http://127.0.0.1:8000/api/asignatura/';
  private apiUrlA = 'http://127.0.0.1:8000/api/alumno/';
  private apiUrlAs = 'http://127.0.0.1:8000/api/asistencia/';

  constructor(private http: HttpClient) { }

  getAsignaturas(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  getAlumno(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrlA);
  }

  getAsistencia(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrlAs);
  }

  /*getAsistenciaLista(id: number): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrlAs);
  }*/

  /*actualizarAsistencia(alumnoId: number, asignaturaId: number, incrementoPorcentaje: number) {
    const body = {
      alumno_id: alumnoId,
      asignatura_id: asignaturaId,
      incremento_porcentaje: incrementoPorcentaje,
    };

    return this.http.post(this.apiUrl, body);
  }*/
}