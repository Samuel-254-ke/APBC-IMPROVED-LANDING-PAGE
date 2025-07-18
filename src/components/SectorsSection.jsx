import React from 'react';
import { 
  Wheat, 
  Truck, 
  Building2, 
  GraduationCap, 
  Heart, 
  Factory,
  ArrowRight,
  CheckCircle
} from 'lucide-react';
import clock from '../assests/images/clock.png';

const SectorsSection = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const sectors = [
    {
      id: 1,
      icon: Wheat,
      title: "Agriculture Sector",
      description: "We deal with clients in the agriculture sector, providing them with solutions that help them improve their productivity and efficiency. Matters accounting, tax consultancy, and business advisory services.",
      image: "https://images.pexels.com/photos/974314/pexels-photo-974314.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop"
    },
    {
      id: 2,
      icon: Truck,
      title: "Transport Sector",
      description: "We provide solutions for the transport sector, including accounting, tax consultancy, and business advisory services. Our solutions are tailored to meet the unique needs of each client.",
      image: "https://images.pexels.com/photos/1112598/pexels-photo-1112598.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop"
    },
    {
      id: 3,
      icon: Building2,
      title: "Banking & Finance",
      description: "We provide solutions for the banking and finance sector, including accounting, tax consultancy, and business advisory services. Our solutions are tailored to meet the unique needs of each client.",
      image: "https://images.pexels.com/photos/259027/pexels-photo-259027.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop"
    },
    {
      id: 4,
      icon: GraduationCap,
      title: "Education",
      description: "In the Education sector, we provide solutions that help educational institutions improve their financial management and operational efficiency. Our solutions are tailored to meet the unique needs of each client.",
      image: "https://images.pexels.com/photos/289737/pexels-photo-289737.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop"
    },
    {
      id: 5,
      icon: Heart,
      title: "Healthcare",
      description: "Healthcare sector is one of the most important sectors in the economy. We provide solutions that help healthcare institutions improve their financial management and operational efficiency. Our solutions are tailored to meet the unique needs of each client.",
      image: "https://images.pexels.com/photos/236380/pexels-photo-236380.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop"
    },
    {
      id: 6,
      icon: Factory,
      title: "Manufacturing",
      description: "We provide solutions for the manufacturing sector, including accounting, tax consultancy, and business advisory services. Our solutions are tailored to meet the unique needs of each client.",
      image: "https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop"
    }
  ];

  const beliefs = [
    "Providing the best solutions for our clients",
    "Dedicated team of experts helping you achieve goals",
    "Wide range of tailored services for unique needs",
    "Commitment to excellence and client success"
  ];

  return (
    <section id="sectors" className="bg-white py-16">
      <div className="container mx-auto px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-slate-800 mb-6">
            Our Sectors
          </h1>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            We provide solutions for a wide range of sectors, including agriculture, transport, banking, education, healthcare, and manufacturing.
            <br />
            Our solutions are tailored to meet the unique needs of each sector.
          </p>
        </div>

        {/* Sectors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {sectors.map((sector) => {
            const IconComponent = sector.icon;
            return (
              <div
                key={sector.id}
                className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 overflow-hidden group"
              >
                {/* Image */}
                <div className="relative overflow-hidden">
                  <img 
                    src={sector.image}
                    alt={sector.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  
                  {/* Icon Overlay */}
                  <div className="absolute top-4 left-4 w-12 h-12 bg-white/90 rounded-full flex items-center justify-center group-hover:bg-amber-500 group-hover:text-white transition-all duration-300">
                    <IconComponent size={24} className="text-blue-800 group-hover:text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-800 mb-3 leading-tight group-hover:text-amber-600 transition-colors duration-300">
                    {sector.title}
                  </h3>
                  
                  <p className="text-slate-600 text-sm leading-relaxed mb-4">
                    {sector.description}
                  </p>
                  
                  {/* Learn More */}
                  <div className="flex items-center justify-between">
                    <span className="text-amber-600 font-semibold text-sm group-hover:text-amber-700 transition-colors duration-300">
                      Learn More
                    </span>
                    <div className="w-8 h-8 bg-amber-500 rounded-full flex items-center justify-center group-hover:bg-amber-600 transition-colors duration-300">
                      <ArrowRight size={14} className="text-white" />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* What We Believe In Section */}
      <div className="bg-gradient-to-br from-gray-50 to-gray-100 py-16">
        <div className="container mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Side - Image */}
            <div className="order-2 lg:order-1">
              <div className="relative">
                <div className="bg-white rounded-2xl p-8 shadow-xl">
                  <img 
                    src= {clock}
                    //"https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
                    alt="Professional consultation" 
                    className="w-full h-80 object-cover rounded-xl"
                  />
                </div>
                
                {/* Decorative Elements */}
                <div className="absolute -top-4 -left-4 w-24 h-24 bg-amber-500/10 rounded-full"></div>
                <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-blue-800/10 rounded-full"></div>
              </div>
            </div>

            {/* Right Side - Content */}
            <div className="order-1 lg:order-2">
              <div className="max-w-lg">
                <h4 className="text-amber-600 font-semibold mb-2">A few words about company</h4>
                <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-6">
                  What We Believe In
                </h2>
                
                <p className="text-slate-600 text-lg leading-relaxed mb-8">
                  We believe in providing the best solutions for our clients. Our team of experts is dedicated to helping you achieve your goals. We offer a wide range of services to meet your needs, including accounting, tax consultancy, and business advisory services.
                </p>

                {/* Beliefs List */}
                <div className="space-y-3 mb-8">
                  {beliefs.map((belief, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-amber-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <CheckCircle size={14} className="text-white" />
                      </div>
                      <p className="text-slate-700 text-sm">{belief}</p>
                    </div>
                  ))}
                </div>

                <div className="max-w-48">
                  <button
                    onClick={() => scrollToSection('contact')}
                    className="w-full bg-blue-800 hover:bg-amber-500 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                  >
                    Get Started
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default SectorsSection;