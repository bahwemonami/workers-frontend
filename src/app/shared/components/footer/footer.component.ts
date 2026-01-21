import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <footer class="bg-workers-orange text-white border-t border-white/10">
      <div class="container mx-auto px-6 sm:px-8 lg:px-12 py-12">
        <!-- Main Content - 3 Columns -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-12 mb-8">
          
          <!-- Col 1: Logo + Description -->
          <div>
            <h3 class="text-2xl font-heading font-bold mb-4">WORKERS</h3>
            <p class="text-white/70 text-sm leading-relaxed mb-6">
              Your Business Support Service<br>
              Votre partenaire de confiance pour le staffing hôtelier.
            </p>
          </div>
          
          <!-- Col 2: Links -->
          <div class="grid grid-cols-2 gap-8">
            <div>
              <h4 class="text-sm text-white/60 font-medium uppercase tracking-wider mb-4">Services</h4>
              <ul class="space-y-3">
                <li><a routerLink="/services/front-desk" class="text-white/60 hover:text-white text-sm transition-colors">Front Desk</a></li>
                <li><a routerLink="/services/housekeeping" class="text-white/60 hover:text-white text-sm transition-colors">Housekeeping</a></li>
                <li><a routerLink="/services/catering" class="text-white/60 hover:text-white text-sm transition-colors">Catering</a></li>
                <li><a routerLink="/services" class="text-white/80 hover:text-white text-sm transition-colors font-medium">Tous →</a></li>
              </ul>
            </div>
            <div>
              <h4 class="text-sm text-white/60 font-medium uppercase tracking-wider mb-4">Entreprise</h4>
              <ul class="space-y-3">
                <li><a routerLink="/about" class="text-white/60 hover:text-white text-sm transition-colors">À propos</a></li>
                <li><a routerLink="/faq" class="text-white/60 hover:text-white text-sm transition-colors">FAQ</a></li>
                <li><a routerLink="/contact" class="text-white/60 hover:text-white text-sm transition-colors">Contact</a></li>
                <li><a routerLink="/quote" class="text-white/60 hover:text-white text-sm transition-colors">Devis</a></li>
              </ul>
            </div>
          </div>
          
          <!-- Col 3: Contact -->
          <div>
            <h4 class="text-sm text-white/60 font-medium uppercase tracking-wider mb-4">Contact</h4>
            <ul class="space-y-3 mb-6">
              <li class="flex items-start gap-3">
                <svg class="w-5 h-5 text-white/60 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                  <path stroke-linecap="round" stroke-linejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                </svg>
                <span class="text-white/60 text-sm">58 avenue Wagram<br/>75017 Paris</span>
              </li>
              <li class="flex items-center gap-3">
                <svg class="w-5 h-5 text-white/60 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                </svg>
                <a href="tel:+33180906600" class="text-white/60 hover:text-white text-sm transition-colors">01 80 906 600</a>
              </li>
              <li class="flex items-center gap-3">
                <svg class="w-5 h-5 text-white/60 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
                <a href="mailto:call@workers-paris.fr" class="text-white/60 hover:text-white text-sm transition-colors break-all">call&#64;workers-paris.fr</a>
              </li>
            </ul>
          </div>
        </div>
        
        <!-- Autres sites du groupe -->
        <div class="pt-6 border-t border-white/10 mb-6">
          <div class="flex flex-wrap items-center gap-4 text-sm">
            <span class="text-white/40">Autres sites :</span>
            <a href="http://localhost:4200" target="_blank" rel="noopener noreferrer" class="text-white/50 hover:text-white transition-colors">
              Baklawa
            </a>
            <span class="text-white/30">•</span>
            <a href="http://localhost:4202" target="_blank" rel="noopener noreferrer" class="text-white/50 hover:text-white transition-colors">
              Workers Clean
            </a>
            <span class="text-white/30">•</span>
            <a href="http://localhost:4203" target="_blank" rel="noopener noreferrer" class="text-white/50 hover:text-white transition-colors">
              Workers Security
            </a>
          </div>
        </div>
        
        <!-- Bottom -->
        <div class="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p class="text-white/50 text-sm">
            © 2026 Workers. Tous droits réservés.
          </p>
          <div class="flex items-center gap-4">
            <a routerLink="/legal/mentions" class="text-white/50 hover:text-white transition-colors text-sm">
              Mentions légales
            </a>
            <span class="text-white/30">•</span>
            <a routerLink="/legal/privacy" class="text-white/50 hover:text-white transition-colors text-sm">
              Politique de confidentialité
            </a>
          </div>
        </div>
      </div>
    </footer>
  `
})
export class FooterComponent {}
