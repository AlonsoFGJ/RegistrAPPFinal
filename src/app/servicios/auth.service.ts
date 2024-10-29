// src/app/services/auth.service.ts
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { NavController } from '@ionic/angular';

interface Alumno {
  nombre: string; 

}

interface Docente {
  nombre: string; 

}


@Injectable({
  providedIn: 'root'
})


export class AuthService {

    

  constructor(private afAuth: AngularFireAuth, private firestore: AngularFirestore, private navCtrl: NavController) {}


  

  // Método para el inicio de sesión con correo y contraseña
  async login(email: string, password: string): Promise<any> {
    try {
      const result = await this.afAuth.signInWithEmailAndPassword(email, password);

      // Obtiene el UID del usuario
      const uid = result.user?.uid;
      if (!uid) throw new Error('Usuario no autenticado');

      // Verifica en qué colección se encuentra el usuario
      const role = await this.getUserRole(uid);
      const datoAlum = await this.obtDataAlumno(uid);
      const datoDoce = await this.obtDataDocente(uid);
      

      if (role =='alumno') {
        localStorage.setItem('Rolusuario', role)
        if (datoAlum) { 
          localStorage.setItem('usuario', datoAlum);
        } else {
          console.warn('Nombre de alumno no encontrado');
        }
        this.navCtrl.navigateForward(['/alumno'])
      } else if (role =='docente'){
        localStorage.setItem('Rolusuario', role)
        if (datoDoce) { 
          localStorage.setItem('usuario', datoDoce);
        } else {
          console.warn('Nombre de alumno no encontrado');
        }
        this.navCtrl.navigateForward(['/docente'])
      }
      
      
      return { user: result.user, role: role };
      

    } catch (error) {
      throw error;
    }
  }

  async getUserRole(uid: string): Promise<string | null> {
    try {
      console.log('UID:', uid);
      
      const alumnoDoc = await this.firestore.collection('alumno').doc(uid).get().toPromise();
      const alumnoExists = alumnoDoc && alumnoDoc.exists;
      console.log('¿Es alumno?', alumnoExists);
  
      if (alumnoExists) {
        return 'alumno'; // Si el id esta en alumno, devuelve alumno
      }
  
      const docenteDoc = await this.firestore.collection('docente').doc(uid).get().toPromise();
      const docenteExists = docenteDoc && docenteDoc.exists;
      console.log('¿Es docente?', docenteExists); 
  
      if (docenteExists) {
        return 'docente'; // Si el id esta en ddocente, devuelve docente
      }
      return null;

    } catch (error) {
      console.error('Error al obtener el rol del usuario:', error);
      return null;
    }
  }

  async obtDataAlumno(uid: string): Promise<string | null> {
    const alumnoDoc = await this.firestore.collection('alumno').doc(uid).get().toPromise();
    
    //(POR SI ACASO) Verifica si los datos existen y busca el nombre en relacion a la interfaz 
    const data = (alumnoDoc && alumnoDoc.exists) ? alumnoDoc.data() as Alumno : null;
    
    // Devuelve null si el nombre no existe
    return data ? data.nombre || null : null;
  }

  async obtDataDocente(uid: string): Promise<string | null> {
    const docenteDoc = await this.firestore.collection('docente').doc(uid).get().toPromise();
    
    // Lo mismo de arriba
    const data = (docenteDoc && docenteDoc.exists) ? docenteDoc.data() as Docente : null;
    

    return data ? data.nombre || null : null;
  }
  

  getAuthState() {
    return this.afAuth.authState;
  }
}
