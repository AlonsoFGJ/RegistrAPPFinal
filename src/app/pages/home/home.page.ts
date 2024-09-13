import { Component } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { Router } from '@angular/router'; // Importar Router

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  animations: [
    trigger('fadeIn', [
      state('void', style({ opacity: 0 })),
      transition('void <=> *', [
        animate(5000) 
      ])
    ])
  ]
})
export class HomePage {
  loading = true; 
  showImage = false;
  progress = 0; 

  constructor(private router: Router) { 
    this.simulateLoading(); 
  }

  simulateLoading() {
    const interval = setInterval(() => {
      this.progress += 0.1; 

      if (this.progress >= 1) {
        clearInterval(interval); 
        this.loading = false; 
        this.showImage = true; 

        
        setTimeout(() => {
          this.resetProgress();
        }, 5000); 
      }
    }, 100); // Aumenta el progreso cada 100 ms
  }

  resetProgress() {
    this.progress = 0;  
    this.loading = true; 
    this.simulateLoading(); 

    
    const interval = setInterval(() => {
      this.progress += 0.05; // Aumenta el progreso

      if (this.progress >= 1) {
        clearInterval(interval); 
        this.router.navigate(['/login']); //Esta linea es para cambiar a la nueva página
      }
    }, 200); 
  }
}
