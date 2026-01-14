import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingService } from '../../../core/services/loading.service';

@Component({
  selector: 'app-loader',
  standalone: true,
  imports: [CommonModule],
  template: `
    @if (loadingService.isLoading()) {
      <div class="fixed inset-0 bg-white/90 z-50 flex items-center justify-center">
        <div class="flex flex-col items-center">
          <div class="w-16 h-16 border-4 border-workers-orange border-t-transparent rounded-full animate-spin"></div>
          <p class="mt-4 text-workers-orange font-bold">Chargement...</p>
        </div>
      </div>
    }
  `
})
export class LoaderComponent {
  loadingService = inject(LoadingService);
}

