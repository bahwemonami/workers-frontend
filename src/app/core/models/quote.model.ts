export interface QuoteForm {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  establishment?: string;
  serviceTypes: string[];
  startDate?: string;
  duration?: string;
  staffCount?: number;
  schedule?: string;
  description?: string;
}

