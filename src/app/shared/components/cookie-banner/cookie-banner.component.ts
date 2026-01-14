import { Component, signal, OnInit, PLATFORM_ID, inject } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cookie-banner',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    @if (showBanner()) {
      <div class="fixed bottom-20 lg:bottom-0 left-0 right-0 bg-dark text-white p-4 lg:p-6 z-50 shadow-lg border-t border-workers-orange/20">
        <div class="container mx-auto flex flex-col lg:flex-row items-center justify-between gap-4">
          <div class="flex-1">
            <p class="font-bold mb-1">🍪 Ce site utilise des cookies</p>
            <p class="text-white/70 text-sm">
              Nous utilisons des cookies pour améliorer votre expérience.
              <a routerLink="/legal/privacy" class="text-workers-orange underline">En savoir plus</a>
            </p>
          </div>
          <div class="flex items-center gap-3">
            <button 
              (click)="decline()"
              class="px-4 py-2 border border-white/30 rounded-lg hover:bg-white/10 transition-colors text-sm">
              Refuser
            </button>
            <button 
              (click)="accept()"
              class="px-4 py-2 bg-workers-orange rounded-lg hover:bg-workers-orange-light transition-colors text-sm font-medium">
              Accepter
            </button>
          </div>
        </div>
      </div>
    }
  `
})
export class CookieBannerComponent implements OnInit {
  private platformId = inject(PLATFORM_ID);
  showBanner = signal(false);

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      const consent = localStorage.getItem('cookie-consent');
      if (!consent) {
        setTimeout(() => this.showBanner.set(true), 2000);
      }
    }
  }

  accept(): void {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem('cookie-consent', 'accepted');
    }
    this.showBanner.set(false);
  }

  decline(): void {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem('cookie-consent', 'declined');
    }
    this.showBanner.set(false);
  }
}

