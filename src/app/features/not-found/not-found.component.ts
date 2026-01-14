import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <section class="min-h-screen bg-gradient-orange flex items-center justify-center pt-20 pb-16">
      <div class="container mx-auto px-4 sm:px-6 text-center">
        <h1 class="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-heading text-white mb-3 sm:mb-4">404</h1>
        <h2 class="text-2xl sm:text-3xl font-heading text-white mb-4 sm:mb-6 px-2">PAGE NON TROUVÉE</h2>
        <p class="text-white/80 text-sm sm:text-base md:text-lg mb-6 sm:mb-8 max-w-md mx-auto px-2">
          La page que vous recherchez n'existe pas ou a été déplacée.
        </p>
        <div class="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 px-4">
          <a routerLink="/" class="btn-white w-full sm:w-auto text-center py-3 px-6 text-sm sm:text-base">
            Retour à l'accueil
          </a>
          <a href="tel:+33180906600" class="text-white font-bold hover:underline flex items-center justify-center gap-2 w-full sm:w-auto py-3 px-6 text-sm sm:text-base" aria-label="Appeler le 01 80 906 600">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            01 80 906 600
          </a>
        </div>
      </div>
    </section>
  `
})
export class NotFoundComponent {}

