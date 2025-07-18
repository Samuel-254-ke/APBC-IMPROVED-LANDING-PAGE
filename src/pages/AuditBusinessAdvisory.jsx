import React from 'react';
import { Quote, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import BusinessTopNavbar from '../components/BusinessTopNavbar';
import BusinessServicesSection from '../components/BusinessServicesSection';
import BusinessBeliefsSection from '../components/BusinessBeliefsSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';
import SectorsSection from '../components/SectorsSection';
import TestimonialSlider from '../components/TestimonialSlider';
import financeImg from '../assests/images/financeImg.jpg';


const AuditBusinessAdvisory = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Business Top Navigation */}
      <BusinessTopNavbar />

      {/* Main Header Section */}
      <section id="home" className="bg-gray-50 pt-20">
        <div className="container mx-auto px-8 min-h-screen flex items-center">
          <div className="w-full flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
            
            {/* Left Side - Content */}
            <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left order-2 lg:order-1">
              <div className="max-w-lg">
                <h1 className="text-3xl lg:text-4xl font-bold text-blue-800 mb-6 leading-tight">
                  Navigating Financial Futures: Empowerment through Insight and Audits
                </h1>
                
                <p className="text-gray-700 text-base lg:text-lg leading-relaxed mb-12 text-justify">
                  In a transformative era, we envision a world where financial resources are harnessed with precision and purpose, 
                  driving individuals and communities toward their aspirations. Imagine a landscape where every coin is strategically 
                  aligned with its intended goals, ensuring that investments not only yield returns but also foster growth, innovation, 
                  and sustainability. Our mission is to revolutionize the way money is utilized, creating an ecosystem where financial 
                  efficiency unlocks limitless potential and propels organisations into a prosperous tomorrow.
                </p>
                
                <div className="max-w-48 mx-auto lg:mx-0">
                  <button
                    onClick={() => scrollToSection('contact')}
                    className="w-full bg-blue-800 hover:bg-amber-500 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl border-2 border-blue-800 hover:border-amber-500"
                  >
                    Contact Us
                  </button>
                </div>
              </div>
            </div>

            {/* Right Side - Image with Quote */}
            <div className="w-full lg:w-1/2 order-1 lg:order-2 mt-8 lg:mt-0">
              <div className="relative flex justify-center lg:justify-end">
                
                {/* Main Image */}
                <div className="relative z-10">
                  <img 
                    src= {financeImg}
                    //"https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600&h=650&fit=crop"
                    alt="Financial consulting office" 
                    className="rounded-lg shadow-2xl w-full max-w-md lg:max-w-lg h-auto object-cover"
                    style={{ height: '650px' }}
                  />
                </div>

                {/* Quote Card */}
                <div className="absolute left-4 lg:left-0 bottom-12 lg:bottom-12 max-w-xs bg-slate-800 text-white p-6 rounded-lg shadow-2xl z-20 transform -translate-x-4 lg:translate-x-0">
                  
                  {/* Quote Icon */}
                  <div className="absolute -left-4 -top-2 bg-amber-500 p-2 rounded-full">
                    <Quote size={16} className="text-white" />
                  </div>
                  
                  <div>
                    <p className="text-amber-400 text-xs font-medium text-right mb-2">Our mission</p>
                    
                    <p className="text-sm leading-relaxed mb-3 italic">
                      Empower individuals and organizations with a deep understanding of their financial circumstances, 
                      enabling informed decisions that drive savings, growth, and profitability. We champion professionalism 
                      in small and medium-sized businesses, focusing on the pillars of Profitability, Growth, and Survival 
                      while adapting to emerging trends for sustainable success.
                      <br /><br />
                      Join us in this journey toward a brighter, more prosperous financial future!
                    </p>
                    
                    <p className="text-amber-400 text-xs font-medium text-right">Sir Ngugi</p>
                  </div>
                </div>
                
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* Business Services Section */}
      <BusinessServicesSection />
      
      {/* Sectors Section */}
      <SectorsSection />
      
      {/* Business Beliefs Section */}
      <BusinessBeliefsSection />
      
      {/* Testimonials Section
      <TestimonialSlider /> */}
      
      {/* Contact Section */}
      <ContactSection />
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default AuditBusinessAdvisory;