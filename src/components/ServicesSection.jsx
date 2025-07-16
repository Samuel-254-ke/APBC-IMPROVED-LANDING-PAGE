import React from 'react';
import { 
  Code, 
  Smartphone, 
  Globe, 
  Database, 
  BarChart3, 
  Shield, 
  Wifi, 
  Heart,
  Play
} from 'lucide-react';

const ServicesSection = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleAuditRedirection = () => {
    window.location.href = '/our-service/Audit-Business-Advisory';
  };

  const mainServices = [
    {
      title: "Software Development and IT Consultancy",
      action: null
    },
    {
      title: "Audit & Business Advisory",
      action: handleAuditRedirection
    }
  ];

  const serviceBoxes = [
    {
      icon: Code,
      title: "Custom Software Development",
      description: "Tailored solutions built to meet your specific business requirements"
    },
    {
      icon: Smartphone,
      title: "Mobile Application Development",
      description: "Native and cross-platform mobile apps for iOS and Android"
    },
    {
      icon: Globe,
      title: "Web Development & Cloud Solutions",
      description: "Modern web applications and scalable cloud infrastructure"
    },
    {
      icon: Database,
      title: "Enterprise Solutions (ERP & CRM)",
      description: "Comprehensive business management and customer relationship systems"
    },
    {
      icon: BarChart3,
      title: "Data Analytics & Business Intelligence",
      description: "Transform your data into actionable business insights"
    },
    {
      icon: Shield,
      title: "Cybersecurity Solutions",
      description: "Protect your digital assets with advanced security measures"
    },
    {
      icon: Wifi,
      title: "IoT & Connected Devices",
      description: "Smart device integration and Internet of Things solutions"
    },
    {
      icon: Heart,
      title: "E-learning & Healthcare Solutions",
      description: "Digital platforms for education and healthcare management"
    }
  ];

  return (
    <section id="services" className="bg-white py-16">
      <div className="container mx-auto px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-slate-800 mb-6">
            Our Awesome Services
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            At Apbc Africa, we pride ourselves on delivering a diverse range of 
            services tailored to meet the unique needs of our clients
          </p>
        </div>

        {/* Main Service Buttons */}
        <div className="flex flex-col lg:flex-row gap-6 justify-center mb-16">
          {mainServices.map((service, index) => (
            <button
              key={index}
              onClick={service.action}
              className="flex-1 max-w-md bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              {service.title}
            </button>
          ))}
        </div>

        {/* Service Boxes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {serviceBoxes.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 group"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-amber-100 to-amber-200 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent size={32} className="text-amber-600" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 mb-4 leading-tight">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Team Statement Section */}
        <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 lg:p-12">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            
            {/* Left Side - Content */}
            <div className="flex-1 text-center lg:text-left">
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-6">
                Team's Statement
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-8">
                We are on a mission to seamlessly integrate innovation into the digital landscape. 
                Our commitment to crafting bespoke software solutions empowers organizations to 
                transcend challenges and unlock their full potential. With a team of seasoned experts, 
                we combine creativity and technical prowess to deliver transformative results that 
                drive growth and success.
              </p>
              <div className="max-w-48 mx-auto lg:mx-0">
                <button
                  onClick={() => scrollToSection('contact')}
                  className="w-full bg-amber-500 hover:bg-amber-600 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  Get Started
                </button>
              </div>
            </div>

            {/* Right Side - Video */}
            <div className="flex-1 max-w-lg">
              <div className="relative rounded-xl overflow-hidden shadow-2xl group">
                <div className="aspect-video bg-slate-900 flex items-center justify-center">
                  <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/sh2v_CYMayo"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="absolute inset-0 w-full h-full"
                  ></iframe>
                </div>
                
                {/* Video Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center gap-2 text-white">
                      <Play size={16} />
                      <span className="text-sm font-medium">Watch Our Story</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default ServicesSection;