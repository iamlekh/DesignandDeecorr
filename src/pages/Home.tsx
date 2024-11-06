import React from 'react';
import { useInView } from 'react-intersection-observer';
import {
  Home as HomeIcon,
  Building2,
  PaintBucket,
  Lightbulb,
} from 'lucide-react';
import Hero from '../components/Hero';
import ServiceCard from '../components/ServiceCard';
import TestimonialCard from '../components/TestimonialCard';
import { testimonials } from '../data/testimonials';

export default function Home() {
  const [servicesRef, servicesInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [testimonialsRef, testimonialsInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const services = [
    {
      title: 'Residential Design',
      description:
        'Transform your home into a personalized sanctuary that reflects your style and meets your needs.',
      icon: <HomeIcon className="h-8 w-8" />,
      link: '/services#residential',
    },
    {
      title: 'Commercial Design',
      description:
        'Create inspiring workspaces that boost productivity and reflect your brand identity.',
      icon: <Building2 className="h-8 w-8" />,
      link: '/services#commercial',
    },
    {
      title: 'Interior Styling',
      description:
        'Perfect the finishing touches with our expert styling services.',
      icon: <PaintBucket className="h-8 w-8" />,
      link: '/services#styling',
    },
    {
      title: 'Consultation',
      description:
        'Get expert advice and ideas to kickstart your interior design project.',
      icon: <Lightbulb className="h-8 w-8" />,
      link: '/services#consultation',
    },
  ];

  return (
    <div className="min-h-screen">
      <Hero />

      {/* Services Section */}
      <section
        ref={servicesRef}
        className={`py-20 bg-gray-50 transition-opacity duration-1000 ${
          servicesInView ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            {/* <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"> */}
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 via-violet-500 to-purple-600 inline-block text-transparent bg-clip-text mb-8">
              Our Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive interior design solutions tailored to your needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section
        ref={testimonialsRef}
        className={`py-20 transition-opacity duration-1000 ${
          testimonialsInView ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            {/* <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"> */}
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 via-violet-500 to-purple-600 inline-block text-transparent bg-clip-text mb-8">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Don't just take our word for it - hear from our satisfied clients
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
