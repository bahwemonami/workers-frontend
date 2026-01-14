import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <!-- Hero -->
    <section class="pt-32 pb-16 bg-gradient-orange">
      <div class="container mx-auto px-4 text-center">
        <h1 class="text-5xl md:text-6xl font-heading text-white mb-4">
          VOTRE PARTENAIRE HÔTELIER
        </h1>
        <p class="text-xl text-white/90">
          Workers, spécialiste du staffing hôtelier depuis notre création
        </p>
      </div>
    </section>

    <!-- Mission -->
    <section class="py-20 bg-white">
      <div class="container mx-auto px-4">
        <div class="max-w-3xl mx-auto text-center">
          <h2 class="text-4xl font-heading text-dark mb-6">NOTRE MISSION</h2>
          <p class="text-lg text-gray-600 leading-relaxed">
            Fournir aux hôtels et établissements d'accueil du personnel qualifié, formé et immédiatement opérationnel. 
            Nous comprenons les exigences du secteur hôtelier et nous nous engageons à vous accompagner avec réactivité et professionnalisme.
          </p>
        </div>
      </div>
    </section>

    <!-- Values -->
    <section class="py-20 bg-gray-50">
      <div class="container mx-auto px-4">
        <h2 class="text-4xl font-heading text-dark text-center mb-12">NOS VALEURS</h2>
        
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div class="bg-white p-8 rounded-2xl shadow-sm card-hover border border-gray-100">
            <div class="w-12 h-12 bg-workers-orange/10 rounded-xl flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-workers-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 class="text-xl font-heading text-dark mb-3">RÉACTIVITÉ</h3>
            <p class="text-gray-600">Disponibilité 24/7 pour répondre à vos besoins, même en urgence.</p>
          </div>
          <div class="bg-white p-8 rounded-2xl shadow-sm card-hover border border-gray-100">
            <div class="w-12 h-12 bg-workers-orange/10 rounded-xl flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-workers-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 class="text-xl font-heading text-dark mb-3">QUALITÉ</h3>
            <p class="text-gray-600">Personnel rigoureusement sélectionné et formé aux standards hôteliers.</p>
          </div>
          <div class="bg-white p-8 rounded-2xl shadow-sm card-hover border border-gray-100">
            <div class="w-12 h-12 bg-workers-orange/10 rounded-xl flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-workers-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 class="text-xl font-heading text-dark mb-3">FIABILITÉ</h3>
            <p class="text-gray-600">Engagement tenu à chaque mission, sans exception.</p>
          </div>
          <div class="bg-white p-8 rounded-2xl shadow-sm card-hover border border-gray-100">
            <div class="w-12 h-12 bg-workers-orange/10 rounded-xl flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-workers-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
              </svg>
            </div>
            <h3 class="text-xl font-heading text-dark mb-3">ADAPTABILITÉ</h3>
            <p class="text-gray-600">Solutions sur-mesure adaptées à vos exigences spécifiques.</p>
          </div>
          <div class="bg-white p-8 rounded-2xl shadow-sm card-hover border border-gray-100">
            <div class="w-12 h-12 bg-workers-orange/10 rounded-xl flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-workers-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 class="text-xl font-heading text-dark mb-3">CONFIANCE</h3>
            <p class="text-gray-600">Partenariat durable basé sur la transparence et le professionnalisme.</p>
          </div>
          <div class="bg-white p-8 rounded-2xl shadow-sm card-hover border border-gray-100">
            <div class="w-12 h-12 bg-workers-orange/10 rounded-xl flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-workers-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <h3 class="text-xl font-heading text-dark mb-3">EXPERTISE</h3>
            <p class="text-gray-600">Connaissance approfondie du secteur hôtelier et de ses logiciels.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Why Us -->
    <section class="py-20 bg-workers-blue text-white">
      <div class="container mx-auto px-4">
        <h2 class="text-4xl font-heading text-center mb-12">POURQUOI NOUS CHOISIR</h2>
        
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          @for (item of whyUs; track item) {
            <div class="flex items-start gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-workers-orange flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
              <span class="text-white/90">{{ item }}</span>
            </div>
          }
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="py-20 bg-white">
      <div class="container mx-auto px-4 text-center">
        <h2 class="text-4xl font-heading text-dark mb-6">
          PRÊT À RENFORCER VOS ÉQUIPES ?
        </h2>
        <p class="text-gray-600 mb-8 max-w-2xl mx-auto">
          Contactez-nous dès maintenant pour discuter de vos besoins en personnel hôtelier.
        </p>
        <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a routerLink="/quote" class="btn-primary">
            Demander un devis gratuit
          </a>
          <a href="tel:+33180906600" class="btn-secondary flex items-center gap-2" aria-label="Appeler le 01 80 906 600">
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
export class AboutComponent {

  whyUs = [
    'Personnel salarié Workers (pas d\'intérim classique)',
    'Maîtrise des logiciels hôteliers (Opera, Mews, etc.)',
    'Intervention en urgence 24/7',
    'Couverture Île-de-France complète',
    'Devis gratuit sous 2h',
    'Suivi qualité permanent'
  ];
}

