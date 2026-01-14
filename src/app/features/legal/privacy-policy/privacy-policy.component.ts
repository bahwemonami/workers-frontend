import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-privacy-policy',
  standalone: true,
  imports: [CommonModule],
  template: `
    <!-- Hero -->
    <section class="pt-32 pb-16 bg-workers-orange">
      <div class="container mx-auto px-4 text-center">
        <h1 class="text-4xl md:text-5xl font-heading text-white">
          POLITIQUE DE CONFIDENTIALITÉ
        </h1>
      </div>
    </section>

    <!-- Content -->
    <section class="py-20 bg-white">
      <div class="container mx-auto px-4">
        <div class="max-w-3xl mx-auto prose prose-lg">
          <h2>1. Données collectées</h2>
          <p>
            Dans le cadre de nos services, nous collectons les données suivantes :
          </p>
          <ul>
            <li>Données d'identification : nom, prénom, email, téléphone</li>
            <li>Données professionnelles : nom de l'établissement, poste</li>
            <li>Données de navigation : cookies, adresse IP</li>
          </ul>

          <h2>2. Finalités du traitement</h2>
          <p>
            Vos données sont collectées pour :
          </p>
          <ul>
            <li>Répondre à vos demandes de contact et de devis</li>
            <li>Vous envoyer notre newsletter (avec votre consentement)</li>
            <li>Améliorer nos services et notre site web</li>
            <li>Respecter nos obligations légales</li>
          </ul>

          <h2>3. Durée de conservation</h2>
          <p>
            Vos données sont conservées :
          </p>
          <ul>
            <li>Données de contact : 3 ans après le dernier contact</li>
            <li>Données de facturation : 10 ans (obligation légale)</li>
            <li>Cookies : 13 mois maximum</li>
          </ul>

          <h2>4. Destinataires des données</h2>
          <p>
            Vos données sont destinées uniquement à Workers et ne sont jamais vendues à des tiers. Elles peuvent être partagées avec :
          </p>
          <ul>
            <li>Nos prestataires techniques (hébergement, emailing)</li>
            <li>Les autorités en cas d'obligation légale</li>
          </ul>

          <h2>5. Vos droits</h2>
          <p>
            Conformément au RGPD, vous disposez des droits suivants :
          </p>
          <ul>
            <li><strong>Droit d'accès :</strong> obtenir une copie de vos données</li>
            <li><strong>Droit de rectification :</strong> corriger vos données</li>
            <li><strong>Droit de suppression :</strong> demander l'effacement de vos données</li>
            <li><strong>Droit de portabilité :</strong> récupérer vos données dans un format lisible</li>
            <li><strong>Droit d'opposition :</strong> vous opposer au traitement de vos données</li>
          </ul>

          <h2>6. Cookies et traceurs</h2>
          <p>
            Ce site utilise des cookies pour :
          </p>
          <ul>
            <li>Cookies essentiels : fonctionnement du site</li>
            <li>Cookies analytiques : statistiques de fréquentation (Google Analytics)</li>
          </ul>
          <p>
            Vous pouvez paramétrer vos préférences via le bandeau cookies ou les paramètres de votre navigateur.
          </p>

          <h2>7. Contact DPO</h2>
          <p>
            Pour toute question concernant vos données personnelles, contactez-nous :
          </p>
          <p>
            <strong>Email :</strong> call&#64;workers-paris.fr<br/>
            <strong>Adresse :</strong> Workers - DPO, 58 avenue Wagram, 75017 Paris
          </p>

          <h2>8. Réclamation</h2>
          <p>
            Si vous estimez que vos droits ne sont pas respectés, vous pouvez introduire une réclamation auprès de la CNIL (www.cnil.fr).
          </p>

          <p class="text-gray-500 text-sm mt-8">
            Dernière mise à jour : Janvier 2026
          </p>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .prose h2 {
      @apply text-2xl font-heading text-dark mt-8 mb-4;
    }
    .prose p {
      @apply text-gray-600 leading-relaxed mb-4;
    }
    .prose ul {
      @apply list-disc list-inside text-gray-600 mb-4 space-y-2;
    }
  `]
})
export class PrivacyPolicyComponent {}

