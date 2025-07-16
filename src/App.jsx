import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import ProjectsSection from './components/ProjectsSection';
import BlogSection from './components/BlogSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import AuditBusinessAdvisory from './pages/AuditBusinessAdvisory';
import ServiceDetailSection from './components/ServiceDetailSection';

function App() {
  return (
    <Routes>
      <Route path="/" element={
        <div className="min-h-screen bg-gray-100">
          <Header />
          <HeroSection />
          <ServicesSection />
          <ProjectsSection />
          <BlogSection />
          <ContactSection />
          <Footer />
        </div>
      } />
      <Route path="/business/audit-business-advisory" element={<AuditBusinessAdvisory />} />
      <Route path="/business/services/:serviceTitle" element={
        <div className="min-h-screen bg-gray-50">
          <div className="fixed top-0 left-0 w-full z-50 bg-white/95 backdrop-blur-md shadow-lg">
            <div className="container mx-auto px-8 h-20 flex items-center justify-between">
              <Link 
                to="/business/audit-business-advisory"
                className="flex items-center gap-3 text-blue-800 hover:text-amber-500 transition-colors duration-300"
              >
                <span className="font-semibold">← Back to Business Services</span>
              </Link>
              
              <div className="w-48 h-12">
                <img 
                  src="https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=200&h=60&fit=crop" 
                  alt="Company Logo" 
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>
          <div className="pt-20">
            <ServiceDetailSection />
            <ContactSection />
            <Footer />
          </div>
        </div>
      } />
    </Routes>
  );
}

export default App;