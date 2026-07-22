export interface Company {
  id: number;
  name: string;
  logo: string;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  rating: number;
  feedback: string;
}

export interface FAQItem {
  id: number;
  question: string;
  answer: string;
}