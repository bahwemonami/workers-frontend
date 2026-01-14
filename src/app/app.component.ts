import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
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
    <main class="min-h-screen">
      <router-outlet />
    </main>
    <app-footer />
    <app-bottom-bar />
    <app-cookie-banner />
    <app-newsletter-popup />
  `
})
export class AppComponent {}

