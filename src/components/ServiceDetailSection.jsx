import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { 
  ArrowLeft, 
  Shield, 
  Calculator, 
  FileText, 
  Users, 
  Briefcase, 
  Search,
  CheckCircle,
  ArrowRight
} from 'lucide-react';
import services from '../data/services';

const ServiceDetailSection = () => {
  const { serviceTitle } = useParams();
  const navigate = useNavigate();

  const service = services.find(s => s.title === decodeURIComponent(serviceTitle));

  if (!service) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-slate-800 mb-4">Service Not Found</h2>
          <button
            onClick={() => navigate('/business/audit-business-advisory')}
            className="bg-blue-800 text-white px-6 py-3 rounded-lg hover:bg-blue-900 transition-colors"
          >
            Back to Services
          </button>
        </div>
      </div>
    );
  }

  const getServiceIcon = (serviceTitle) => {
    const iconMap = {
      "External & Internal Audit": Shield,
      "Tax Services": Calculator,
      "Accounting Services": FileText,
      "Payroll Bureau Service": Users,
      "Business Advisory Services": Briefcase,
      "Forensic and Investigation Services": Search
    };
    return iconMap[serviceTitle] || Shield;
  };

  const handleServiceNavigation = (serviceTitle) => {
    const encodedTitle = encodeURIComponent(serviceTitle);
    navigate(`/business/services/${encodedTitle}`);
  };

  const ServiceIcon = getServiceIcon(service.title);

  // Split subservices into two columns for better layout
  const midpoint = Math.ceil(service.subservices.length / 2);
  const firstColumn = service.subservices.slice(0, midpoint);
  const secondColumn = service.subservices.slice(midpoint);

  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-8">
        
        {/* Back Navigation */}
        <div className="mb-8">
          <button
            onClick={() => navigate('/business/audit-business-advisory')}
            className="flex items-center gap-2 text-blue-800 hover:text-amber-500 transition-colors duration-300 font-semibold"
          >
            <ArrowLeft size={20} />
            <span>Back to Services</span>
          </button>
        </div>

        {/* Service Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 bg-gradient-to-br from-amber-100 to-amber-200 rounded-full flex items-center justify-center">
              <ServiceIcon size={40} className="text-amber-600" />
            </div>
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-slate-800 mb-6">
            {service.title}
          </h1>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            {service.subtitle}
          </p>
        </div>

        {/* Service Navigation Buttons */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
          {services.map((s, index) => {
            const Icon = getServiceIcon(s.title);
            const isActive = s.id === service.id;
            return (
              <button
                key={index}
                onClick={() => handleServiceNavigation(s.title)}
                className={`flex items-center gap-3 p-4 rounded-lg transition-all duration-300 text-left ${
                  isActive 
                    ? 'bg-blue-800 text-white shadow-lg' 
                    : 'bg-gray-50 hover:bg-blue-50 text-slate-800 hover:text-blue-800'
                }`}
              >
                <Icon size={20} className={isActive ? 'text-amber-400' : 'text-amber-600'} />
                <span className="font-semibold text-sm">{s.title}</span>
              </button>
            );
          })}
        </div>

        {/* Subservices Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          
          {/* First Column */}
          <div className="space-y-6">
            {firstColumn.map((subservice, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 group"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-amber-100 to-amber-200 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <CheckCircle size={20} className="text-amber-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-slate-800 mb-3 leading-tight group-hover:text-amber-600 transition-colors duration-300">
                      {subservice.title}
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      {subservice.subtitle}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Second Column */}
          <div className="space-y-6">
            {secondColumn.map((subservice, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 group"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-amber-100 to-amber-200 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <CheckCircle size={20} className="text-amber-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-slate-800 mb-3 leading-tight group-hover:text-amber-600 transition-colors duration-300">
                      {subservice.title}
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      {subservice.subtitle}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-br from-blue-800 to-blue-900 rounded-2xl p-8 lg:p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Get Started with {service.title}?
          </h2>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
            Our expert team is ready to help you achieve your business objectives with our comprehensive {service.title.toLowerCase()} solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => navigate('/business/audit-business-advisory#contact')}
              className="bg-amber-500 hover:bg-amber-600 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
            >
              <span>Contact Us Today</span>
              <ArrowRight size={20} />
            </button>
            <button
              onClick={() => navigate('/business/audit-business-advisory')}
              className="border-2 border-white text-white hover:bg-white hover:text-blue-800 font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              View All Services
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ServiceDetailSection;