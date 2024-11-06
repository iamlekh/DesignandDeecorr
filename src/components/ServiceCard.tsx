import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Card3D from './Card3D';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  link: string;
}

export default function ServiceCard({ title, description, icon, link }: ServiceCardProps) {
  return (
    <Card3D>
      <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-white/20 hover:shadow-2xl transition-shadow duration-300">
        <div className="text-indigo-600 mb-4 transform-gpu transition-transform duration-300 hover:scale-110">
          {icon}
        </div>
        <h3 className="text-xl font-semibold mb-2 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
          {title}
        </h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <Link
          to={link}
          className="inline-flex items-center text-indigo-600 hover:text-indigo-700 transition-colors group"
        >
          Learn More 
          <ArrowRight className="ml-2 h-4 w-4 transform transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </Card3D>
  );
}