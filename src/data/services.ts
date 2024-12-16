import { Scissors, Crown, Baby, User } from 'lucide-react';
import type { Service } from '../types/service';

export const services: Service[] = [
  {
    title: 'Basic Cut',
    icon: Scissors,
    price: '50K',
    description: 'Classic haircut with washing and styling',
    features: ['Hair consultation', 'Precision cutting', 'Basic styling']
  },
  {
    title: 'Premium Cut',
    icon: Crown,
    price: '100K',
    description: 'Luxury treatment with premium products',
    features: ['Premium hair products', 'Hot towel service', 'Head massage', 'Styling consultation']
  },
  {
    title: 'Kids Cut',
    icon: Baby,
    price: '35K',
    description: 'Gentle and fun haircuts for children',
    features: ['Child-friendly environment', 'Patient service', 'Fun atmosphere']
  },
  {
    title: 'Adult Cut & Shave',
    icon: User,
    price: '80K',
    description: 'Complete grooming experience',
    features: ['Haircut', 'Beard trimming', 'Hot towel service']
  }
];