import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import ServiceDetails from './components/ServiceDetails';
import Products from './components/Products';
import Barbers from './components/Barbers';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Products />
      <Barbers />
      <Testimonials />
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/service/:serviceId" element={<ServiceDetails />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;