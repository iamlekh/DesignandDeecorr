import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { projects } from '../data/projects';

const categories = ['All', 'Residential', 'Commercial'];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = projects.filter(
    project => activeCategory === 'All' || project.category === activeCategory
  );

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative py-20 bg-gray-900 text-white">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1600585154526-990dced4db0d"
            alt="Portfolio"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Portfolio</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Explore our collection of thoughtfully designed spaces
          </p>
        </div>
      </div>

      {/* Portfolio Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter */}
          <div className="flex justify-center mb-12">
            <div className="inline-flex rounded-md shadow-sm">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-6 py-2 text-sm font-medium ${
                    activeCategory === category
                      ? 'bg-indigo-600 text-white'
                      : 'bg-white text-gray-700 hover:bg-gray-50'
                  } ${
                    category === categories[0]
                      ? 'rounded-l-md'
                      : category === categories[categories.length - 1]
                      ? 'rounded-r-md'
                      : ''
                  } border border-gray-300`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <Link
                key={project.id}
                to={`/portfolio/${project.id}`}
                className="group"
              >
                <div className="relative overflow-hidden rounded-lg shadow-lg aspect-w-16 aspect-h-9">
                  <img
                    src={project.images[0]}
                    alt={project.title}
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h3 className="text-xl font-semibold text-white mb-2">
                        {project.title}
                      </h3>
                      <p className="text-gray-200">{project.category}</p>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}