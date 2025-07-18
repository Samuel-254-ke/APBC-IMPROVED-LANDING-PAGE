import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Home, 
  Menu,
  Headphones,
  Briefcase,
  FileText,
  Contact,
  Grid3X3,
  ChevronDown
} from 'lucide-react';
import logo from '../assests/images/logoIcon.png';

const Header = () => {
  const [scrollY, setScrollY] = useState(0);
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDropdownClick = (dropdownId) => {
    setActiveDropdown(activeDropdown === dropdownId ? null : dropdownId);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const navItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'projects', label: 'Projects', icon: Briefcase },
    { id: 'blog', label: 'Blog', icon: FileText },
    { id: 'contact', label: 'Contact', icon: Contact },
  ];

  const handleAuditNavigation = () => {
    navigate('/business/audit-business-advisory');
    setActiveDropdown(null);
  };

  const servicesDropdownItems = [
    { label: 'Software Development & IT Consultancy', action: null },
    { label: 'Audit & Business Advisory', action: handleAuditNavigation },
  ];

  const productsDropdownItems = [
    { label: 'PAYE Computation', href: '/paye-calculator' },
    { label: 'Jibuks', href: 'https://jibuks.apbcafrica.com/' },
    { label: 'HR', href: 'https://jibuks.apbcafrica.com/' },
    { label: 'Task Manager', href: '/taskhomepage' },
    { label: 'Client Management', href: '/client/login' },
  ];

  return (
    <>
      {/* Sidebar - we'll implement this next */}
      {sidebarOpen && (
        <>
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
            onClick={() => setSidebarOpen(false)}
          />
          <div className="fixed top-0 right-0 h-full w-80 bg-white shadow-xl z-50 lg:hidden">
            <div className="flex flex-col h-full">
              {/* Sidebar Header */}
              <div className="flex items-center justify-between p-6 border-b border-gray-200">
                <div className="w-32 h-10">
                  <img 
                  src={logo}
                    // src="https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=200&h=60&fit=crop" 
                    alt="Company Logo" 
                    className="w-full h-full object-contain"
                  />
                </div>
                <button
                  onClick={() => setSidebarOpen(false)}
                  className="p-2 text-gray-500 hover:text-amber-500 transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Sidebar Navigation */}
              <div className="flex-1 overflow-y-auto py-6">
                <nav className="px-6 space-y-2">
                  {/* Main Navigation Items */}
                  {navItems.map((item) => {
                    const IconComponent = item.icon;
                    return (
                      <button
                        key={item.id}
                        onClick={() => {
                          scrollToSection(item.id);
                          setSidebarOpen(false);
                        }}
                        className="w-full flex items-center gap-3 px-4 py-3 text-slate-800 font-medium hover:bg-amber-50 hover:text-amber-500 rounded-lg transition-all duration-300"
                      >
                        <IconComponent size={20} className="text-amber-500" />
                        <span>{item.label}</span>
                      </button>
                    );
                  })}

                  {/* Services Section */}
                  <div className="pt-4">
                    <button
                      onClick={() => handleDropdownClick('mobile-services')}
                      className="w-full flex items-center justify-between px-4 py-3 text-slate-800 font-medium hover:bg-amber-50 hover:text-amber-500 rounded-lg transition-all duration-300"
                    >
                      <div className="flex items-center gap-3">
                        <Headphones size={20} className="text-amber-500" />
                        <span>Services</span>
                      </div>
                      <ChevronDown 
                        size={16} 
                        className={`transition-transform duration-300 ${
                          activeDropdown === 'mobile-services' ? 'rotate-180' : ''
                        }`} 
                      />
                    </button>
                    
                    {activeDropdown === 'mobile-services' && (
                      <div className="ml-8 mt-2 space-y-1">
                        {servicesDropdownItems.map((item, index) => (
                          <button
                            key={index}
                            onClick={() => {
                              if (item.action) item.action();
                              setSidebarOpen(false);
                            }}
                            className="w-full text-left block px-4 py-2 text-sm text-slate-600 hover:text-amber-500 hover:bg-amber-50 rounded-md transition-all duration-300"
                          >
                            {item.label}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Products Section */}
                  <div className="pt-2">
                    <button
                      onClick={() => handleDropdownClick('mobile-products')}
                      className="w-full flex items-center justify-between px-4 py-3 text-slate-800 font-medium hover:bg-amber-50 hover:text-amber-500 rounded-lg transition-all duration-300"
                    >
                      <div className="flex items-center gap-3">
                        <Grid3X3 size={20} className="text-amber-500" />
                        <span>Our Products</span>
                      </div>
                      <ChevronDown 
                        size={16} 
                        className={`transition-transform duration-300 ${
                          activeDropdown === 'mobile-products' ? 'rotate-180' : ''
                        }`} 
                      />
                    </button>
                    
                    {activeDropdown === 'mobile-products' && (
                      <div className="ml-8 mt-2 space-y-1">
                        {productsDropdownItems.map((item, index) => (
                          <a
                            key={index}
                            href={item.href}
                            onClick={() => setSidebarOpen(false)}
                            className="block px-4 py-2 text-sm text-slate-600 hover:text-amber-500 hover:bg-amber-50 rounded-md transition-all duration-300"
                            target={item.href.startsWith('http') ? '_blank' : '_self'}
                            rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                          >
                            {item.label}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </>
      )}

      {/* Main Header */}
      <nav 
        className={`fixed top-0 left-0 w-full z-30 bg-white/95 backdrop-blur-md shadow-lg transition-all duration-300 ${
          scrollY > 100 ? 'h-20' : 'h-25'
        }`}
      >
        <div className="container mx-auto px-8 h-full flex items-center justify-between">
          {/* Logo */}
          <button 
            onClick={() => scrollToSection('home')}
            className="flex items-center cursor-pointer"
          >
            <div className="w-48 h-15">
              <img 
                 src= {logo}
                //  "https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=200&h=60&fit=crop" 
                alt="Company Logo" 
                className="w-full h-full object-contain"
              />
            </div>
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="lg:hidden p-2 text-amber-500 hover:text-slate-800 transition-colors duration-300"
          >
            <Menu size={22} />
          </button>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6">
            {/* Main Nav Items */}
            {navItems.map((item) => {
              const IconComponent = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="flex items-center gap-2 px-4 py-2 text-slate-800 font-semibold hover:text-amber-500 transition-all duration-300 whitespace-nowrap group"
                >
                  <IconComponent size={20} className="text-amber-500 group-hover:scale-110 transition-transform duration-300" />
                  <span>{item.label}</span>
                </button>
              );
            })}

            {/* Services Dropdown */}
            <div className="relative">
              <button
                onClick={() => handleDropdownClick('services')}
                className="flex items-center gap-2 px-4 py-2 text-slate-800 font-semibold hover:text-amber-500 transition-all duration-300 whitespace-nowrap group"
              >
                <Headphones size={20} className="text-amber-500 group-hover:scale-110 transition-transform duration-300" />
                <span>Services</span>
                <ChevronDown size={16} className={`transition-transform duration-300 ${activeDropdown === 'services' ? 'rotate-180' : ''}`} />
              </button>

              {activeDropdown === 'services' && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-white/98 backdrop-blur-md rounded-lg border border-amber-500/10 shadow-xl p-2 z-50">
                  {servicesDropdownItems.map((item, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        if (item.action) item.action();
                        setActiveDropdown(null);
                      }}
                      className="w-full text-left flex items-center gap-2 px-4 py-3 text-slate-800 hover:bg-amber-500/10 hover:text-amber-500 transition-all duration-300 rounded-md whitespace-nowrap"
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Products Dropdown (Right Side) */}
          <div className="hidden lg:flex relative ml-10">
            <div className="relative">
            <button
              onClick={() => handleDropdownClick('products')}
              className="flex items-center gap-2 px-4 py-2 text-slate-800 font-semibold hover:text-amber-500 transition-all duration-300 whitespace-nowrap group"
            >
              <Grid3X3 size={20} className="text-amber-500 group-hover:scale-110 transition-transform duration-300" />
              <span>Our Products</span>
              <ChevronDown size={16} className={`transition-transform duration-300 ${activeDropdown === 'products' ? 'rotate-180' : ''}`} />
            </button>

            {activeDropdown === 'products' && (
              <div className="absolute top-full right-0 mt-2 w-64 bg-white/98 backdrop-blur-md rounded-lg border border-amber-500/10 shadow-xl p-2 z-50">
                {productsDropdownItems.map((item, index) => (
                  <a
                    key={index}
                    href={item.href}
                    className="flex items-center gap-2 px-4 py-3 text-slate-800 hover:bg-amber-500/10 hover:text-amber-500 transition-all duration-300 rounded-md whitespace-nowrap"
                    target={item.href.startsWith('http') ? '_blank' : '_self'}
                    rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            )}
            </div>
          </div>
        </div>
      </nav>

      {/* Click outside to close dropdowns */}
      {activeDropdown && (
        <div 
          className="fixed inset-0 z-20" 
          onClick={() => setActiveDropdown(null)}
        />
      )}
    </>
  );
};

export default Header;