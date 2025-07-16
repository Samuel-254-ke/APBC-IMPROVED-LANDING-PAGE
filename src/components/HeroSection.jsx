import React from 'react';
import { Quote, MoreHorizontal } from 'lucide-react';

const HeroSection = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="bg-gray-50">
      <section id="home" className="container mx-auto px-8 pt-20 min-h-screen flex items-center">
        <div className="w-full flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
          
          {/* Left Side - Content */}
          <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left order-2 lg:order-1">
            <div className="max-w-lg">
              <h1 className="text-4xl lg:text-5xl font-bold text-blue-800 mb-6 leading-tight">
                Revolutionizing Tomorrow
              </h1>
              
              <p className="text-gray-700 text-base lg:text-lg leading-relaxed mb-12 max-w-md lg:max-w-none">
                Charting a course beyond convention, we envision a future where our avant-garde software solutions redefine
                possibilities, transforming challenges into opportunities and empowering a world thriving on digital innovation.
              </p>
              
              <div className="max-w-48 mx-auto lg:mx-0">
                <button
                  onClick={() => scrollToSection('contact')}
                  className="w-full bg-amber-500 hover:bg-amber-600 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
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
                  src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
                  alt="Modern office workspace" 
                  className="rounded-lg shadow-2xl w-full max-w-md lg:max-w-lg h-auto object-cover"
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
                    We embark on a quest to weave the extraordinary into the digital fabric. Armed with ingenuity
                    and expertise, we craft bespoke software marvels, propelling our clients into a realm of unparalleled success and
                    technological sophistication.
                  </p>
                  
                  <p className="text-amber-400 text-xs font-medium text-right">Sir Ngugi</p>
                </div>
              </div>

              {/* Decorative Dots */}
              <div className="absolute -right-16 lg:-right-24 bottom-24 text-gray-300 z-0 hidden sm:block">
                <MoreHorizontal size={48} className="opacity-30" />
              </div>
              
            </div>
          </div>
          
        </div>
      </section>
    </div>
  );
};

export default HeroSection;