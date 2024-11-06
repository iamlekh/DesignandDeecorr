import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import ParallaxSection from './ParallaxSection';
import GlassCard from './GlassCard';

export default function Hero() {
  return (
    <div className="relative h-screen overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage:
            'url(https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80)',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/50 to-transparent" />
      </div>

      <ParallaxSection
        className="relative h-full flex items-center"
        speed={0.5}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <GlassCard className="p-8 rounded-2xl max-w-3xl mx-auto transform-gpu hover:scale-105 transition-transform duration-300">
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 via-violet-500 to-purple-600 inline-block text-transparent bg-clip-text mb-8">
              {/* <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gradient"> */}
              Transform Your Space
              <br />
              Into Something Extraordinary
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90">
              Award-winning interior design studio creating beautiful,
              functional spaces that inspire and delight.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/portfolio"
                className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-3 rounded-full font-semibold flex items-center hover:bg-white/30 transform-gpu transition-all duration-300 hover:-translate-y-1"
              >
                {/* className="text-4xl md:text-6xl font-bold bg-gradient-to-r
                from-blue-600 via-violet-500 to-purple-600 inline-block
                text-transparent bg-clip-text mb-8">  */}
                Explore Our Work
                <ArrowRight className="ml-2 h-5 w-5 animate-float" />
              </Link>
              <Link
                to="/contact"
                className="border-2 border-white/50 text-white px-8 py-3 rounded-full font-semibold flex items-center backdrop-blur-sm hover:bg-white/30 transition-colors duration-300"
              >
                Get in Touch
              </Link>
            </div>
          </GlassCard>
        </div>
      </ParallaxSection>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-gray-900 to-transparent" />
      <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-purple-600/30 rounded-full blur-3xl" />
      <div className="absolute -bottom-12 -right-12 w-48 h-48 bg-indigo-600/30 rounded-full blur-3xl" />
    </div>
  );
}
