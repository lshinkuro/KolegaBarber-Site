import { LucideIcon } from 'lucide-react';

export interface Service {
  title: string;
  icon: LucideIcon;
  price: string;
  description: string;
  features: string[];
}