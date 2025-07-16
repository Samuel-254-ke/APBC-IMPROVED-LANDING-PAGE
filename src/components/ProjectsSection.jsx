import React from 'react';
import { ExternalLink, Smartphone, Calculator, CheckSquare, Globe, Users, ShoppingCart } from 'lucide-react';

const ProjectsSection = () => {
  const projects = [
    {
      id: 1,
      title: "Jibuks Mobile Solution",
      description: "Jibuks Mobile solution is a mobile application that helps businesses manage their sales and inventory effectively.",
      image: "https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      url: "https://jibuks.apbcafrica.com",
      icon: Smartphone,
      category: "Mobile App"
    },
    {
      id: 2,
      title: "Paye Calculator",
      description: "Paye Calculator is a web application that helps businesses calculate their employees' paye tax.",
      image: "https://images.pexels.com/photos/6863183/pexels-photo-6863183.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      url: "https://apbcafrica.com/paye-calculator",
      icon: Calculator,
      category: "Web App"
    },
    {
      id: 3,
      title: "Task Manager",
      description: "Tasks can be assigned to team members, and deadlines can be set to ensure that tasks are completed on time.",
      image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      url: "https://apbcafrica.com/taskhomepage",
      icon: CheckSquare,
      category: "Productivity"
    },
    {
      id: 4,
      title: "Jibuks Web Solution",
      description: "The web application version of the Jibuks Mobile solution.",
      image: "https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      url: "https://jibuks.apbcafrica.com",
      icon: Globe,
      category: "Web App"
    },
    {
      id: 5,
      title: "Nexus HR Solution",
      description: "Nexus HR Solution is a comprehensive HR management system that helps businesses manage their human resources effectively.",
      image: "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      url: "https://hr.apbcafrica.com",
      icon: Users,
      category: "Enterprise"
    },
    {
      id: 6,
      title: "My Spares Guy",
      description: "This is an e-commerce site to help people buy and sell spare parts for their vehicles.",
      image: "https://images.pexels.com/photos/3846217/pexels-photo-3846217.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      url: "https://mysparesguy.apbcafrica.com",
      icon: ShoppingCart,
      category: "E-commerce"
    }
  ];

  const handleProjectClick = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="projects" className="bg-white py-16">
      <div className="container mx-auto px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-slate-800 mb-6 tracking-wide">
            Our Awesome Products
          </h1>
          <p className="text-lg text-slate-600 max-w-4xl mx-auto leading-relaxed">
            Below are our innovative IT products, developed by a dedicated team of expert developers.
            We specialize in creating customized applications tailored to meet the unique needs of our clients.
            <br className="hidden sm:block" />
            From web to mobile solutions, we deliver high-quality products that enhance efficiency and productivity.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => {
            const IconComponent = project.icon;
            return (
              <div
                key={project.id}
                className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 overflow-hidden group cursor-pointer"
                onClick={() => handleProjectClick(project.url)}
              >
                {/* Image Container */}
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4 bg-amber-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                    {project.category}
                  </div>
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                      <div className="flex items-center gap-2 text-white">
                        <IconComponent size={20} />
                        <span className="text-sm font-medium">View Project</span>
                      </div>
                      <ExternalLink size={16} className="text-white" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-amber-100 to-amber-200 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <IconComponent size={20} className="text-amber-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-slate-800 mb-2 leading-tight group-hover:text-amber-600 transition-colors duration-300">
                        {project.title}
                      </h3>
                    </div>
                  </div>
                  
                  <p className="text-slate-600 text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>
                  
                  {/* Action Button */}
                  <div className="flex items-center justify-between">
                    <span className="text-amber-600 font-semibold text-sm group-hover:text-amber-700 transition-colors duration-300">
                      Learn More
                    </span>
                    <div className="w-8 h-8 bg-amber-500 rounded-full flex items-center justify-center group-hover:bg-amber-600 transition-colors duration-300">
                      <ExternalLink size={14} className="text-white" />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 lg:p-12">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">
              Ready to Build Your Next Project?
            </h2>
            <p className="text-slate-600 text-lg mb-8 max-w-2xl mx-auto">
              Let's collaborate to create innovative solutions that drive your business forward. 
              Our expert team is ready to turn your ideas into reality.
            </p>
            <button
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
              }}
              className="bg-amber-500 hover:bg-amber-600 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Start Your Project
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ProjectsSection;