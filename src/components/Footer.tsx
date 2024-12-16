import React from 'react';
import { Phone, Mail, MapPin, Clock, Instagram, Facebook } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Kolega Barbershop</h3>
            <p className="text-gray-400">Premium grooming services for the modern gentleman.</p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <div className="space-y-2">
              <p className="flex items-center text-gray-400">
                <Phone className="w-5 h-5 mr-2" />
                +62 123 456 789
              </p>
              <p className="flex items-center text-gray-400">
                <Mail className="w-5 h-5 mr-2" />
                info@kolegabarbershop.com
              </p>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Location</h3>
            <p className="flex items-center text-gray-400">
              <MapPin className="w-5 h-5 mr-2" />
              Jl. Raya Utama No. 123, Jakarta Selatan
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Opening Hours</h3>
            <div className="flex items-center text-gray-400">
              <Clock className="w-5 h-5 mr-2" />
              <div>
                <p>Mon - Sat: 10:00 - 21:00</p>
                <p>Sun: 11:00 - 20:00</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400">© 2024 Kolega Barbershop. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Instagram className="w-6 h-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Facebook className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}