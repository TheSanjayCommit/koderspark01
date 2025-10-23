import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export interface Treatment {
  id: string;
  name: string;
  description: string;
  category: string;
  featured: boolean;
  icon: string;
  created_at: string;
}

export interface Pricing {
  id: string;
  treatment_id: string;
  price_from: number;
  price_to: number | null;
  currency: string;
  created_at: string;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: string;
  order_index: number;
  created_at: string;
}

export interface Testimonial {
  id: string;
  patient_name: string;
  treatment: string;
  rating: number;
  review: string;
  featured: boolean;
  created_at: string;
}

export interface ContactSubmission {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
}

export interface Appointment {
  patient_name: string;
  email: string;
  phone: string;
  preferred_date: string;
  preferred_time: string;
  treatment_type: string;
  message?: string;
}
