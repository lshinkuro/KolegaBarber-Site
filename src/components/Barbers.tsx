import React from 'react';
import { motion } from 'framer-motion';

const barbers = [
  {
    name: 'Alex Johnson',
    role: 'Master Barber',
    image: 'https://images.unsplash.com/photo-1583195764036-6dc248ac07d9?auto=format&fit=crop&q=80',
    experience: '10+ years'
  },
  {
    name: 'Mike Smith',
    role: 'Senior Barber',
    image: 'https://images.unsplash.com/photo-1622296089863-eb7fc530daa8?auto=format&fit=crop&q=80',
    experience: '8 years'
  },
  {
    name: 'David Wilson',
    role: 'Style Specialist',
    image: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&q=80',
    experience: '5 years'
  }
];

export default function Barbers() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Meet Our Expert Barbers</h2>
          <p className="text-gray-600">Skilled professionals dedicated to your perfect look</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {barbers.map((barber, index) => (
            <motion.div
              key={barber.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <img src={barber.image} alt={barber.name} className="w-full h-80 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{barber.name}</h3>
                <p className="text-gray-600 mb-2">{barber.role}</p>
                <p className="text-gray-600">Experience: {barber.experience}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}