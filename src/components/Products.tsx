import React from 'react';
import { motion } from 'framer-motion';

const products = [
  {
    name: 'Premium Pomade',
    price: '150K',
    image: 'https://images.unsplash.com/photo-1590004987778-bece5c9adab6?auto=format&fit=crop&q=80',
    description: 'Strong hold, matte finish pomade for the perfect style'
  },
  {
    name: 'Beard Oil',
    price: '120K',
    image: 'https://images.unsplash.com/photo-1580927752452-89d86da3fa0a?auto=format&fit=crop&q=80',
    description: 'Nourishing beard oil for healthy and shiny facial hair'
  },
  {
    name: 'Hair Tonic',
    price: '85K',
    image: 'https://images.unsplash.com/photo-1585751119414-ef2636f8aede?auto=format&fit=crop&q=80',
    description: 'Stimulating hair tonic for healthy scalp and hair growth'
  }
];

export default function Products() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Our Products</h2>
          <p className="text-gray-600">Premium grooming products for the modern gentleman</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <img src={product.image} alt={product.name} className="w-full h-64 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{product.name}</h3>
                <p className="text-2xl font-bold text-gray-800 mb-4">Rp {product.price}</p>
                <p className="text-gray-600">{product.description}</p>
                <button className="mt-4 w-full bg-gray-800 text-white py-2 rounded-lg hover:bg-gray-700 transition-colors">
                  Add to Cart
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}