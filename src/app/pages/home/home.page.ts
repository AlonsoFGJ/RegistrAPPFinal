import { Component } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { Router } from '@angular/router';

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
  private interval: any; // Store the interval ID

  constructor(private router: Router) { 
    this.simulateLoading(); 
  }

  simulateLoading() {
    this.progress = 0; // Reset progress
    this.loading = true; 
    this.showImage = false; 

    this.interval = setInterval(() => {
      this.progress += 0.1; 

      if (this.progress >= 1) {
        clearInterval(this.interval); 
        this.loading = false; 
        this.showImage = true; 

        setTimeout(() => {
          this.resetProgress();
        }, 5000); 
      }
    }, 100);
  }

  resetProgress() {
    this.progress = 0;
    this.loading = true; 
    this.showImage = false; 

    clearInterval(this.interval); // Clear previous interval
    this.simulateLoading(); 

    this.interval = setInterval(() => {
      this.progress += 0.05; 

      if (this.progress >= 1) {
        clearInterval(this.interval); 
        this.router.navigate(['/login']); 
      }
    }, 200); 
  }
}