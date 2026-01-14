import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./features/home/home.component').then(m => m.HomeComponent),
    title: 'Workers | Staffing Hôtelier 24/7'
  },
  {
    path: 'about',
    loadComponent: () => import('./features/about/about.component').then(m => m.AboutComponent),
    title: 'À Propos | Workers'
  },
  {
    path: 'services',
    loadComponent: () => import('./features/services/services-list/services-list.component').then(m => m.ServicesListComponent),
    title: 'Nos Services | Workers'
  },
  {
    path: 'services/:slug',
    loadComponent: () => import('./features/services/service-detail/service-detail.component').then(m => m.ServiceDetailComponent),
    title: 'Service | Workers'
  },
  {
    path: 'faq',
    loadComponent: () => import('./features/faq/faq.component').then(m => m.FaqComponent),
    title: 'FAQ | Workers'
  },
  {
    path: 'contact',
    loadComponent: () => import('./features/contact/contact.component').then(m => m.ContactComponent),
    title: 'Contact | Workers'
  },
  {
    path: 'quote',
    loadComponent: () => import('./features/quote/quote.component').then(m => m.QuoteComponent),
    title: 'Demande de Devis | Workers'
  },
  {
    path: 'legal/mentions',
    loadComponent: () => import('./features/legal/mentions-legales/mentions-legales.component').then(m => m.MentionsLegalesComponent),
    title: 'Mentions Légales | Workers'
  },
  {
    path: 'legal/privacy',
    loadComponent: () => import('./features/legal/privacy-policy/privacy-policy.component').then(m => m.PrivacyPolicyComponent),
    title: 'Politique de Confidentialité | Workers'
  },
  {
    path: '**',
    loadComponent: () => import('./features/not-found/not-found.component').then(m => m.NotFoundComponent),
    title: 'Page Non Trouvée | Workers'
  }
];

