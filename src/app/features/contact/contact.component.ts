import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../../core/services/api.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <!-- Hero -->
    <section class="pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 bg-gradient-orange">
      <div class="container mx-auto px-4 sm:px-6 text-center">
        <h1 class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading text-white mb-3 sm:mb-4 px-2">
          CONTACTEZ-NOUS
        </h1>
        <p class="text-base sm:text-lg md:text-xl text-white/90 px-2">
          Notre équipe vous répond 24/7
        </p>
      </div>
    </section>

    <!-- Contact Content -->
    <section class="py-12 sm:py-16 md:py-20 bg-white">
      <div class="container mx-auto px-4 sm:px-6">
        <div class="grid lg:grid-cols-5 gap-8 sm:gap-12 max-w-6xl mx-auto">
          <!-- Form -->
          <div class="lg:col-span-3">
            @if (!submitted()) {
              <form (submit)="submitForm($event)" class="space-y-4 sm:space-y-6">
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2">Prénom *</label>
                    <input 
                      type="text" 
                      [(ngModel)]="form.firstName" 
                      name="firstName"
                      required
                      class="input-field"
                    />
                  </div>
                  <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2">Nom *</label>
                    <input 
                      type="text" 
                      [(ngModel)]="form.lastName" 
                      name="lastName"
                      required
                      class="input-field"
                    />
                  </div>
                </div>

                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                  <input 
                    type="email" 
                    [(ngModel)]="form.email" 
                    name="email"
                    required
                    class="input-field"
                  />
                </div>

                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2">Téléphone *</label>
                  <input 
                    type="tel" 
                    [(ngModel)]="form.phone" 
                    name="phone"
                    required
                    class="input-field"
                  />
                </div>

                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2">Établissement</label>
                  <input 
                    type="text" 
                    [(ngModel)]="form.establishment" 
                    name="establishment"
                    class="input-field"
                    placeholder="Nom de votre établissement"
                  />
                </div>

                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2">Type de besoin</label>
                  <select [(ngModel)]="form.serviceType" name="serviceType" class="input-field">
                    <option value="">Sélectionnez un service</option>
                    <option value="front-desk">Front Desk</option>
                    <option value="housekeeping">Housekeeping</option>
                    <option value="catering">Catering</option>
                    <option value="autre">Autre</option>
                  </select>
                </div>

                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2">Message *</label>
                  <textarea 
                    [(ngModel)]="form.message" 
                    name="message"
                    rows="5"
                    required
                    class="input-field"
                    placeholder="Décrivez votre besoin..."
                  ></textarea>
                </div>

                <div class="flex items-start gap-3">
                  <input 
                    type="checkbox" 
                    [(ngModel)]="rgpdAccepted" 
                    name="rgpd"
                    required
                    class="mt-1"
                  />
                  <label class="text-sm text-gray-600">
                    J'accepte que mes données soient utilisées pour me recontacter.
                    <a routerLink="/legal/privacy" class="text-workers-orange underline">
                      Politique de confidentialité
                    </a>
                  </label>
                </div>

                <button 
                  type="submit" 
                  class="btn-primary w-full"
                  [disabled]="loading()">
                  @if (loading()) {
                    Envoi en cours...
                  } @else {
                    Envoyer le message
                  }
                </button>
              </form>
            } @else {
              <div class="text-center py-12 bg-green-50 rounded-2xl">
                <div class="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 class="text-2xl font-heading text-dark mb-2">Message envoyé !</h3>
                <p class="text-gray-600">Nous vous recontacterons très rapidement.</p>
              </div>
            }
          </div>

          <!-- Contact Info -->
          <div class="lg:col-span-2 space-y-4 sm:space-y-6 mt-8 lg:mt-0">
            <!-- Phone -->
            <div class="bg-workers-orange text-white p-5 sm:p-6 rounded-xl sm:rounded-2xl">
              <div class="mb-3 sm:mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 sm:h-8 sm:w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 class="text-lg sm:text-xl font-bold mb-2">Téléphone (24/7)</h3>
              <a href="tel:+33180906600" class="text-xl sm:text-2xl font-heading hover:underline break-all" aria-label="Appeler le 01 80 906 600">
                01 80 906 600
              </a>
            </div>

            <!-- Email -->
            <div class="bg-gray-50 p-5 sm:p-6 rounded-xl sm:rounded-2xl border border-gray-100">
              <div class="mb-3 sm:mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 sm:h-8 sm:w-8 text-workers-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 class="text-lg sm:text-xl font-bold text-dark mb-2">Email</h3>
              <a href="mailto:call@workers-paris.fr" class="text-workers-orange hover:underline break-all text-sm sm:text-base" aria-label="Envoyer un email à call@workers-paris.fr">
                call&#64;workers-paris.fr
              </a>
            </div>

            <!-- Address -->
            <div class="bg-gray-50 p-5 sm:p-6 rounded-xl sm:rounded-2xl border border-gray-100">
              <div class="mb-3 sm:mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 sm:h-8 sm:w-8 text-workers-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 class="text-lg sm:text-xl font-bold text-dark mb-2">Adresse</h3>
              <p class="text-gray-600 text-sm sm:text-base">
                58 avenue Wagram<br/>
                75017 Paris
              </p>
            </div>

            <!-- SIRET -->
            <div class="bg-gray-50 p-5 sm:p-6 rounded-xl sm:rounded-2xl border border-gray-100">
              <div class="mb-3 sm:mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 sm:h-8 sm:w-8 text-workers-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 class="text-lg sm:text-xl font-bold text-dark mb-2">SIRET</h3>
              <p class="text-gray-600 text-sm sm:text-base break-all">934 562 331 00017</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  `
})
export class ContactComponent {
  private apiService = inject(ApiService);
  
  form = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    establishment: '',
    serviceType: '',
    message: ''
  };
  
  rgpdAccepted = false;
  loading = signal(false);
  submitted = signal(false);

  submitForm(event: Event): void {
    event.preventDefault();
    if (!this.rgpdAccepted) return;

    this.loading.set(true);
    this.apiService.submitContact(this.form).subscribe({
      next: () => {
        this.submitted.set(true);
        this.loading.set(false);
      },
      error: () => {
        this.loading.set(false);
        alert('Une erreur est survenue. Veuillez réessayer.');
      }
    });
  }
}

