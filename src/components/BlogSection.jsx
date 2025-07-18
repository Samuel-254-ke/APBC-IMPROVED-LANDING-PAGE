import React from 'react';
import { Calendar, User, Tag, ArrowRight, Play, Star, Quote } from 'lucide-react';
import TestimonialSlider from './TestimonialSlider';

const BlogSection = () => {
  // Mock blog data - replace with actual API data when available
  const blogPosts = [
    {
      id: 1,
      title: "The Future of Custom Software Development",
      description: "Exploring emerging trends and technologies that are shaping the future of bespoke software solutions for businesses.",
      category: "Software Development",
      author: "Sir Ngugi Wainaina",
      date: "2 days ago",
      image: "https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop",
      readTime: "5 min read"
    },
    {
      id: 2,
      title: "Mobile App Development Best Practices",
      description: "Essential guidelines and methodologies for creating high-performance mobile applications that users love.",
      category: "Mobile Development",
      author: "Sir Ngugi Wainaina",
      date: "5 days ago",
      image: "https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop",
      readTime: "7 min read"
    },
    {
      id: 3,
      title: "Cloud Solutions for Modern Businesses",
      description: "How cloud computing is revolutionizing business operations and enabling scalable, efficient workflows.",
      category: "Cloud Computing",
     author: "Sir Ngugi Wainaina",
      date: "1 week ago",
      image: "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop",
      readTime: "6 min read"
    },
    {
      id: 4,
      title: "Data Analytics: Turning Information into Insights",
      description: "Leveraging advanced analytics to make data-driven decisions that propel business growth and innovation.",
      category: "Data Analytics",
     author: "Sir Ngugi Wainaina",
      date: "1 week ago",
      image: "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop",
      readTime: "8 min read"
    },
    {
      id: 5,
      title: "Cybersecurity in the Digital Age",
      description: "Essential security measures and best practices to protect your digital assets from evolving cyber threats.",
      category: "Cybersecurity",
      author: "Sir Ngugi Wainaina",
      date: "2 weeks ago",
      image: "https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop",
      readTime: "10 min read"
    },
    {
      id: 6,
      title: "IoT Solutions for Smart Businesses",
      description: "Implementing Internet of Things technologies to create connected, intelligent business environments.",
      category: "IoT",
      author: "Sir Ngugi Wainaina",
      date: "3 weeks ago",
      image: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop",
      readTime: "6 min read"
    }
  ];

  return (
    <section id="blog" className="bg-white py-16">
      <div className="container mx-auto px-8">
        
        {/* Blog Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-slate-800 mb-6">
            Our Blog Stories
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            This is a place where we share our thoughts and ideas.
            <br />
            Take a look at our latest blog posts.
          </p>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 overflow-hidden group cursor-pointer"
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <img 
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4 bg-amber-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                  {post.category}
                </div>
                
                {/* Read Time */}
                <div className="absolute top-4 right-4 bg-black/70 text-white px-2 py-1 rounded text-xs">
                  {post.readTime}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-800 mb-3 leading-tight group-hover:text-amber-600 transition-colors duration-300">
                  {post.title}
                </h3>
                
                <p className="text-slate-600 text-sm leading-relaxed mb-4 line-clamp-3">
                  {post.description}
                </p>
                
                {/* Meta Info */}
                <div className="flex items-center justify-between text-xs text-slate-500 mb-4">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1">
                      <User size={12} />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar size={12} />
                      <span>{post.date}</span>
                    </div>
                  </div>
                </div>
                
                {/* Read More */}
                <div className="flex items-center justify-between">
                  <span className="text-amber-600 font-semibold text-sm group-hover:text-amber-700 transition-colors duration-300">
                    Read More
                  </span>
                  <div className="w-8 h-8 bg-amber-500 rounded-full flex items-center justify-center group-hover:bg-amber-600 transition-colors duration-300">
                    <ArrowRight size={14} className="text-white" />
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

      </div>

      {/* Testimonials Section */}
      <div className="bg-gradient-to-br from-gray-50 to-gray-100 py-16">
        <div className="container mx-auto px-8">
          
          {/* Testimonials Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-800 mb-6">
              What They Say?
            </h2>
          </div>

          {/* Video and Description */}
          <div className="flex flex-col lg:flex-row items-center gap-12 mb-16">
            
            {/* Video */}
            <div className="flex-1 max-w-lg">
              <div className="relative rounded-xl overflow-hidden shadow-2xl group">
                <div className="aspect-video bg-slate-900 flex items-center justify-center">
                  <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/Yh8930cepNk"
                    title="Employee Testimonials"
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
                      <span className="text-sm font-medium">Employee Stories</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="flex-1 text-center lg:text-left">
              <p className="text-lg text-slate-600 leading-relaxed">
                Our employees have the following to say about us.
                <br />
                We are proud to have them as part of our team.
              </p>
            </div>

          </div>

        </div>
      </div>

      {/* Testimonial Slider Section */}
      <TestimonialSlider />
    </section>
  );
};

export default BlogSection;