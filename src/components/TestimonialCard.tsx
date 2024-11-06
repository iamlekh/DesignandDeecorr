import React from 'react';
import { Quote } from 'lucide-react';
import type { Testimonial } from '../data/testimonials';
import Card3D from './Card3D';

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <Card3D>
      <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-white/20 hover:shadow-2xl transition-shadow duration-300">
        <Quote className="h-8 w-8 text-indigo-400 mb-4" />
        <p className="text-gray-600 mb-4 italic">{testimonial.content}</p>
        <div className="flex items-center">
          <div className="relative w-12 h-12 mr-4">
            <img
              src={testimonial.imageUrl}
              alt={testimonial.name}
              className="rounded-full object-cover w-full h-full"
            />
            <div className="absolute inset-0 rounded-full border-2 border-indigo-500 opacity-0 hover:opacity-100 transition-opacity duration-300" />
          </div>
          <div>
            <h4 className="font-semibold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              {testimonial.name}
            </h4>
            <p className="text-gray-500">{testimonial.role}</p>
          </div>
        </div>
      </div>
    </Card3D>
  );
}