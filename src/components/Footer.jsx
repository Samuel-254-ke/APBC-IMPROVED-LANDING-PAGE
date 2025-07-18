import React from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Facebook, 
  Twitter, 
  Linkedin, 
  Instagram,
  Youtube,
  ArrowUp,
  Code,
  Smartphone,
  Globe,
  Database,
  BarChart3,
  Shield
} from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: 'Home', action: () => scrollToSection('home') },
    { label: 'Services', action: () => scrollToSection('services') },
    { label: 'Projects', action: () => scrollToSection('projects') },
    { label: 'Blog', action: () => scrollToSection('blog') },
    { label: 'Contact', action: () => scrollToSection('contact') }
  ];

  const services = [
    { icon: Code, label: 'Custom Software Development' },
    { icon: Smartphone, label: 'Mobile App Development' },
    { icon: Globe, label: 'Web Development' },
    { icon: Database, label: 'Enterprise Solutions' },
    { icon: BarChart3, label: 'Data Analytics' },
    { icon: Shield, label: 'Cybersecurity' }
  ];

  const products = [
    { label: 'Jibuks Mobile', url: 'https://jibuks.apbcafrica.com' },
    { label: 'Paye Calculator', url: 'https://apbcafrica.com/paye-calculator' },
    { label: 'Task Manager', url: 'https://apbcafrica.com/taskhomepage' },
    { label: 'Nexus HR', url: 'https://hr.apbcafrica.com' },
    { label: 'My Spares Guy', url: 'https://mysparesguy.apbcafrica.com' }
  ];

  const socialLinks = [
    { icon: Facebook, url: '#', label: 'Facebook' },
    { icon: Twitter, url: '#', label: 'Twitter' },
    { icon: Linkedin, url: '#', label: 'LinkedIn' },
    { icon: Instagram, url: '#', label: 'Instagram' },
    { icon: Youtube, url: '#', label: 'YouTube' }
  ];

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="container mx-auto px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            
            {/* Company Info */}
            <div className="lg:col-span-1">
              <div className="mb-6">
                <div className="w-48 h-12 mb-4">
                  <img 
                    src="https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=200&h=60&fit=crop" 
                    alt="APBC Africa Logo" 
                    className="w-full h-full object-contain filter brightness-0 invert"
                  />
                </div>
                <h3 className="text-xl font-bold text-amber-400 mb-4">APBC Africa</h3>
              </div>
              
              <p className="text-gray-300 leading-relaxed mb-6">
                Revolutionizing tomorrow through innovative software solutions. 
                We transform challenges into opportunities and empower businesses 
                with cutting-edge digital innovation.
              </p>

              {/* Social Links */}
              <div className="flex gap-4">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.url}
                      className="w-10 h-10 bg-slate-700 hover:bg-amber-500 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 group"
                      aria-label={social.label}
                    >
                      <IconComponent size={18} className="text-gray-300 group-hover:text-white" />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-bold text-amber-400 mb-6">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <button
                      onClick={link.action}
                      className="text-gray-300 hover:text-amber-400 transition-colors duration-300 flex items-center gap-2 group"
                    >
                      <span className="w-1 h-1 bg-amber-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-lg font-bold text-amber-400 mb-6">Our Services</h4>
              <ul className="space-y-3">
                {services.map((service, index) => {
                  const IconComponent = service.icon;
                  return (
                    <li key={index} className="flex items-center gap-3 text-gray-300 hover:text-amber-400 transition-colors duration-300 group">
                      <IconComponent size={16} className="text-amber-500 group-hover:scale-110 transition-transform duration-300" />
                      <span className="text-sm">{service.label}</span>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Contact Info & Products */}
            <div>
              <h4 className="text-lg font-bold text-amber-400 mb-6">Contact Info</h4>
              
              {/* Contact Details */}
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <MapPin size={18} className="text-amber-500 mt-1 flex-shrink-0" />
                  <div className="text-gray-300 text-sm">
                    <p>Blessed house, 4-1 Ngara Road</p>
                    <p>Nairobi, Kenya</p>
                    <p>P.O Box 7855-00300</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <Phone size={18} className="text-amber-500 flex-shrink-0" />
                  <div className="text-gray-300 text-sm">
                    <p>+254 710 203 243</p>
                    <p>+254 735 277 427</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <Mail size={18} className="text-amber-500 flex-shrink-0" />
                  <a 
                    href="mailto:sirngugiwainaina@gmail.com"
                    className="text-gray-300 hover:text-amber-400 transition-colors duration-300 text-sm break-all"
                  >
                    sirngugiwainaina@gmail.com
                  </a>
                </div>
              </div>

              {/* Products */}
              <div>
                <h5 className="text-md font-semibold text-amber-400 mb-4">Our Products</h5>
                <ul className="space-y-2">
                  {products.map((product, index) => (
                    <li key={index}>
                      <a
                        href={product.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-300 hover:text-amber-400 transition-colors duration-300 text-sm flex items-center gap-2 group"
                      >
                        <span className="w-1 h-1 bg-amber-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                        {product.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="border-t border-slate-700">
          <div className="container mx-auto px-8 py-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="text-center md:text-left">
                <h4 className="text-lg font-bold text-amber-400 mb-2">Stay Updated</h4>
                <p className="text-gray-300 text-sm">
                  Subscribe to our newsletter for the latest updates and insights
                </p>
              </div>
              
              <div className="flex gap-3 w-full md:w-auto max-w-md">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-300"
                />
                <button className="bg-amber-500 hover:bg-amber-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 whitespace-nowrap">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-slate-700">
          <div className="container mx-auto px-8 py-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="text-gray-400 text-sm text-center md:text-left">
                <p>&copy; {currentYear} APBC Africa. All rights reserved.</p>
                {/* <p className="mt-1">Crafted with ❤️ for digital innovation</p> */}
              </div>
              
              <div className="flex items-center gap-6">
                <div className="flex gap-4 text-sm">
                  <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors duration-300">
                    Privacy Policy
                  </a>
                  <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors duration-300">
                    Terms of Service
                  </a>
                </div>
                
                {/* Back to Top Button */}
                <button
                  onClick={scrollToTop}
                  className="w-10 h-10 bg-amber-500 hover:bg-amber-600 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 group"
                  aria-label="Back to top"
                >
                  <ArrowUp size={18} className="text-white group-hover:animate-bounce" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;