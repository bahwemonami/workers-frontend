import { Component, signal, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  template: `
    <header 
      class="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      [class.bg-white]="isScrolled()"
      [class.shadow-md]="isScrolled()"
      [class.bg-transparent]="!isScrolled()">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-20 sm:h-24">
          <!-- Logo -->
          <a routerLink="/" class="flex items-center">
            <span 
              class="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold workers-logo-underline transition-colors"
              [class.text-workers-orange]="isScrolled()"
              [class.text-white]="!isScrolled()">
              WORKERS
            </span>
          </a>

          <!-- Desktop Navigation -->
          <nav class="hidden lg:flex items-center gap-10" aria-label="Navigation principale">
            <a routerLink="/" routerLinkActive="text-workers-orange" [routerLinkActiveOptions]="{exact: true}"
               class="font-medium text-lg transition-colors hover:opacity-80 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-workers-orange after:transition-all hover:after:w-full"
               [class.text-dark]="isScrolled()"
               [class.text-white]="!isScrolled()"
               aria-label="Accueil">
              Accueil
            </a>
            <a routerLink="/about" routerLinkActive="text-workers-orange"
               class="font-medium text-lg transition-colors hover:opacity-80 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-workers-orange after:transition-all hover:after:w-full"
               [class.text-dark]="isScrolled()"
               [class.text-white]="!isScrolled()"
               aria-label="À propos">
              À propos
            </a>
            <a routerLink="/services" routerLinkActive="text-workers-orange"
               class="font-medium text-lg transition-colors hover:opacity-80 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-workers-orange after:transition-all hover:after:w-full"
               [class.text-dark]="isScrolled()"
               [class.text-white]="!isScrolled()"
               aria-label="Services">
              Services
            </a>
            <a routerLink="/faq" routerLinkActive="text-workers-orange"
               class="font-medium text-lg transition-colors hover:opacity-80 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-workers-orange after:transition-all hover:after:w-full"
               [class.text-dark]="isScrolled()"
               [class.text-white]="!isScrolled()"
               aria-label="FAQ">
              FAQ
            </a>
            <a routerLink="/contact" routerLinkActive="text-workers-orange"
               class="font-medium text-lg transition-colors hover:opacity-80 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-workers-orange after:transition-all hover:after:w-full"
               [class.text-dark]="isScrolled()"
               [class.text-white]="!isScrolled()"
               aria-label="Contact">
              Contact
            </a>
          </nav>

          <!-- CTA + Phone -->
          <div class="hidden lg:flex items-center gap-6">
            <a href="tel:+33180906600" 
               class="flex items-center gap-3 font-bold text-lg transition-colors"
               [class.text-workers-orange]="isScrolled()"
               [class.text-white]="!isScrolled()">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              01 80 906 600
            </a>
            <a routerLink="/quote" class="btn-primary text-base py-3 px-6 sm:py-4 sm:px-8 whitespace-nowrap">
              Devis Gratuit
            </a>
          </div>

          <!-- Mobile Menu Button -->
          <button 
            (click)="toggleMenu()" 
            class="lg:hidden p-3"
            [class.text-dark]="isScrolled()"
            [class.text-white]="!isScrolled()"
            [attr.aria-expanded]="menuOpen()"
            aria-label="Menu de navigation"
            aria-controls="mobile-menu">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              @if (!menuOpen()) {
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
              } @else {
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              }
            </svg>
          </button>
        </div>
      </div>

      <!-- Mobile Menu -->
      @if (menuOpen()) {
        <div id="mobile-menu" class="lg:hidden bg-white border-t shadow-lg">
          <nav class="container mx-auto px-6 sm:px-8 py-6 flex flex-col gap-4" aria-label="Menu mobile">
            <a routerLink="/" (click)="closeMenu()" class="text-dark hover:text-workers-orange font-medium py-3 text-lg">Accueil</a>
            <a routerLink="/about" (click)="closeMenu()" class="text-dark hover:text-workers-orange font-medium py-3 text-lg">À propos</a>
            <a routerLink="/services" (click)="closeMenu()" class="text-dark hover:text-workers-orange font-medium py-3 text-lg">Services</a>
            <a routerLink="/faq" (click)="closeMenu()" class="text-dark hover:text-workers-orange font-medium py-3 text-lg">FAQ</a>
            <a routerLink="/contact" (click)="closeMenu()" class="text-dark hover:text-workers-orange font-medium py-3 text-lg">Contact</a>
            <div class="border-t border-gray-200 my-3 pt-4">
              <a href="tel:+33180906600" class="text-workers-orange font-bold py-3 flex items-center gap-3 text-lg" aria-label="Appeler le 01 80 906 600">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                01 80 906 600
              </a>
            </div>
            <a routerLink="/quote" (click)="closeMenu()" class="btn-primary text-center py-4 mt-3 text-lg">Devis Gratuit</a>
          </nav>
        </div>
      }
    </header>
  `
})
export class HeaderComponent {
  isScrolled = signal(false);
  menuOpen = signal(false);

  @HostListener('window:scroll')
  onScroll(): void {
    this.isScrolled.set(window.scrollY > 50);
  }

  toggleMenu(): void {
    this.menuOpen.update(v => !v);
  }

  closeMenu(): void {
    this.menuOpen.set(false);
  }
}

