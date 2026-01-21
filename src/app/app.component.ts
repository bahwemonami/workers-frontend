import { Component, OnInit, inject } from '@angular/core';
import { Router, NavigationEnd, RouterOutlet } from '@angular/router';
import { filter } from 'rxjs';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { BottomBarComponent } from './shared/components/bottom-bar/bottom-bar.component';
import { CookieBannerComponent } from './shared/components/cookie-banner/cookie-banner.component';
import { NewsletterPopupComponent } from './shared/components/newsletter-popup/newsletter-popup.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    FooterComponent,
    BottomBarComponent,
    CookieBannerComponent,
    NewsletterPopupComponent
  ],
  template: `
    <app-header />
    <main class="min-h-screen pb-24 sm:pb-20">
      <router-outlet />
    </main>
    <app-footer />
    
    <!-- Sticky CTA Bar -->
    <section class="fixed bottom-0 left-0 right-0 z-50 bg-workers-orange/95 backdrop-blur-sm border-t border-white/20">
      <div class="container mx-auto px-6 py-4">
        <div class="flex flex-col sm:flex-row items-center justify-between gap-4">
          <!-- Numéro de téléphone - Centré et mis en avant -->
          <a href="tel:+33180906600" class="flex items-center gap-3 text-white font-medium text-xl sm:text-2xl animate-pulse-subtle" aria-label="Appeler le 01 80 906 600">
            <svg class="w-6 h-6 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
            </svg>
            <span>01 80 906 600</span>
          </a>
          
          <!-- Slogan - Secondaire -->
          <p class="text-white/70 text-sm sm:text-base hidden sm:block text-center">
            Choisissez l'efficacité, choisissez Workers
          </p>
          
          <!-- Email - Discret -->
          <a href="mailto:call@workers-paris.fr" class="flex items-center gap-3 text-white/60 hover:text-white text-sm sm:text-base transition-colors" aria-label="Envoyer un email à call@workers-paris.fr">
            <svg class="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
            </svg>
            <span class="hidden sm:inline break-all">call&#64;workers-paris.fr</span>
          </a>
        </div>
      </div>
    </section>
    
    <app-bottom-bar />
    <app-cookie-banner />
    <app-newsletter-popup />
  `
})
export class AppComponent implements OnInit {
  private router = inject(Router);

  ngOnInit(): void {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
  }
}

