import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <footer class="bg-workers-orange text-white pt-12 sm:pt-16 pb-6 sm:pb-8">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <!-- Main Footer Content -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-8 sm:mb-12">
          <!-- Logo & Description -->
          <div class="sm:col-span-2 lg:col-span-1">
            <h3 class="text-2xl sm:text-3xl font-heading font-bold mb-3 sm:mb-4 workers-logo-underline">WORKERS</h3>
            <p class="text-white/90 mb-3 sm:mb-4 text-sm sm:text-base">Your Business Support Service</p>
            <p class="text-white/80 text-xs sm:text-sm leading-relaxed">
              Votre partenaire de confiance pour le staffing hôtelier. Disponible 24/7.
            </p>
          </div>

          <!-- Services -->
          <div>
            <h4 class="font-bold text-base sm:text-lg mb-3 sm:mb-4">Nos Services</h4>
            <ul class="space-y-1.5 sm:space-y-2">
              <li>
                <a routerLink="/services/front-desk" class="text-white/80 hover:text-white transition-colors text-sm sm:text-base">
                  Front Desk
                </a>
              </li>
              <li>
                <a routerLink="/services/housekeeping" class="text-white/80 hover:text-white transition-colors text-sm sm:text-base">
                  Housekeeping
                </a>
              </li>
              <li>
                <a routerLink="/services/catering" class="text-white/80 hover:text-white transition-colors text-sm sm:text-base">
                  Catering
                </a>
              </li>
            </ul>
          </div>

          <!-- Links -->
          <div>
            <h4 class="font-bold text-base sm:text-lg mb-3 sm:mb-4">Entreprise</h4>
            <ul class="space-y-1.5 sm:space-y-2">
              <li>
                <a routerLink="/about" class="text-white/80 hover:text-white transition-colors text-sm sm:text-base">
                  À propos
                </a>
              </li>
              <li>
                <a routerLink="/faq" class="text-white/80 hover:text-white transition-colors text-sm sm:text-base">
                  FAQ
                </a>
              </li>
              <li>
                <a routerLink="/contact" class="text-white/80 hover:text-white transition-colors text-sm sm:text-base">
                  Contact
                </a>
              </li>
              <li>
                <a routerLink="/quote" class="text-white/80 hover:text-white transition-colors text-sm sm:text-base">
                  Demander un devis
                </a>
              </li>
            </ul>
          </div>

          <!-- Contact -->
          <div class="sm:col-span-2 lg:col-span-1">
            <h4 class="font-bold text-base sm:text-lg mb-3 sm:mb-4">Contact 24/7</h4>
            <ul class="space-y-2 sm:space-y-3">
              <li class="flex items-start gap-2 sm:gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 sm:h-5 sm:w-5 text-white/80 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="tel:+33180906600" class="text-white hover:underline font-bold text-sm sm:text-base break-all" aria-label="Appeler le 01 80 906 600">
                  01 80 906 600
                </a>
              </li>
              <li class="flex items-start gap-2 sm:gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 sm:h-5 sm:w-5 text-white/80 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:call@workers-paris.fr" class="text-white/80 hover:text-white transition-colors text-xs sm:text-sm break-all" aria-label="Envoyer un email à call@workers-paris.fr">
                  call&#64;workers-paris.fr
                </a>
              </li>
              <li class="flex items-start gap-2 sm:gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 sm:h-5 sm:w-5 text-white/80 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span class="text-white/80 text-xs sm:text-sm">
                  58 avenue Wagram<br/>75017 Paris
                </span>
              </li>
              <li class="flex items-start gap-2 sm:gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 sm:h-5 sm:w-5 text-white/80 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
                <span class="text-white/80 text-xs sm:text-sm break-all">
                  SIRET: 934 562 331 00017
                </span>
              </li>
            </ul>
          </div>
        </div>

        <!-- Bottom Bar -->
        <div class="border-t border-white/20 pt-6 sm:pt-8 flex flex-col sm:flex-row items-center justify-center sm:justify-between gap-3 sm:gap-4 text-center sm:text-left">
          <p class="text-white/70 text-xs sm:text-sm">
            © 2026 Workers. Tous droits réservés.
          </p>
          <div class="flex items-center gap-4 sm:gap-6 flex-wrap justify-center">
            <a routerLink="/legal/mentions" class="text-white/70 hover:text-white text-xs sm:text-sm transition-colors">
              Mentions légales
            </a>
            <a routerLink="/legal/privacy" class="text-white/70 hover:text-white text-xs sm:text-sm transition-colors">
              Politique de confidentialité
            </a>
          </div>
        </div>
      </div>
    </footer>
    
    <!-- Extra padding for mobile bottom bar -->
    <div class="lg:hidden h-20"></div>
  `
})
export class FooterComponent {}

