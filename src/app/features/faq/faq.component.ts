import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

interface FAQ {
  question: string;
  answer: string;
  isOpen?: boolean;
}

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <!-- Hero -->
    <section class="pt-32 pb-16 bg-gradient-orange">
      <div class="container mx-auto px-4 text-center">
        <h1 class="text-5xl md:text-6xl font-heading text-white mb-4">
          QUESTIONS FRÉQUENTES
        </h1>
        <p class="text-xl text-white/90">
          Toutes les réponses à vos questions
        </p>
      </div>
    </section>

    <!-- FAQ Content -->
    <section class="py-20 bg-white">
      <div class="container mx-auto px-4">
        <div class="max-w-3xl mx-auto">
          <!-- Category Tabs -->
          <div class="flex flex-wrap gap-2 mb-12 justify-center">
            @for (cat of categories; track cat.key) {
              <button 
                (click)="activeCategory.set(cat.key)"
                class="px-6 py-2 rounded-full font-medium transition-all"
                [class.bg-workers-orange]="activeCategory() === cat.key"
                [class.text-white]="activeCategory() === cat.key"
                [class.bg-gray-100]="activeCategory() !== cat.key"
                [class.text-gray-700]="activeCategory() !== cat.key">
                {{ cat.label }}
              </button>
            }
          </div>

          <!-- FAQs -->
          <div class="space-y-4">
            @for (faq of filteredFAQs(); track faq.question) {
              <div class="border border-gray-200 rounded-xl overflow-hidden">
                <button 
                  (click)="toggleFAQ(faq)"
                  class="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors">
                  <span class="font-medium text-dark pr-4">{{ faq.question }}</span>
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    class="h-5 w-5 text-workers-orange transition-transform"
                    [class.rotate-180]="faq.isOpen"
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                @if (faq.isOpen) {
                  <div class="px-6 pb-6 text-gray-600 leading-relaxed border-t border-gray-100 pt-4">
                    {{ faq.answer }}
                  </div>
                }
              </div>
            }
          </div>
        </div>

        <!-- CTA -->
        <div class="max-w-3xl mx-auto mt-16 text-center bg-workers-blue rounded-2xl p-8">
          <h2 class="text-2xl font-heading text-white mb-4">
            VOUS AVEZ D'AUTRES QUESTIONS ?
          </h2>
          <p class="text-white/80 mb-6">
            Notre équipe est disponible 24/7 pour vous répondre
          </p>
          <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a routerLink="/contact" class="btn-white">
              Nous contacter
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
    </section>
  `
})
export class FaqComponent {
  activeCategory = signal('services');

  categories = [
    { key: 'services', label: 'Services' },
    { key: 'tarifs', label: 'Tarifs & Devis' },
    { key: 'collaboration', label: 'Collaboration' }
  ];

  faqs: { [key: string]: FAQ[] } = {
    services: [
      {
        question: 'Quels types d\'établissements servez-vous ?',
        answer: 'Nous intervenons dans tous types d\'établissements hôteliers : hôtels de luxe, hôtels indépendants, résidences hôtelières, auberges de jeunesse, mais aussi pour des événements ponctuels.',
        isOpen: false
      },
      {
        question: 'Intervenez-vous en urgence ?',
        answer: 'Oui ! Notre disponibilité 24/7 nous permet de répondre aux urgences de dernière minute. Appelez-nous au 01 80 906 600 à toute heure.',
        isOpen: false
      },
      {
        question: 'Vos équipes maîtrisent-elles les logiciels hôteliers ?',
        answer: 'Absolument. Notre personnel est formé sur Opera Cloud, Opera PMS, Mews, Vega, Hotsoft, Fols, Bizzon et Micros.',
        isOpen: false
      },
      {
        question: 'Proposez-vous des solutions long terme ?',
        answer: 'Oui, nous proposons des missions ponctuelles comme des contrats long terme selon vos besoins. Notre flexibilité est notre force.',
        isOpen: false
      },
      {
        question: 'Couvrez-vous toute l\'Île-de-France ?',
        answer: 'Oui, nous intervenons sur l\'ensemble de l\'Île-de-France, avec une présence renforcée à Paris et en petite couronne.',
        isOpen: false
      }
    ],
    tarifs: [
      {
        question: 'Comment sont calculés vos tarifs ?',
        answer: 'Nos tarifs dépendent du type de poste, de la durée de la mission et du niveau d\'expertise requis. Nous vous fournissons un devis détaillé gratuit sous 2h.',
        isOpen: false
      },
      {
        question: 'Le devis est-il gratuit ?',
        answer: 'Oui, tous nos devis sont gratuits et sans engagement. Vous recevez une réponse sous 2 heures maximum.',
        isOpen: false
      },
      {
        question: 'Quels modes de paiement acceptez-vous ?',
        answer: 'Nous acceptons les virements bancaires et proposons des facilités de paiement pour les contrats long terme.',
        isOpen: false
      },
      {
        question: 'Proposez-vous des contrats cadres ?',
        answer: 'Oui, pour les établissements ayant des besoins récurrents, nous proposons des contrats cadres avec des tarifs préférentiels.',
        isOpen: false
      }
    ],
    collaboration: [
      {
        question: 'Quel est le délai minimum de réservation ?',
        answer: 'Nous pouvons intervenir en quelques heures pour les urgences. Pour les missions planifiées, un délai de 24-48h est recommandé.',
        isOpen: false
      },
      {
        question: 'Puis-je modifier une mission en cours ?',
        answer: 'Oui, notre flexibilité nous permet d\'adapter les effectifs et les horaires en cours de mission selon vos besoins.',
        isOpen: false
      },
      {
        question: 'Comment s\'assure-t-on de la qualité du personnel ?',
        answer: 'Tout notre personnel est salarié Workers, sélectionné rigoureusement et formé aux standards hôteliers. Nous assurons un suivi qualité permanent.',
        isOpen: false
      },
      {
        question: 'Que faire si un collaborateur ne convient pas ?',
        answer: 'Nous nous engageons à remplacer immédiatement tout collaborateur qui ne donnerait pas satisfaction, sans frais supplémentaires.',
        isOpen: false
      },
      {
        question: 'Proposez-vous un interlocuteur dédié ?',
        answer: 'Oui, chaque client bénéficie d\'un conseiller dédié qui analyse vos besoins et coordonne les missions.',
        isOpen: false
      }
    ]
  };

  filteredFAQs(): FAQ[] {
    return this.faqs[this.activeCategory()] || [];
  }

  toggleFAQ(faq: FAQ): void {
    faq.isOpen = !faq.isOpen;
  }
}

