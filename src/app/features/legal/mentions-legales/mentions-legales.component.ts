import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-mentions-legales',
  standalone: true,
  imports: [CommonModule],
  template: `
    <!-- Hero -->
    <section class="pt-32 pb-16 bg-workers-orange">
      <div class="container mx-auto px-4 text-center">
        <h1 class="text-4xl md:text-5xl font-heading text-white">
          MENTIONS LÉGALES
        </h1>
      </div>
    </section>

    <!-- Content -->
    <section class="py-20 bg-white">
      <div class="container mx-auto px-4">
        <div class="max-w-3xl mx-auto prose prose-lg">
          <h2>1. Éditeur du site</h2>
          <p>
            <strong>Raison sociale :</strong> Workers<br/>
            <strong>Forme juridique :</strong> SAS<br/>
            <strong>Siège social :</strong> 58 avenue Wagram, 75017 Paris<br/>
            <strong>SIRET :</strong> 934 562 331 00017<br/>
            <strong>Téléphone :</strong> 01 80 906 600<br/>
            <strong>Email :</strong> call&#64;workers-paris.fr<br/>
            <strong>Directeur de la publication :</strong> Le représentant légal
          </p>

          <h2>2. Hébergement</h2>
          <p>
            Le site est hébergé par :<br/>
            <strong>Hostinger International Ltd</strong><br/>
            61 Lordou Vironos Street, 6023 Larnaca, Chypre
          </p>

          <h2>3. Propriété intellectuelle</h2>
          <p>
            L'ensemble du contenu de ce site (textes, images, vidéos, logos, etc.) est la propriété exclusive de Workers ou de ses partenaires. Toute reproduction, représentation, modification, publication, adaptation de tout ou partie des éléments du site, quel que soit le moyen ou le procédé utilisé, est interdite sans l'autorisation écrite préalable de Workers.
          </p>

          <h2>4. Protection des données personnelles</h2>
          <p>
            Conformément au Règlement Général sur la Protection des Données (RGPD) et à la loi Informatique et Libertés, vous disposez d'un droit d'accès, de rectification, de suppression et de portabilité de vos données personnelles.
          </p>
          <p>
            Pour exercer ces droits, vous pouvez nous contacter à l'adresse : call&#64;workers-paris.fr
          </p>

          <h2>5. Cookies</h2>
          <p>
            Ce site utilise des cookies pour améliorer votre expérience de navigation et à des fins statistiques. Vous pouvez configurer votre navigateur pour refuser les cookies.
          </p>

          <h2>6. Limitation de responsabilité</h2>
          <p>
            Workers ne pourra être tenu responsable des dommages directs ou indirects causés au matériel de l'utilisateur lors de l'accès au site. Workers décline toute responsabilité quant à l'utilisation qui pourrait être faite des informations et contenus présents sur ce site.
          </p>

          <h2>7. Droit applicable</h2>
          <p>
            Les présentes mentions légales sont régies par le droit français. En cas de litige, les tribunaux de Paris seront seuls compétents.
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
  `]
})
export class MentionsLegalesComponent {}

