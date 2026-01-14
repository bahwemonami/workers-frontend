import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, ActivatedRoute } from '@angular/router';

interface ServiceDetail {
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  icon: string;
  features: string[];
  software: string[];
}

@Component({
  selector: 'app-service-detail',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    @if (service) {
      <!-- Hero -->
      <section class="pt-32 pb-16 bg-gradient-orange">
        <div class="container mx-auto px-4 text-center">
          <div class="mb-4">
            @if (service.slug === 'front-desk') {
              <svg xmlns="http://www.w3.org/2000/svg" class="h-20 w-20 text-white mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            } @else if (service.slug === 'housekeeping') {
              <svg xmlns="http://www.w3.org/2000/svg" class="h-20 w-20 text-white mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
            } @else {
              <svg xmlns="http://www.w3.org/2000/svg" class="h-20 w-20 text-white mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
              </svg>
            }
          </div>
          <h1 class="text-5xl md:text-6xl font-heading text-white mb-4">
            {{ service.title }}
          </h1>
          <p class="text-xl text-white/90 max-w-2xl mx-auto">
            {{ service.description }}
          </p>
        </div>
      </section>

      <!-- Content -->
      <section class="py-20 bg-white">
        <div class="container mx-auto px-4">
          <div class="max-w-4xl mx-auto">
            <!-- Description -->
            <div class="mb-12">
              <h2 class="text-3xl font-heading text-dark mb-6">À PROPOS</h2>
              <p class="text-lg text-gray-600 leading-relaxed">
                {{ service.longDescription }}
              </p>
            </div>

            <!-- Features -->
            <div class="mb-12">
              <h2 class="text-3xl font-heading text-dark mb-6">CE QUE NOUS PROPOSONS</h2>
              <div class="grid md:grid-cols-2 gap-4">
                @for (feature of service.features; track feature) {
                  <div class="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-workers-orange flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span class="text-gray-700">{{ feature }}</span>
                  </div>
                }
              </div>
            </div>

            <!-- Software -->
            @if (service.software.length > 0) {
              <div class="mb-12">
                <h2 class="text-3xl font-heading text-dark mb-6">LOGICIELS MAÎTRISÉS</h2>
                <div class="flex flex-wrap gap-3">
                  @for (sw of service.software; track sw) {
                    <span class="px-4 py-2 bg-workers-orange/10 text-workers-orange rounded-full font-medium">
                      {{ sw }}
                    </span>
                  }
                </div>
              </div>
            }

            <!-- CTA -->
            <div class="bg-workers-blue rounded-2xl p-8 text-center">
              <h3 class="text-2xl font-heading text-white mb-4">
                BESOIN DE PERSONNEL {{ service.title }} ?
              </h3>
              <p class="text-white/80 mb-6">
                Obtenez un devis personnalisé en quelques minutes
              </p>
              <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a routerLink="/quote" class="btn-white">
                  Demander un devis
                </a>
                <a href="tel:+33180906600" class="text-white font-bold hover:underline flex items-center gap-2" aria-label="Appeler le 01 80 906 600">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  01 80 906 600
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Other Services -->
      <section class="py-16 bg-gray-50">
        <div class="container mx-auto px-4 text-center">
          <h2 class="text-3xl font-heading text-dark mb-8">NOS AUTRES SERVICES</h2>
          <div class="flex flex-wrap justify-center gap-4">
            @for (s of otherServices; track s.slug) {
              <a [routerLink]="['/services', s.slug]" 
                 class="px-6 py-3 bg-white border-2 border-gray-200 rounded-lg hover:border-workers-orange transition-colors">
                @if (s.slug === 'front-desk') {
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 inline mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                } @else if (s.slug === 'housekeeping') {
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 inline mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                } @else {
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 inline mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                  </svg>
                }
                {{ s.title }}
              </a>
            }
          </div>
        </div>
      </section>
    }
  `
})
export class ServiceDetailComponent implements OnInit {
  private route = inject(ActivatedRoute);
  
  service: ServiceDetail | null = null;
  otherServices: ServiceDetail[] = [];

  private services: ServiceDetail[] = [
    {
      slug: 'front-desk',
      title: 'FRONT DESK',
      description: 'Réceptionnistes, night auditors, concierges qualifiés pour votre établissement.',
      longDescription: 'Notre équipe de professionnels du Front Desk maîtrise les principaux logiciels hôteliers et assure un accueil de qualité 24/7. Que vous ayez besoin de réceptionnistes pour une journée ou pour une mission longue durée, nous vous fournissons du personnel expérimenté, immédiatement opérationnel et formé aux standards de l\'hôtellerie.',
      icon: '🏨',
      features: [
        'Réceptionnistes jour/nuit',
        'Night auditors',
        'Concierges',
        'Responsables de réception',
        'Accueil multilingue',
        'Gestion des réservations',
        'Check-in / Check-out',
        'Service client premium'
      ],
      software: ['Opera Cloud', 'Opera PMS', 'Mews', 'Vega', 'Fols']
    },
    {
      slug: 'housekeeping',
      title: 'HOUSEKEEPING',
      description: 'Gouvernantes, femmes/valets de chambre, équipiers pour un service impeccable.',
      longDescription: 'Nos équipes Housekeeping assurent la propreté et le confort de vos chambres selon les standards hôteliers les plus exigeants. Du nettoyage quotidien à la remise en état complète, notre personnel qualifié garantit une qualité irréprochable pour la satisfaction de vos clients.',
      icon: '🛏️',
      features: [
        'Gouvernantes',
        'Femmes/Valets de chambre',
        'Équipiers étages',
        'Responsables housekeeping',
        'Contrôle qualité',
        'Gestion du linge',
        'Nettoyage parties communes',
        'Service turndown'
      ],
      software: []
    },
    {
      slug: 'catering',
      title: 'CATERING',
      description: 'Serveurs, barmans, maîtres d\'hôtel pour vos événements et restaurants.',
      longDescription: 'Du service en salle aux événements prestigieux, notre personnel de restauration répond à toutes vos exigences. Nos serveurs, barmans et maîtres d\'hôtel sont formés aux codes du service haut de gamme et s\'adaptent à tout type d\'événement, du petit-déjeuner au gala.',
      icon: '🍽️',
      features: [
        'Serveurs',
        'Barmans',
        'Maîtres d\'hôtel',
        'Commis de cuisine',
        'Runners',
        'Service banquet',
        'Room service',
        'Service événementiel'
      ],
      software: ['Micros', 'Bizzon']
    }
  ];

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const slug = params.get('slug');
      this.service = this.services.find(s => s.slug === slug) || null;
      this.otherServices = this.services.filter(s => s.slug !== slug);
    });
  }
}

