import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private http = inject(HttpClient);
  private apiUrl = environment.apiUrl;

  // Contact
  submitContact(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/contact`, data);
  }

  // Quote
  submitQuote(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/quote`, data);
  }

  // Newsletter
  subscribeNewsletter(email: string, source: string = 'popup'): Observable<any> {
    return this.http.post(`${this.apiUrl}/newsletter/subscribe`, { email, source });
  }

  // Services
  getServices(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/services`);
  }

  getService(slug: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/services/${slug}`);
  }

  // FAQ
  getFAQ(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/faq`);
  }
}

