import React from 'react';
import { Gem } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Logo() {
  return (
    <Link to="/" className="flex items-center space-x-3 group">
      <div className="relative">
        <Gem className="h-10 w-10 text-primary transition-colors duration-300 group-hover:text-primary-light" />
        <div className="absolute inset-0 bg-primary/20 blur-lg rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      <div className="flex flex-col">
        <span className="text-2xl font-medium text-text-dark group-hover:text-primary transition-colors duration-300">
          Design and Decorr
        </span>
        <span className="text-sm text-primary tracking-widest">by Darpan</span>
      </div>
    </Link>
  );
}
