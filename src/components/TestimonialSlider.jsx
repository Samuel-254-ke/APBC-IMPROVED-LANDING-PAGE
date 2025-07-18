import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const TestimonialSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const testimonials = [
    {
      text: "Friends, such as we desire, are dreams and fables. Friendship demands the ability to do without it.",
      author: "Sir Ngugi Wainaina",
      role: "Chief Executive Officer",
      image: "https://picsum.photos/100/100?random=1"
    },
    {
      text: "Being a developer is kind of like being a wizard. You can make anything happen.",
      author: "David W",
      role: "Software developer",
      image: "https://i.ibb.co/MsLkjzD/Whats-App-Image-2025-01-20-at-11-25-09-removebg-preview.png"
    },
    {
      text: "To be a good developer, you need to be like a sponge. You need to absorb as much information as you can.",
      author: "Ismael N",
      role: "Software developer",
      image: "https://i.ibb.co/ZgXrfxT/unnamed-njihia.jpg"
    },
    {
      text: "UI/UX is a critical part of any website. It's the first impression, and it can make or break a site.",
      author: "Vincensher O",
      role: "UX Designer",
      image: "https://i.ibb.co/pzszLG5/IMG-4863-obonyo.jpg"
    },
    {
      text: "The best way to learn is by doing. The only way to learn is by doing.",
      author: "Sylvester O",
      role: "Software developer",
      image: "https://i.ibb.co/Hq6NzTC/A-3-1.jpg"
    },
    {
      text: "I love coding because it's like solving puzzles. It's fun and challenging.",
      author: "Samuel W",
      role: "Technical Lead",
      image: "https://picsum.photos/100/100?random=6"
    },
    {
      text: "As a developer, you need to be able to think outside the box. You need to be creative and innovative.",
      author: "Yvonne N",
      role: "Software developer",
      image: "https://i.ibb.co/TKBrybK/IMG-5776-kadogo-1.jpg"
    },
    {
      text: "You need to be passionate about coding. You need to love what you do.",
      author: "Victor A",
      role: "Software developer",
      image: "https://i.ibb.co/mySZmwF/Whats-App-Image-2025-01-20-at-11-25-11-removebg-preview.png"
    },
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
    <section className="py-10 bg-white">
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