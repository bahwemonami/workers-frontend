import { Component, signal, OnInit, PLATFORM_ID, inject } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../../../core/services/api.service';

@Component({
  selector: 'app-newsletter-popup',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    @if (showPopup()) {
      <div class="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4">
        <div class="bg-white rounded-2xl max-w-md w-full overflow-hidden shadow-2xl animate-fade-in">
          <!-- Header -->
          <div class="bg-gradient-orange p-8 text-center relative">
            <button 
              (click)="close()"
              class="absolute top-4 right-4 text-white/80 hover:text-white">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div class="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 class="text-2xl font-heading text-white mb-2">RESTEZ INFORMÉ</h3>
            <p class="text-white/90">Recevez nos offres et actualités</p>
          </div>

          <!-- Content -->
          <div class="p-6">
            @if (!submitted()) {
              <form (submit)="subscribe($event)" class="space-y-4">
                <input 
                  type="email" 
                  [(ngModel)]="email" 
                  name="email"
                  placeholder="votre@email.com"
                  required
                  class="input-field"
                />
                <button type="submit" class="btn-primary w-full" [disabled]="loading()">
                  @if (loading()) {
                    Inscription...
                  } @else {
                    S'inscrire
                  }
                </button>
              </form>
              <p class="text-gray-500 text-xs text-center mt-4">
                Désinscription possible à tout moment
              </p>
            } @else {
              <div class="text-center py-4">
                <div class="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h4 class="text-xl font-bold text-dark mb-2">Merci !</h4>
                <p class="text-gray-600">Vous êtes inscrit à notre newsletter.</p>
              </div>
            }
          </div>
        </div>
      </div>
    }
  `
})
export class NewsletterPopupComponent implements OnInit {
  private platformId = inject(PLATFORM_ID);
  private apiService = inject(ApiService);
  
  showPopup = signal(false);
  submitted = signal(false);
  loading = signal(false);
  email = '';

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      const dismissed = sessionStorage.getItem('newsletter-dismissed');
      if (!dismissed) {
        setTimeout(() => this.showPopup.set(true), 30000); // 30 seconds
      }
    }
  }

  subscribe(event: Event): void {
    event.preventDefault();
    if (!this.email) return;

    this.loading.set(true);
    this.apiService.subscribeNewsletter(this.email, 'popup').subscribe({
      next: () => {
        this.submitted.set(true);
        this.loading.set(false);
        setTimeout(() => this.close(), 3000);
      },
      error: () => {
        this.loading.set(false);
      }
    });
  }

  close(): void {
    if (isPlatformBrowser(this.platformId)) {
      sessionStorage.setItem('newsletter-dismissed', 'true');
    }
    this.showPopup.set(false);
  }
}

