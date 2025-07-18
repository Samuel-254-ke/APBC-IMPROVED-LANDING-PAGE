import React, { useState, useEffect } from 'react';
import { CheckCircle, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const BusinessBeliefsSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const beliefs = [
    "Providing the best solutions for our clients",
    "Dedicated team of experts helping you achieve goals",
    "Wide range of tailored services for unique needs",
    "Commitment to excellence and client success"
  ];

  const testimonials = [
    {
      text: "We lead the way in providing tax, accounting, and business advisory services to clients in Kenya and beyond. We are a team of professionals who are committed to providing quality services",
      author: "Sir Ngugi Wainaina",
      role: "Chief Executive Officer",
      image: "https://picsum.photos/100/100?random=1"
    },
    {
      text: "The competence, professionalism, and dedication of the team at Ngugi Wainaina & Associates is unmatched. We have been instrumental in the complex world of tax and accounting.",
      author: "Mercy J",
      role: "Senior Associate",
      image: "https://picsum.photos/100/100?random=5"
    },
    {
      text: "As an associate at Ngugi Wainaina & Associates, I witness firsthand the expertise and commitment our team brings to every client. This is truly the best place for comprehensive tax and finance solutions.",
      author: "Pauline M",
      role: "Tax Consultant",
      image: "https://picsum.photos/100/100?random=7"
    }
  ];

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  return (
    <section className="bg-gradient-to-br from-gray-50 to-gray-100 py-16">
      <div className="container mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          
          {/* Left Side - Image */}
          <div className="order-2 lg:order-1">
            <div className="relative">
              <div className="bg-white rounded-2xl p-8 shadow-xl">
                <img 
                  src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
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

        {/* Testimonials Section */}
        <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-slate-800 mb-4">
              What Our Team Says
            </h3>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Hear from our dedicated professionals about their commitment to excellence and client success.
            </p>
          </div>

          {/* Testimonial Slider */}
          <div className="relative max-w-4xl mx-auto">
            
            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-12 h-12 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center text-slate-600 hover:text-amber-500 border border-gray-100"
            >
              <ChevronLeft size={20} />
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-12 h-12 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center text-slate-600 hover:text-amber-500 border border-gray-100"
            >
              <ChevronRight size={20} />
            </button>

            {/* Testimonial Content */}
            <div 
              className="overflow-hidden rounded-2xl"
              onMouseEnter={() => setIsAutoPlaying(false)}
              onMouseLeave={() => setIsAutoPlaying(true)}
            >
              <div 
                className="flex transition-transform duration-700 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="w-full flex-shrink-0 px-4">
                    <div className="bg-gradient-to-br from-blue-50 to-amber-50 rounded-2xl p-8 lg:p-12 relative overflow-hidden min-h-[300px] flex flex-col justify-center">
                      
                      {/* Quote Icon */}
                      <div className="absolute top-6 right-6 opacity-10">
                        <Quote size={60} className="text-slate-800" />
                      </div>
                      
                      {/* Testimonial Text */}
                      <div className="text-center mb-8">
                        <p className="text-lg lg:text-xl text-slate-700 leading-relaxed mb-8 italic relative z-10">
                          "{testimonial.text}"
                        </p>
                        
                        {/* Author */}
                        <div className="flex items-center justify-center gap-4">
                          <img 
                            src={testimonial.image}
                            alt={testimonial.author}
                            className="w-16 h-16 rounded-full object-cover border-4 border-amber-100"
                          />
                          <div className="text-left">
                            <h4 className="font-bold text-slate-800 text-lg">
                              {testimonial.author}
                            </h4>
                            <p className="text-amber-600 text-sm">
                              {testimonial.role}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Dots Navigation */}
            <div className="flex justify-center gap-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`transition-all duration-300 rounded-full ${
                    index === currentSlide 
                      ? 'w-8 h-3 bg-amber-500' 
                      : 'w-3 h-3 bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>

            {/* Auto-play indicator */}
            <div className="flex justify-center mt-4">
              <div className="flex items-center gap-2 text-xs text-gray-500">
                <div className={`w-2 h-2 rounded-full ${isAutoPlaying ? 'bg-green-400' : 'bg-gray-400'}`}></div>
                <span>{isAutoPlaying ? 'Auto-playing' : 'Paused'}</span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default BusinessBeliefsSection;