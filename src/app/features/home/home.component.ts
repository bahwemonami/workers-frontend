import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <!-- Hero Section -->
    <section class="min-h-screen bg-gradient-orange flex items-center justify-center relative overflow-hidden">
      <!-- Background Pattern -->
      <div class="absolute inset-0 opacity-10">
        <div class="absolute top-20 left-10 text-6xl font-heading text-white/50 rotate-12">ADAPTABILITÉ</div>
        <div class="absolute top-40 right-20 text-4xl font-heading text-white/50 -rotate-6">HOUSEKEEPING</div>
        <div class="absolute bottom-40 left-20 text-5xl font-heading text-white/50 rotate-3">RÉACTIVITÉ</div>
        <div class="absolute bottom-20 right-10 text-4xl font-heading text-white/50 -rotate-12">CONFIANCE</div>
      </div>

      <!-- Badge 24/7 - Positionné en haut à droite -->
      <div class="absolute top-8 right-8 z-20">
        <div class="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full animate-fade-in shadow-lg">
          <span class="text-white font-bold text-sm">Call 24/7</span>
        </div>
      </div>

      <div class="container mx-auto px-4 text-center relative z-10">
        <!-- Logo -->
        <h1 class="text-7xl md:text-9xl font-heading font-bold text-white mb-6 animate-fade-in text-shadow">
          WORKERS
        </h1>

        <!-- Subtitle -->
        <p class="text-xl md:text-2xl text-white/90 mb-3 animate-fade-in delay-100">
          Front desk – Housekeeping – Catering
        </p>

        <!-- Slogan -->
        <p class="text-lg md:text-xl text-white/80 mb-10 animate-fade-in delay-200">
          YOUR BUSINESS SUPPORT SERVICE
        </p>

        <!-- Phone Number -->
        <a href="tel:+33180906600" 
           class="text-4xl md:text-5xl font-heading font-bold text-white mb-3 block hover:scale-105 transition-transform animate-fade-in delay-300">
          01 80 906 600
        </a>

        <!-- Email -->
        <a href="mailto:call@workers-paris.fr" 
           class="text-white/90 text-lg md:text-xl mb-10 block hover:text-white transition-colors animate-fade-in delay-400">
          call&#64;workers-paris.fr
        </a>

        <!-- CTA Buttons -->
        <div class="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in delay-500">
          <a routerLink="/quote" class="btn-white">
            Demander un devis
          </a>
          <a routerLink="/services" class="btn-secondary border-white text-white hover:bg-white hover:text-workers-orange">
            Nos services
          </a>
        </div>
      </div>

      <!-- Scroll Indicator -->
      <div class="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce z-10">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>

    <!-- Notre Mission -->
    <section class="py-20 bg-white">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-heading text-dark mb-6">Notre Mission</h2>
          <p class="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
            Votre partenaire de confiance pour le <strong>front desk, housekeeping & catering</strong>. 
            Chez Workers, nous fournissons des solutions rapides et efficaces avec un personnel salarié qualifié, 
            assurant continuité, qualité et connaissance approfondie de vos besoins.
          </p>
        </div>

        <!-- Valeurs -->
        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-16">
          <div class="bg-gray-50 p-6 rounded-xl hover:shadow-lg transition-all border border-gray-100">
            <div class="w-12 h-12 bg-workers-orange/10 rounded-lg flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-workers-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 class="text-xl font-heading text-dark mb-2">Réactivité</h3>
            <p class="text-gray-600 text-sm leading-relaxed">Besoin planifié ou urgence de dernière minute, nous répondons rapidement à vos demandes.</p>
          </div>
          <div class="bg-gray-50 p-6 rounded-xl hover:shadow-lg transition-all border border-gray-100">
            <div class="w-12 h-12 bg-workers-orange/10 rounded-lg flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-workers-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
              </svg>
            </div>
            <h3 class="text-xl font-heading text-dark mb-2">Adaptabilité</h3>
            <p class="text-gray-600 text-sm leading-relaxed">Personnalisation de nos services pour répondre spécifiquement à vos exigences.</p>
          </div>
          <div class="bg-gray-50 p-6 rounded-xl hover:shadow-lg transition-all border border-gray-100">
            <div class="w-12 h-12 bg-workers-orange/10 rounded-lg flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-workers-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 class="text-xl font-heading text-dark mb-2">Qualité</h3>
            <p class="text-gray-600 text-sm leading-relaxed">Professionnels expérimentés et formés pour fournir un service irréprochable.</p>
          </div>
          <div class="bg-gray-50 p-6 rounded-xl hover:shadow-lg transition-all border border-gray-100">
            <div class="w-12 h-12 bg-workers-orange/10 rounded-lg flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-workers-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 class="text-xl font-heading text-dark mb-2">Collaboration</h3>
            <p class="text-gray-600 text-sm leading-relaxed">S'adapter à l'évolution de vos besoins pour vous offrir la tranquillité d'esprit.</p>
          </div>
        </div>

        <!-- Processus -->
        <div class="bg-workers-blue text-white rounded-3xl p-8 md:p-12 max-w-5xl mx-auto">
          <h3 class="text-3xl font-heading mb-8 text-center">Comment ça fonctionne</h3>
          <div class="grid md:grid-cols-3 gap-8">
            @for (step of processSteps; track step.title; let i = $index) {
              <div class="text-center">
                <div class="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  {{ i + 1 }}
                </div>
                <h4 class="text-xl font-heading mb-3">{{ step.title }}</h4>
                <p class="text-white/90 text-sm">{{ step.description }}</p>
              </div>
            }
          </div>
        </div>
      </div>
    </section>

    <!-- Workers Experience -->
    <section class="py-16 bg-gray-50">
      <div class="container mx-auto px-4 text-center">
        <h2 class="text-4xl font-heading text-dark mb-8">
          <span class="workers-logo-underline">WORKERS</span> EXPÉRIENCE
        </h2>

        <div class="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          @for (software of softwareList; track software) {
            <div class="flex items-center gap-2 bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-workers-orange flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
              <span class="font-medium text-dark text-sm">{{ software }}</span>
            </div>
          }
        </div>
      </div>
    </section>

    <!-- Emergency CTA -->
    <section class="py-16 bg-white">
      <div class="container mx-auto px-4">
        <div class="bg-gradient-orange rounded-3xl p-8 md:p-12 text-center relative overflow-hidden">
          <!-- Decorative icon -->
          <div class="absolute top-6 right-6 opacity-20">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-16 w-16 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
          </div>
          
          <h2 class="text-3xl md:text-4xl font-heading text-white mb-2">
            URGENCE
          </h2>
          <p class="text-xl text-white/90 mb-6">APPEL WORKERS 24/7</p>
          
          <a href="tel:+33180906600" 
             class="text-5xl md:text-6xl font-heading font-bold text-white block hover:scale-105 transition-transform mb-6"
             aria-label="Appeler le 01 80 906 600">
            01 80 906 600
          </a>

          <p class="text-white/80 mt-6 text-lg">
            Choisissez l'efficacité, choisissez <strong>Workers</strong><br/>
            <span class="text-white/70">Là où la qualité rencontre la réactivité.</span>
          </p>
        </div>
      </div>
    </section>

    <!-- Contact Bar -->
    <section class="bg-workers-orange py-6 border-t-4 border-white/20">
      <div class="container mx-auto px-4">
        <div class="flex flex-col md:flex-row items-center justify-between gap-6 text-white">
          <a href="mailto:call@workers-paris.fr" class="flex items-center gap-2 hover:opacity-80 transition-opacity text-sm md:text-base" aria-label="Envoyer un email à call@workers-paris.fr">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            call&#64;workers-paris.fr
          </a>
          <div class="flex items-center gap-2 text-sm md:text-base">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            58 avenue Wagram, Paris 17
          </div>
          <div class="flex items-center gap-2 text-sm md:text-base">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
            SIRET : 934 562 331 00017
          </div>
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

