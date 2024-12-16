import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Products from './components/Products';
import Barbers from './components/Barbers';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Navbar />
        <Hero />
        <Services />
        <Products />
        <Barbers />
        <Testimonials />
        <Footer />
      </div>
    </Router>
  );
}

export default App;