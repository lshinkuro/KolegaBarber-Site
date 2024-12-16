import React from 'react';
import { motion } from 'framer-motion';
import { Scissors, Crown, Baby, User } from 'lucide-react';

const services = [
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

export default function Services() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-gray-600">Choose from our range of professional services</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow"
            >
              <service.icon className="w-12 h-12 text-gray-800 mb-4" />
              <h3 className="text-xl font-bold mb-2">{service.title}</h3>
              <p className="text-2xl font-bold text-gray-800 mb-4">Rp {service.price}</p>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature) => (
                  <li key={feature} className="text-gray-600 flex items-center">
                    <span className="w-2 h-2 bg-gray-800 rounded-full mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}