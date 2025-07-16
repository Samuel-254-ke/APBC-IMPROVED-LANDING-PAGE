import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const TestimonialSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const testimonials = [
    {
      text: "We lead the way in providing tax, accounting, and business advisory services to clients in Kenya and beyond. We are a team of professionals who are committed to providing quality services",
      author: "Sir Ngugi Wainaina",
      role: "Chief Executive Officer",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop"
    },
    {
      text: "The competence, professionalism, and dedication of the team at Ngugi Wainaina & Associates is unmatched. We have been instrumental in the complex world of tax and accounting.",
      author: "Mercy J",
      role: "Senior Associate",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop"
    },
    {
      text: "As an associate at Ngugi Wainaina & Associates, I witness firsthand the expertise and commitment our team brings to every client. This is truly the best place for comprehensive tax and finance solutions.",
      author: "Pauline M",
      role: "Tax Consultant",
      image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop"
    },
    {
      text: "Working with this team has been transformative for our business. Their deep understanding of financial regulations and personalized approach sets them apart.",
      author: "David K",
      role: "Business Advisor",
      image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop"
    },
    {
      text: "The audit services provided exceeded our expectations. Professional, thorough, and delivered with exceptional attention to detail.",
      author: "Sarah M",
      role: "Audit Manager",
      image: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop"
    },
    {
      text: "Their expertise in forensic accounting helped us navigate complex financial challenges with confidence and precision.",
      author: "Michael R",
      role: "Forensic Specialist",
      image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop"
    }
  ];

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % Math.ceil(testimonials.length / getSlidesPerView()));
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials.length]);

  // Get slides per view based on screen size
  const getSlidesPerView = () => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth >= 1024) return 3;
      if (window.innerWidth >= 768) return 2;
    }
    return 1;
  };

  const [slidesPerView, setSlidesPerView] = useState(getSlidesPerView());

  useEffect(() => {
    const handleResize = () => {
      setSlidesPerView(getSlidesPerView());
      setCurrentSlide(0); // Reset to first slide on resize
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const totalSlides = Math.ceil(testimonials.length / slidesPerView);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000); // Resume auto-play after 10s
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000); // Resume auto-play after 10s
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000); // Resume auto-play after 10s
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-8">
        
        {/* Slider Container */}
        <div className="relative">
          
          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-12 h-12 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center text-slate-600 hover:text-amber-500 border border-gray-100"
            disabled={totalSlides <= 1}
          >
            <ChevronLeft size={20} />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-12 h-12 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center text-slate-600 hover:text-amber-500 border border-gray-100"
            disabled={totalSlides <= 1}
          >
            <ChevronRight size={20} />
          </button>

          {/* Testimonials Grid */}
          <div 
            className="overflow-hidden"
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
          >
            <div 
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {Array.from({ length: totalSlides }).map((_, slideIndex) => (
                <div key={slideIndex} className="w-full flex-shrink-0">
                  <div className={`grid gap-6 px-4 ${
                    slidesPerView === 3 ? 'grid-cols-3' : 
                    slidesPerView === 2 ? 'grid-cols-2' : 
                    'grid-cols-1'
                  }`}>
                    {testimonials
                      .slice(slideIndex * slidesPerView, (slideIndex + 1) * slidesPerView)
                      .map((testimonial, index) => (
                        <div
                          key={`${slideIndex}-${index}`}
                          className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 relative overflow-hidden group min-h-[280px] flex flex-col"
                        >
                          {/* Top accent line */}
                          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-400 to-amber-600"></div>
                          
                          {/* Quote icon */}
                          <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                            <Quote size={40} className="text-slate-800" />
                          </div>
                          
                          {/* Testimonial text */}
                          <div className="flex-1 mb-6">
                            <p className="text-slate-700 text-lg leading-relaxed italic relative z-10">
                              "{testimonial.text}"
                            </p>
                          </div>
                          
                          {/* Author section */}
                          <div className="flex items-center gap-4 mt-auto">
                            <div className="relative">
                              <img 
                                src={testimonial.image}
                                alt={testimonial.author}
                                className="w-16 h-16 rounded-full object-cover border-4 border-amber-100 group-hover:border-amber-200 transition-colors duration-300"
                              />
                              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-amber-400/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </div>
                            <div>
                              <h4 className="font-bold text-slate-800 text-lg">
                                {testimonial.author}
                              </h4>
                              <p className="text-amber-600 text-sm font-medium">
                                {testimonial.role}
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Dots Navigation */}
        {totalSlides > 1 && (
          <div className="flex justify-center gap-2 mt-12">
            {Array.from({ length: totalSlides }).map((_, index) => (
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
        )}

        {/* Auto-play indicator */}
        <div className="flex justify-center mt-4">
          <div className="flex items-center gap-2 text-xs text-gray-500">
            <div className={`w-2 h-2 rounded-full ${isAutoPlaying ? 'bg-green-400' : 'bg-gray-400'}`}></div>
            <span>{isAutoPlaying ? 'Auto-playing' : 'Paused'}</span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default TestimonialSlider;