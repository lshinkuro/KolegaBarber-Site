import React from 'react';
import { Scissors } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="fixed w-full bg-white/90 backdrop-blur-sm z-50 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Scissors className="h-8 w-8 text-gray-800" />
            <span className="text-xl font-bold text-gray-800">Kolega Barbershop</span>
          </Link>
          
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="text-gray-600 hover:text-gray-900 transition-colors">Home</Link>
            <Link to="/services" className="text-gray-600 hover:text-gray-900 transition-colors">Services</Link>
            <Link to="/products" className="text-gray-600 hover:text-gray-900 transition-colors">Products</Link>
            <Link to="/barbers" className="text-gray-600 hover:text-gray-900 transition-colors">Our Barbers</Link>
            <Link to="/about" className="text-gray-600 hover:text-gray-900 transition-colors">About</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}