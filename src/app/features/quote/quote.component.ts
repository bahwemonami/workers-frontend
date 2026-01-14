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
    <section class="pt-32 pb-16 bg-gradient-orange">
      <div class="container mx-auto px-4 text-center">
        <h1 class="text-5xl md:text-6xl font-heading text-white mb-4">
          DEMANDE DE DEVIS
        </h1>
        <p class="text-xl text-white/90">
          Réponse sous 2h – Gratuit et sans engagement
        </p>
      </div>
    </section>

    <!-- Form -->
    <section class="py-20 bg-white">
      <div class="container mx-auto px-4">
        <div class="max-w-3xl mx-auto">
          @if (!submitted()) {
            <!-- Progress Bar -->
            <div class="flex items-center justify-between mb-12">
              @for (step of steps; track step.number; let i = $index) {
                <div class="flex items-center" [class.flex-1]="i < steps.length - 1">
                  <div 
                    class="w-10 h-10 rounded-full flex items-center justify-center font-bold transition-colors"
                    [class.bg-workers-orange]="currentStep() >= step.number"
                    [class.text-white]="currentStep() >= step.number"
                    [class.bg-gray-200]="currentStep() < step.number"
                    [class.text-gray-500]="currentStep() < step.number">
                    {{ step.number }}
                  </div>
                  @if (i < steps.length - 1) {
                    <div 
                      class="flex-1 h-1 mx-2 transition-colors"
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
                <div class="space-y-6">
                  <h2 class="text-2xl font-heading text-dark mb-6">TYPE DE BESOIN</h2>
                  <div class="grid md:grid-cols-2 gap-4">
                    @for (service of serviceOptions; track service.value) {
                      <div class="flex items-center gap-4 p-6 border-2 rounded-xl cursor-pointer transition-all hover:border-workers-orange/50" [class.border-workers-orange]="form.serviceTypes.includes(service.value)" [class.bg-workers-orange/5]="form.serviceTypes.includes(service.value)" [class.border-gray-200]="!form.serviceTypes.includes(service.value)" (click)="toggleService(service.value)">
                        <input 
                          type="checkbox" 
                          [value]="service.value"
                          [checked]="form.serviceTypes.includes(service.value)"
                          (change)="toggleService(service.value)"
                          class="w-5 h-5 accent-workers-orange"
                          [attr.aria-label]="'Sélectionner ' + service.label"
                        />
                        <div class="flex items-center gap-3 flex-1">
                          @if (service.value === 'front-desk') {
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-workers-orange flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                            </svg>
                          } @else if (service.value === 'housekeeping') {
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-workers-orange flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                            </svg>
                          } @else if (service.value === 'catering') {
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-workers-orange flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                            </svg>
                          } @else {
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-workers-orange flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                            </svg>
                          }
                          <span class="font-medium text-dark">{{ service.label }}</span>
                        </div>
                      </div>
                    }
                  </div>
                </div>
              }

              <!-- Step 2: Details -->
              @if (currentStep() === 2) {
                <div class="space-y-6">
                  <h2 class="text-2xl font-heading text-dark mb-6">DÉTAILS DE LA MISSION</h2>
                  
                  <div class="grid md:grid-cols-2 gap-6">
                    <div>
                      <label class="block text-sm font-medium text-gray-700 mb-2">Date de début</label>
                      <input 
                        type="date" 
                        [(ngModel)]="form.startDate" 
                        name="startDate"
                        class="input-field"
                      />
                    </div>
                    <div>
                      <label class="block text-sm font-medium text-gray-700 mb-2">Durée</label>
                      <select [(ngModel)]="form.duration" name="duration" class="input-field">
                        <option value="">Sélectionnez</option>
                        <option value="journee">Journée</option>
                        <option value="semaine">Semaine</option>
                        <option value="mois">Mois</option>
                        <option value="long-terme">Mission longue durée</option>
                      </select>
                    </div>
                  </div>

                  <div class="grid md:grid-cols-2 gap-6">
                    <div>
                      <label class="block text-sm font-medium text-gray-700 mb-2">Nombre de personnes</label>
                      <input 
                        type="number" 
                        [(ngModel)]="form.staffCount" 
                        name="staffCount"
                        min="1"
                        class="input-field"
                        placeholder="Ex: 3"
                      />
                    </div>
                    <div>
                      <label class="block text-sm font-medium text-gray-700 mb-2">Horaires</label>
                      <input 
                        type="text" 
                        [(ngModel)]="form.schedule" 
                        name="schedule"
                        class="input-field"
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
                      class="input-field"
                      placeholder="Nom de votre établissement"
                    />
                  </div>
                </div>
              }

              <!-- Step 3: Contact -->
              @if (currentStep() === 3) {
                <div class="space-y-6">
                  <h2 class="text-2xl font-heading text-dark mb-6">VOS COORDONNÉES</h2>
                  
                  <div class="grid md:grid-cols-2 gap-6">
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
                    <label class="block text-sm font-medium text-gray-700 mb-2">Message complémentaire</label>
                    <textarea 
                      [(ngModel)]="form.description" 
                      name="description"
                      rows="4"
                      class="input-field"
                      placeholder="Précisez vos besoins..."
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
                </div>
              }

              <!-- Navigation -->
              <div class="flex items-center justify-between mt-8 pt-8 border-t">
                @if (currentStep() > 1) {
                  <button 
                    type="button" 
                    (click)="prevStep()"
                    class="px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                    Précédent
                  </button>
                } @else {
                  <div></div>
                }

                @if (currentStep() < 3) {
                  <button 
                    type="button" 
                    (click)="nextStep()"
                    [disabled]="!canProceed()"
                    class="btn-primary"
                    [class.opacity-50]="!canProceed()">
                    Suivant
                  </button>
                } @else {
                  <button 
                    type="submit" 
                    class="btn-primary"
                    [disabled]="loading() || !rgpdAccepted">
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
            <div class="text-center py-12 bg-green-50 rounded-2xl">
              <div class="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 class="text-3xl font-heading text-dark mb-4">Demande envoyée !</h3>
              <p class="text-gray-600 mb-6">
                Votre conseiller dédié vous recontactera sous 2 heures maximum.
              </p>
              <a href="tel:+33180906600" class="text-workers-orange font-bold text-xl flex items-center justify-center gap-2" aria-label="Appeler le 01 80 906 600">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
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

