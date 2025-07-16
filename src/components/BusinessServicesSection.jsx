import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Shield, 
  Calculator, 
  FileText, 
  Users, 
  Briefcase, 
  Search,
  ArrowRight,
  CheckCircle,
  TrendingUp,
  Target,
  Award,
  Zap
} from 'lucide-react';

const BusinessServicesSection = () => {
  const navigate = useNavigate();

  const handleRedirectionSoftware = () => {
    navigate('/');
  };

  const handleServiceNavigation = (serviceTitle) => {
    const encodedTitle = encodeURIComponent(serviceTitle);
    navigate(`/business/services/${encodedTitle}`);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const mainServices = [
    {
      title: "Software Development and IT Consultancy",
      action: handleRedirectionSoftware,
      icon: Zap,
      description: "Comprehensive IT solutions and software development services"
    },
    {
      title: "Audit & Business Advisory",
      action: () => handleServiceNavigation("External & Internal Audit"),
      icon: Shield,
      description: "Professional audit and business advisory services"
    }
  ];

  const serviceCategories = [
    {
      icon: Shield,
      title: "External & Internal Audit",
      description: "Comprehensive audit services including regulatory compliance and reporting"
    },
    {
      icon: FileText,
      title: "Accounting Services", 
      description: "Professional accounting, bookkeeping, and financial reporting services"
    },
    {
      icon: Calculator,
      title: "Tax Services",
      description: "Tax planning, compliance, advisory, and optimization services"
    },
    {
      icon: Users,
      title: "Payroll Bureau Service",
      description: "Complete payroll processing, compliance, and advisory services"
    },
    {
      icon: Briefcase,
      title: "Business Advisory Services",
      description: "Strategic planning, financial management, and operational improvement"
    },
    {
      icon: Search,
      title: "Forensic and Investigation Services",
      description: "Forensic accounting, dispute resolution, and investigation services"
    }
  ];

  const companyHighlights = [
    {
      icon: Award,
      title: "Expert Team",
      description: "Seasoned professionals with deep industry expertise"
    },
    {
      icon: Target,
      title: "Tailored Solutions",
      description: "Customized services to meet your unique business needs"
    },
    {
      icon: TrendingUp,
      title: "Growth Focus",
      description: "Strategies designed to drive sustainable business growth"
    },
    {
      icon: CheckCircle,
      title: "Compliance Assured",
      description: "Ensuring full regulatory compliance and risk mitigation"
    }
  ];

  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-slate-800 mb-6">
            Our Awesome Services
          </h1>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            At Ngugi Wainaina & Associates, we pride ourselves on delivering a diverse range of 
            services tailored to meet the unique needs of our clients across Africa.
          </p>
        </div>

        {/* Main Service Buttons */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-16">
          {mainServices.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <button
                key={index}
                onClick={service.action}
                className="group bg-gradient-to-r from-blue-800 to-blue-900 hover:from-amber-500 hover:to-amber-600 text-white p-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-2xl"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white/30 transition-colors duration-300">
                    <IconComponent size={24} className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-left">{service.title}</h3>
                </div>
                <p className="text-blue-100 group-hover:text-amber-100 text-left transition-colors duration-300">
                  {service.description}
                </p>
              </button>
            );
          })}
        </div>

        {/* Service Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {serviceCategories.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                onClick={() => handleServiceNavigation(service.title)}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 group cursor-pointer"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-amber-100 to-amber-200 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent size={32} className="text-amber-600" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 mb-4 leading-tight group-hover:text-amber-600 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-4">
                    {service.description}
                  </p>
                  <div className="flex items-center gap-2 text-amber-600 font-semibold text-sm group-hover:text-amber-700 transition-colors duration-300">
                    <span>Learn More</span>
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Company Information Section */}
        <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 lg:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Side - Content */}
            <div>
              <h4 className="text-amber-600 font-semibold mb-2">A few words about our company</h4>
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-6">
                Ngugi Wainaina & Associates
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-8">
                We are dedicated to providing exceptional consulting services across Africa. With a strong focus on audit, 
                taxation, financial planning, and IT consultancy, we leverage innovative technologies and industry expertise 
                to empower our clients. Our mission is to foster growth and profitability while ensuring compliance and 
                operational efficiency.
              </p>
              
              {/* Company Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {companyHighlights.map((highlight, index) => {
                  const IconComponent = highlight.icon;
                  return (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-amber-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <IconComponent size={16} className="text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-800 mb-1">{highlight.title}</h4>
                        <p className="text-slate-600 text-sm">{highlight.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => scrollToSection('contact')}
                  className="bg-blue-800 hover:bg-amber-500 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  Contact Us
                </button>
                <button
                  onClick={() => handleServiceNavigation("External & Internal Audit")}
                  className="border-2 border-blue-800 text-blue-800 hover:bg-blue-800 hover:text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
                >
                  View Services
                </button>
              </div>
            </div>

            {/* Right Side - Image Grid */}
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <img 
                    src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop"
                    alt="Professional consultation" 
                    className="w-full h-48 object-cover rounded-xl shadow-lg"
                  />
                  <img 
                    src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=400&h=200&fit=crop"
                    alt="Team meeting" 
                    className="w-full h-32 object-cover rounded-xl shadow-lg"
                  />
                </div>
                <div className="space-y-4 mt-8">
                  <img 
                    src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400&h=200&fit=crop"
                    alt="Financial analysis" 
                    className="w-full h-32 object-cover rounded-xl shadow-lg"
                  />
                  <img 
                    src="https://images.pexels.com/photos/6863183/pexels-photo-6863183.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop"
                    alt="Business planning" 
                    className="w-full h-48 object-cover rounded-xl shadow-lg"
                  />
                </div>
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-amber-500/10 rounded-full"></div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-blue-800/10 rounded-full"></div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default BusinessServicesSection;