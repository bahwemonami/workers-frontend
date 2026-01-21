import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ThreeHeroComponent } from '../../shared/components/three-hero/three-hero.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink, ThreeHeroComponent],
  template: `
    <!-- Hero Section -->
    <section class="min-h-screen flex items-center justify-center relative overflow-hidden pt-24 pb-20 md:pt-0 md:pb-0">
      <!-- Animation 3D Three.js en fond -->
      <app-three-hero />
      
      <!-- Overlay léger pour la lisibilité -->
      <div class="absolute inset-0 z-[1] pointer-events-none" style="background: linear-gradient(180deg, rgba(255, 107, 0, 0.3) 0%, rgba(255, 107, 0, 0.15) 50%, rgba(255, 107, 0, 0.3) 100%);"></div>
      
      <!-- Background Pattern - Hidden on mobile -->
      <div class="absolute inset-0 opacity-10 hidden md:block z-[1]">
        <div class="absolute top-20 left-10 text-7xl font-heading text-white/50 rotate-12">ADAPTABILITÉ</div>
        <div class="absolute top-40 right-20 text-5xl font-heading text-white/50 -rotate-6">HOUSEKEEPING</div>
        <div class="absolute bottom-40 left-20 text-6xl font-heading text-white/50 rotate-3">RÉACTIVITÉ</div>
        <div class="absolute bottom-20 right-10 text-5xl font-heading text-white/50 -rotate-12">CONFIANCE</div>
      </div>

      <!-- Badge 24/7 - Responsive positioning -->
      <div class="absolute top-6 right-6 md:top-10 md:right-10 z-20">
        <div class="inline-flex items-center gap-3 bg-white/20 backdrop-blur-sm px-4 py-2 md:px-5 md:py-2.5 rounded-full animate-fade-in shadow-lg">
          <span class="text-white font-bold text-sm md:text-base">Call 24/7</span>
        </div>
      </div>

      <div class="container mx-auto px-6 sm:px-8 text-center relative z-10 w-full">
        <!-- Logo -->
        <h1 class="text-6xl sm:text-7xl md:text-8xl lg:text-[10rem] font-heading font-bold text-white mb-6 md:mb-8 animate-fade-in text-shadow leading-tight">
          WORKERS
        </h1>

        <!-- Subtitle -->
        <p class="text-lg sm:text-xl md:text-2xl lg:text-3xl text-white/90 mb-3 md:mb-4 px-2 animate-fade-in delay-100">
          Front desk – Housekeeping – Catering
        </p>

        <!-- Slogan -->
        <p class="text-base sm:text-lg md:text-xl lg:text-2xl text-white/80 mb-8 md:mb-12 px-4 animate-fade-in delay-200">
          YOUR BUSINESS SUPPORT SERVICE
        </p>

        <!-- Phone Number -->
        <a href="tel:+33180906600" 
           class="text-4xl sm:text-5xl md:text-6xl font-heading font-bold text-white mb-3 md:mb-4 block hover:scale-105 transition-transform animate-fade-in delay-300 break-all">
          01 80 906 600
        </a>

        <!-- Email -->
        <a href="mailto:call@workers-paris.fr" 
           class="text-white/90 text-base sm:text-lg md:text-xl lg:text-2xl mb-8 md:mb-12 block hover:text-white transition-colors animate-fade-in delay-400 break-all px-4">
          call&#64;workers-paris.fr
        </a>

        <!-- CTA Buttons -->
        <div class="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4 sm:gap-6 px-4 animate-fade-in delay-500">
          <a routerLink="/quote" class="btn-white w-full sm:w-auto text-center py-4 px-8 text-base sm:text-lg">
            Demander un devis
          </a>
          <a routerLink="/services" class="btn-secondary border-white text-white hover:bg-white hover:text-workers-orange w-full sm:w-auto text-center py-4 px-8 text-base sm:text-lg">
            Nos services
          </a>
        </div>
      </div>

      <!-- Scroll Indicator -->
      <div class="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 animate-bounce z-10">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 md:h-10 md:w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>

    <!-- Notre Mission -->
    <section class="py-16 sm:py-20 md:py-24 bg-white">
      <div class="container mx-auto px-6 sm:px-8">
        <div class="max-w-4xl mx-auto text-center mb-12 sm:mb-16 md:mb-20">
          <h2 class="text-4xl sm:text-5xl md:text-6xl font-heading text-dark mb-6 sm:mb-8">Notre Mission</h2>
          <p class="text-lg sm:text-xl md:text-2xl text-gray-700 leading-relaxed max-w-3xl mx-auto px-2">
            Votre partenaire de confiance pour le <strong>front desk, housekeeping & catering</strong>. 
            Chez Workers, nous fournissons des solutions rapides et efficaces avec un personnel salarié qualifié, 
            assurant continuité, qualité et connaissance approfondie de vos besoins.
          </p>
        </div>

        <!-- Valeurs -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 max-w-6xl mx-auto mb-12 sm:mb-16 md:mb-20">
          <div class="bg-gray-50 p-6 sm:p-8 rounded-xl hover:shadow-lg transition-all border border-gray-100">
            <div class="w-14 h-14 sm:w-16 sm:h-16 bg-workers-orange/10 rounded-lg flex items-center justify-center mb-4 sm:mb-5">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 sm:h-8 sm:w-8 text-workers-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 class="text-xl sm:text-2xl font-heading text-dark mb-3">Réactivité</h3>
            <p class="text-gray-600 text-sm sm:text-base leading-relaxed">Besoin planifié ou urgence de dernière minute, nous répondons rapidement à vos demandes.</p>
          </div>
          <div class="bg-gray-50 p-6 sm:p-8 rounded-xl hover:shadow-lg transition-all border border-gray-100">
            <div class="w-14 h-14 sm:w-16 sm:h-16 bg-workers-orange/10 rounded-lg flex items-center justify-center mb-4 sm:mb-5">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 sm:h-8 sm:w-8 text-workers-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
              </svg>
            </div>
            <h3 class="text-xl sm:text-2xl font-heading text-dark mb-3">Adaptabilité</h3>
            <p class="text-gray-600 text-sm sm:text-base leading-relaxed">Personnalisation de nos services pour répondre spécifiquement à vos exigences.</p>
          </div>
          <div class="bg-gray-50 p-6 sm:p-8 rounded-xl hover:shadow-lg transition-all border border-gray-100">
            <div class="w-14 h-14 sm:w-16 sm:h-16 bg-workers-orange/10 rounded-lg flex items-center justify-center mb-4 sm:mb-5">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 sm:h-8 sm:w-8 text-workers-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 class="text-xl sm:text-2xl font-heading text-dark mb-3">Qualité</h3>
            <p class="text-gray-600 text-sm sm:text-base leading-relaxed">Professionnels expérimentés et formés pour fournir un service irréprochable.</p>
          </div>
          <div class="bg-gray-50 p-6 sm:p-8 rounded-xl hover:shadow-lg transition-all border border-gray-100">
            <div class="w-14 h-14 sm:w-16 sm:h-16 bg-workers-orange/10 rounded-lg flex items-center justify-center mb-4 sm:mb-5">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 sm:h-8 sm:w-8 text-workers-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 class="text-xl sm:text-2xl font-heading text-dark mb-3">Collaboration</h3>
            <p class="text-gray-600 text-sm sm:text-base leading-relaxed">S'adapter à l'évolution de vos besoins pour vous offrir la tranquillité d'esprit.</p>
          </div>
        </div>

        <!-- Processus -->
        <div class="bg-workers-blue text-white rounded-2xl sm:rounded-3xl p-8 sm:p-10 md:p-14 max-w-5xl mx-auto">
          <h3 class="text-3xl sm:text-4xl font-heading mb-8 sm:mb-10 text-center px-2">Comment ça fonctionne</h3>
          <div class="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-10">
            @for (step of processSteps; track step.title; let i = $index) {
              <div class="text-center">
                <div class="w-16 h-16 sm:w-20 sm:h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-5 text-2xl sm:text-3xl font-bold">
                  {{ i + 1 }}
                </div>
                <h4 class="text-xl sm:text-2xl font-heading mb-3 sm:mb-4">{{ step.title }}</h4>
                <p class="text-white/90 text-sm sm:text-base px-2">{{ step.description }}</p>
              </div>
            }
          </div>
        </div>
      </div>
    </section>

    <!-- Workers Experience -->
    <section class="py-16 sm:py-20 bg-gray-50">
      <div class="container mx-auto px-6 sm:px-8 text-center">
        <h2 class="text-3xl sm:text-4xl md:text-5xl font-heading text-dark mb-8 sm:mb-10 px-2">
          <span class="workers-logo-underline">WORKERS</span> EXPÉRIENCE
        </h2>

        <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6 max-w-4xl mx-auto">
          @for (software of softwareList; track software) {
            <div class="flex items-center gap-2 sm:gap-3 bg-white p-4 sm:p-5 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 sm:h-6 sm:w-6 text-workers-orange flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
              <span class="font-medium text-dark text-sm sm:text-base truncate">{{ software }}</span>
            </div>
          }
        </div>
      </div>
    </section>
  `
})
export class HomeComponent {
  softwareList = [
    'OPERA CLOUD',
    'OPERA PMS',
    'VEGA',
    'HOTSOFT',
    'MEWS',
    'FOLS',
    'BIZZON',
    'MICROS'
  ];

  processSteps = [
    {
      title: 'Contactez-nous',
      description: 'Appelez-nous 24/7 ou remplissez notre formulaire de contact.'
    },
    {
      title: 'Analyse',
      description: 'Votre conseiller dédié analyse votre demande et identifie l\'expert le plus qualifié.'
    },
    {
      title: 'Solution',
      description: 'Nous développons la solution idéale, de l\'urgence à la planification sur-mesure.'
    }
  ];
}

