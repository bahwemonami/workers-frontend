export interface ContactForm {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  establishment?: string;
  serviceType?: 'front-desk' | 'housekeeping' | 'catering' | 'autre';
  message: string;
}

