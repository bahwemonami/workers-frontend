import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { ApiService } from '../../core/services/api.service';

@Component({
  selector: 'app-quote',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  template: `
    <!-- Hero -->
    <section class="pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 bg-gradient-orange">
      <div class="container mx-auto px-4 sm:px-6 text-center">
        <h1 class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading text-white mb-3 sm:mb-4 px-2">
          DEMANDE DE DEVIS
        </h1>
        <p class="text-base sm:text-lg md:text-xl text-white/90 px-2">
          Réponse sous 2h – Gratuit et sans engagement
        </p>
      </div>
    </section>

    <!-- Form -->
    <section class="py-12 sm:py-16 md:py-20 bg-white">
      <div class="container mx-auto px-4 sm:px-6">
        <div class="max-w-3xl mx-auto">
          @if (!submitted()) {
            <!-- Progress Bar -->
            <div class="flex items-center justify-between mb-8 sm:mb-12 px-2">
              @for (step of steps; track step.number; let i = $index) {
                <div class="flex items-center flex-1 min-w-0" [class.flex-1]="i < steps.length - 1">
                  <div 
                    class="w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center font-bold transition-colors text-sm sm:text-base flex-shrink-0"
                    [class.bg-workers-orange]="currentStep() >= step.number"
                    [class.text-white]="currentStep() >= step.number"
                    [class.bg-gray-200]="currentStep() < step.number"
                    [class.text-gray-500]="currentStep() < step.number">
                    {{ step.number }}
                  </div>
                  @if (i < steps.length - 1) {
                    <div 
                      class="flex-1 h-1 mx-1 sm:mx-2 transition-colors min-w-0"
                      [class.bg-workers-orange]="currentStep() > step.number"
                      [class.bg-gray-200]="currentStep() <= step.number">
                    </div>
                  }
                </div>
              }
            </div>

            <form (submit)="submitForm($event)">
              <!-- Step 1: Service Type -->
              @if (currentStep() === 1) {
                <div class="space-y-4 sm:space-y-6">
                  <h2 class="text-xl sm:text-2xl font-heading text-dark mb-4 sm:mb-6 px-2">TYPE DE BESOIN</h2>
                  <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    @for (service of serviceOptions; track service.value) {
                      <div 
                        [ngClass]="{
                          'border-workers-orange bg-workers-orange/5': form.serviceTypes.includes(service.value),
                          'border-gray-200': !form.serviceTypes.includes(service.value)
                        }"
                        class="flex items-center gap-3 sm:gap-4 p-4 sm:p-6 border-2 rounded-xl cursor-pointer transition-all hover:border-workers-orange/50"
                        (click)="toggleService(service.value)">
                        <input 
                          type="checkbox" 
                          [value]="service.value"
                          [checked]="form.serviceTypes.includes(service.value)"
                          (change)="toggleService(service.value)"
                          class="w-5 h-5 accent-workers-orange flex-shrink-0"
                          [attr.aria-label]="'Sélectionner ' + service.label" />
                        <div class="flex items-center gap-2 sm:gap-3 flex-1 min-w-0">
                          @if (service.value === 'front-desk') {
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 sm:h-6 sm:w-6 text-workers-orange flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                            </svg>
                          } @else if (service.value === 'housekeeping') {
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 sm:h-6 sm:w-6 text-workers-orange flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                            </svg>
                          } @else if (service.value === 'catering') {
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 sm:h-6 sm:w-6 text-workers-orange flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                            </svg>
                          } @else {
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 sm:h-6 sm:w-6 text-workers-orange flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                            </svg>
                          }
                          <span class="font-medium text-dark text-sm sm:text-base">{{ service.label }}</span>
                        </div>
                      </div>
                    }
                  </div>
                </div>
              }

              <!-- Step 2: Details -->
              @if (currentStep() === 2) {
                <div class="space-y-4 sm:space-y-6">
                  <h2 class="text-xl sm:text-2xl font-heading text-dark mb-4 sm:mb-6 px-2">DÉTAILS DE LA MISSION</h2>
                  
                  <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                    <div>
                      <label class="block text-sm font-medium text-gray-700 mb-2">Date de début</label>
                      <input 
                        type="date" 
                        [(ngModel)]="form.startDate" 
                        name="startDate"
                        class="input-field text-base"
                      />
                    </div>
                    <div>
                      <label class="block text-sm font-medium text-gray-700 mb-2">Durée</label>
                      <select [(ngModel)]="form.duration" name="duration" class="input-field text-base">
                        <option value="">Sélectionnez</option>
                        <option value="journee">Journée</option>
                        <option value="semaine">Semaine</option>
                        <option value="mois">Mois</option>
                        <option value="long-terme">Mission longue durée</option>
                      </select>
                    </div>
                  </div>

                  <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                    <div>
                      <label class="block text-sm font-medium text-gray-700 mb-2">Nombre de personnes</label>
                      <input 
                        type="number" 
                        [(ngModel)]="form.staffCount" 
                        name="staffCount"
                        min="1"
                        class="input-field text-base"
                        placeholder="Ex: 3"
                      />
                    </div>
                    <div>
                      <label class="block text-sm font-medium text-gray-700 mb-2">Horaires</label>
                      <input 
                        type="text" 
                        [(ngModel)]="form.schedule" 
                        name="schedule"
                        class="input-field text-base"
                        placeholder="Ex: 7h-15h"
                      />
                    </div>
                  </div>

                  <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2">Établissement</label>
                    <input 
                      type="text" 
                      [(ngModel)]="form.establishment" 
                      name="establishment"
                      class="input-field text-base"
                      placeholder="Nom de votre établissement"
                      autocomplete="organization"
                    />
                  </div>
                </div>
              }

              <!-- Step 3: Contact -->
              @if (currentStep() === 3) {
                <div class="space-y-4 sm:space-y-6">
                  <h2 class="text-xl sm:text-2xl font-heading text-dark mb-4 sm:mb-6 px-2">VOS COORDONNÉES</h2>
                  
                  <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                    <div>
                      <label class="block text-sm font-medium text-gray-700 mb-2">Prénom *</label>
                      <input 
                        type="text" 
                        [(ngModel)]="form.firstName" 
                        name="firstName"
                        required
                        class="input-field text-base"
                        autocomplete="given-name"
                      />
                    </div>
                    <div>
                      <label class="block text-sm font-medium text-gray-700 mb-2">Nom *</label>
                      <input 
                        type="text" 
                        [(ngModel)]="form.lastName" 
                        name="lastName"
                        required
                        class="input-field text-base"
                        autocomplete="family-name"
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
                      class="input-field text-base"
                      autocomplete="email"
                    />
                  </div>

                  <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2">Téléphone *</label>
                    <input 
                      type="tel" 
                      [(ngModel)]="form.phone" 
                      name="phone"
                      required
                      class="input-field text-base"
                      autocomplete="tel"
                    />
                  </div>

                  <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2">Message complémentaire</label>
                    <textarea 
                      [(ngModel)]="form.description" 
                      name="description"
                      rows="4"
                      class="input-field text-base resize-none"
                      placeholder="Précisez vos besoins..."
                    ></textarea>
                  </div>

                  <div class="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                    <input 
                      type="checkbox" 
                      [(ngModel)]="rgpdAccepted" 
                      name="rgpd"
                      required
                      class="mt-1 w-4 h-4 accent-workers-orange flex-shrink-0"
                      id="rgpd-checkbox"
                    />
                    <label for="rgpd-checkbox" class="text-xs sm:text-sm text-gray-600 leading-relaxed">
                      J'accepte que mes données soient utilisées pour me recontacter.
                      <a routerLink="/legal/privacy" class="text-workers-orange underline">
                        Politique de confidentialité
                      </a>
                    </label>
                  </div>
                </div>
              }

              <!-- Navigation -->
              <div class="flex items-center justify-between mt-6 sm:mt-8 pt-6 sm:pt-8 border-t gap-4">
                @if (currentStep() > 1) {
                  <button 
                    type="button" 
                    (click)="prevStep()"
                    class="px-4 sm:px-6 py-2.5 sm:py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors text-sm sm:text-base flex-shrink-0">
                    Précédent
                  </button>
                } @else {
                  <div class="flex-shrink-0"></div>
                }

                @if (currentStep() < 3) {
                  <button 
                    type="button" 
                    (click)="nextStep()"
                    [disabled]="!canProceed()"
                    class="btn-primary flex-1 sm:flex-initial text-sm sm:text-base px-4 sm:px-6 py-2.5 sm:py-3"
                    [class.opacity-50]="!canProceed()"
                    [class.cursor-not-allowed]="!canProceed()">
                    Suivant
                  </button>
                } @else {
                  <button 
                    type="submit" 
                    class="btn-primary flex-1 sm:flex-initial text-sm sm:text-base px-4 sm:px-6 py-2.5 sm:py-3"
                    [disabled]="loading() || !rgpdAccepted"
                    [class.opacity-50]="loading() || !rgpdAccepted"
                    [class.cursor-not-allowed]="loading() || !rgpdAccepted">
                    @if (loading()) {
                      Envoi en cours...
                    } @else {
                      Envoyer ma demande
                    }
                  </button>
                }
              </div>
            </form>
          } @else {
            <!-- Success Message -->
            <div class="text-center py-8 sm:py-12 bg-green-50 rounded-xl sm:rounded-2xl px-4">
              <div class="w-16 h-16 sm:w-20 sm:h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 sm:h-10 sm:w-10 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 class="text-2xl sm:text-3xl font-heading text-dark mb-3 sm:mb-4">Demande envoyée !</h3>
              <p class="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 px-2">
                Votre conseiller dédié vous recontactera sous 2 heures maximum.
              </p>
              <a href="tel:+33180906600" class="text-workers-orange font-bold text-lg sm:text-xl flex items-center justify-center gap-2 break-all px-2" aria-label="Appeler le 01 80 906 600">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 sm:h-6 sm:w-6 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                01 80 906 600
              </a>
            </div>
          }
        </div>
      </div>
    </section>
  `
})
export class QuoteComponent {
  private apiService = inject(ApiService);
  
  currentStep = signal(1);
  loading = signal(false);
  submitted = signal(false);
  rgpdAccepted = false;

  steps = [
    { number: 1, label: 'Type de besoin' },
    { number: 2, label: 'Détails' },
    { number: 3, label: 'Coordonnées' }
  ];

  serviceOptions = [
    { value: 'front-desk', label: 'Front Desk' },
    { value: 'housekeeping', label: 'Housekeeping' },
    { value: 'catering', label: 'Catering' },
    { value: 'multiple', label: 'Plusieurs services' }
  ];

  form = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    establishment: '',
    serviceTypes: [] as string[],
    startDate: '',
    duration: '',
    staffCount: null as number | null,
    schedule: '',
    description: ''
  };

  toggleService(value: string): void {
    const index = this.form.serviceTypes.indexOf(value);
    if (index > -1) {
      this.form.serviceTypes.splice(index, 1);
    } else {
      this.form.serviceTypes.push(value);
    }
  }

  canProceed(): boolean {
    if (this.currentStep() === 1) {
      return this.form.serviceTypes.length > 0;
    }
    return true;
  }

  nextStep(): void {
    if (this.canProceed() && this.currentStep() < 3) {
      this.currentStep.update(v => v + 1);
    }
  }

  prevStep(): void {
    if (this.currentStep() > 1) {
      this.currentStep.update(v => v - 1);
    }
  }

  submitForm(event: Event): void {
    event.preventDefault();
    if (!this.rgpdAccepted) return;

    this.loading.set(true);
    this.apiService.submitQuote(this.form).subscribe({
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

