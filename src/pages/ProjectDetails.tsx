import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ChevronLeft, ChevronRight } from 'lucide-react';
import { projects } from '../data/projects';

export default function ProjectDetails() {
  const { id } = useParams<{ id: string }>();
  const project = projects.find((p) => p.id === id);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Project Not Found
          </h2>
          <Link
            to="/portfolio"
            className="inline-flex items-center text-indigo-600 hover:text-indigo-700"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Back to Portfolio
          </Link>
        </div>
      </div>
    );
  }

  const nextImage = () => {
    setCurrentImageIndex((prev) =>
      prev === project.images.length - 1 ? 0 : prev + 1
    );
  };

  const previousImage = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? project.images.length - 1 : prev - 1
    );
  };

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <Link
          to="/portfolio"
          className="inline-flex items-center text-indigo-600 hover:text-indigo-700 mb-8"
        >
          <ArrowLeft className="h-5 w-5 mr-2" />
          Back to Portfolio
        </Link>

        {/* Project Title */}
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          {project.title}
        </h1>
        <p className="text-xl text-gray-600 mb-12">{project.description}</p>

        {/* Image Carousel */}
        <div className="relative rounded-lg overflow-hidden mb-12">
          <img
            src={project.images[currentImageIndex]}
            alt={`${project.title} - Image ${currentImageIndex + 1}`}
            className="w-full h-[600px] object-cover"
          />

          {project.images.length > 1 && (
            <>
              <button
                onClick={previousImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/75 text-white p-2 rounded-full transition-colors"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/75 text-white p-2 rounded-full transition-colors"
              >
                <ChevronRight className="h-6 w-6" />
              </button>

              {/* Image Indicators */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
                {project.images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      currentImageIndex === index ? 'bg-white' : 'bg-white/50'
                    }`}
                  />
                ))}
              </div>
            </>
          )}
        </div>

        {/* Before & After */}
        {project.beforeImage && project.afterImage && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Before & After
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <img
                  src={project.beforeImage}
                  alt="Before"
                  className="w-full h-80 object-cover rounded-lg"
                />
                <p className="text-center mt-2 text-gray-600">Before</p>
              </div>
              <div>
                <img
                  src={project.afterImage}
                  alt="After"
                  className="w-full h-80 object-cover rounded-lg"
                />
                <p className="text-center mt-2 text-gray-600">After</p>
              </div>
            </div>
          </div>
        )}

        {/* Project Details */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 bg-gray-50 p-8 rounded-lg">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              The Challenge
            </h3>
            <p className="text-gray-600">{project.details.challenge}</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Our Solution
            </h3>
            <p className="text-gray-600">{project.details.solution}</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              The Result
            </h3>
            <p className="text-gray-600">{project.details.result}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
