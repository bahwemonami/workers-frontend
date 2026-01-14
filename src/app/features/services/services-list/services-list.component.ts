import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-services-list',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <!-- Hero -->
    <section class="pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 bg-gradient-orange">
      <div class="container mx-auto px-4 sm:px-6 text-center">
        <h1 class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading text-white mb-3 sm:mb-4 px-2">
          NOS SERVICES
        </h1>
        <p class="text-base sm:text-lg md:text-xl text-white/90 px-2">
          Front Desk – Housekeeping – Catering
        </p>
      </div>
    </section>

    <!-- Services Grid -->
    <section class="py-12 sm:py-16 md:py-20 bg-white">
      <div class="container mx-auto px-4 sm:px-6">
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          @for (service of services; track service.slug) {
            <a [routerLink]="['/services', service.slug]" 
               class="group bg-white border-2 border-gray-100 rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 card-hover hover:border-workers-orange transition-all">
              <div class="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-workers-orange/10 rounded-xl flex items-center justify-center mb-4 sm:mb-6 group-hover:bg-workers-orange group-hover:rotate-6 transition-all">
                @if (service.slug === 'front-desk') {
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 text-workers-orange group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                } @else if (service.slug === 'housekeeping') {
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 text-workers-orange group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                } @else {
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 text-workers-orange group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                  </svg>
                }
              </div>
              
              <h3 class="text-xl sm:text-2xl font-heading text-dark mb-3 sm:mb-4 group-hover:text-workers-orange transition-colors">
                {{ service.title }}
              </h3>
              
              <p class="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6">
                {{ service.description }}
              </p>

              <!-- Features -->
              <ul class="space-y-2 mb-6">
                @for (feature of service.features.slice(0, 4); track feature) {
                  <li class="flex items-center gap-2 text-sm text-gray-600">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-workers-orange flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                    </svg>
                    {{ feature }}
                  </li>
                }
              </ul>

              <!-- Software -->
              @if (service.software && service.software.length > 0) {
                <div class="pt-4 border-t border-gray-100">
                  <p class="text-xs text-gray-500 mb-2">Logiciels maîtrisés:</p>
                  <div class="flex flex-wrap gap-2">
                    @for (sw of service.software; track sw) {
                      <span class="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded">{{ sw }}</span>
                    }
                  </div>
                </div>
              }

              <div class="mt-6 flex items-center gap-2 text-workers-orange font-medium group-hover:gap-4 transition-all">
                En savoir plus
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </a>
          }
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="py-12 sm:py-16 bg-workers-blue">
      <div class="container mx-auto px-4 sm:px-6 text-center">
        <h2 class="text-2xl sm:text-3xl font-heading text-white mb-3 sm:mb-4 px-2">
          BESOIN D'UN SERVICE SUR-MESURE ?
        </h2>
        <p class="text-sm sm:text-base text-white/80 mb-6 sm:mb-8 px-2">
          Contactez-nous pour discuter de vos besoins spécifiques
        </p>
        <div class="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 px-4">
          <a routerLink="/quote" class="btn-white w-full sm:w-auto text-center py-3 px-6 text-sm sm:text-base">
            Demander un devis
          </a>
          <a href="tel:+33180906600" class="btn-secondary border-white text-white hover:bg-white hover:text-workers-blue flex items-center justify-center gap-2 w-full sm:w-auto py-3 px-6 text-sm sm:text-base" aria-label="Appeler le 01 80 906 600">
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
export class ServicesListComponent {
  services = [
    {
      slug: 'front-desk',
      title: 'FRONT DESK',
      description: 'Réceptionnistes, night auditors, concierges qualifiés pour votre établissement.',
      icon: '🏨',
      features: [
        'Réceptionnistes jour/nuit',
        'Night auditors',
        'Concierges',
        'Responsables de réception',
        'Accueil multilingue'
      ],
      software: ['Opera Cloud', 'Opera PMS', 'Mews', 'Vega', 'Fols']
    },
    {
      slug: 'housekeeping',
      title: 'HOUSEKEEPING',
      description: 'Gouvernantes, femmes/valets de chambre, équipiers pour un service impeccable.',
      icon: '🛏️',
      features: [
        'Gouvernantes',
        'Femmes/Valets de chambre',
        'Équipiers étages',
        'Responsables housekeeping',
        'Contrôle qualité'
      ],
      software: []
    },
    {
      slug: 'catering',
      title: 'CATERING',
      description: 'Serveurs, barmans, maîtres d\'hôtel pour vos événements et restaurants.',
      icon: '🍽️',
      features: [
        'Serveurs',
        'Barmans',
        'Maîtres d\'hôtel',
        'Commis de cuisine',
        'Runners'
      ],
      software: ['Micros', 'Bizzon']
    }
  ];
}

