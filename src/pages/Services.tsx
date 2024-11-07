import React from 'react';
import { useInView } from 'react-intersection-observer';
import {
  Home,
  Building2,
  Video,
  ClipboardList,
  HomeIcon,
  PartyPopper,
  MessageCircle,
} from 'lucide-react';
import ParallaxSection from '../components/ParallaxSection';
import GlassCard from '../components/GlassCard';

interface Service {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
  imageUrl: string;
}

const services: Service[] = [
  {
    id: 'residential',
    icon: <Home className="h-12 w-12" />,
    title: 'Residential Design',
    description:
      'Transform your living space into a personalized sanctuary that perfectly reflects your style and meets your lifestyle needs.',
    features: [
      'Complete home renovations',
      'Room-specific design',
      'Custom furniture selection',
      'Color and material consultation',
      'Lighting design',
      'Space planning and layout optimization'
    ],
    imageUrl: '../data/images/res_des.jpg'
  },
  {
    id: 'commercial',
    icon: <Building2 className="h-12 w-12" />,
    title: 'Commercial Design',
    description:
      'Create inspiring workspaces that boost productivity, reflect your brand identity, and impress your clients.',
    features: [
      'Office space planning',
      'Retail store design',
      'Restaurant and hospitality design',
      'Corporate branding integration',
      'Ergonomic workspace solutions',
      'Commercial lighting design'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1497366216548-37526070297c'
  },
  {
    id: 'consultation',
    icon: <MessageCircle className="h-12 w-12" />,
    title: 'Design Consultation',
    description:
      'Get expert advice and ideas to kickstart your interior design project with our professional consultation services.',
    features: [
      'Initial design assessment',
      'Budget planning',
      'Material and finish selection',
      'Project timeline planning',
      'Vendor recommendations',
      'Style direction guidance'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1577412647266-9c19c5c6d53f'
  },
  {
    id: 'virtual',
    icon: <Video className="h-12 w-12" />,
    title: 'E-Design / Virtual Consultation',
    description:
      'Experience professional interior design services from anywhere in the world through our virtual consultation platform.',
    features: [
      'Online design consultations',
      'Digital mood boards',
      '3D room visualization',
      'Shopping lists and links',
      'Virtual room layouts',
      'Remote design guidance'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1573164713714-d95e436ab8d6'
  },
  {
    id: 'project-management',
    icon: <ClipboardList className="h-12 w-12" />,
    title: 'Project Management',
    description:
      'Leave the complexities of your design project to us. We handle everything from coordination to execution.',
    features: [
      'Contractor coordination',
      'Timeline management',
      'Budget tracking',
      'Quality control',
      'Vendor management',
      'Installation supervision'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1507207611509-ec012433ff52'
  },
  {
    id: 'home-staging',
    icon: <HomeIcon className="h-12 w-12" />,
    title: 'Home Staging',
    description:
      "Maximize your property's appeal and value with our professional home staging services.",
    features: [
      'Pre-sale home preparation',
      'Furniture and decor rental',
      'Space optimization',
      'Professional photography setup',
      'Quick turnaround staging',
      'Vacant home staging'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2'
  },
  {
    id: 'event-styling',
    icon: <PartyPopper className="h-12 w-12" />,
    title: 'Event Styling',
    description:
      'Create unforgettable experiences with our event styling services for both private and corporate occasions.',
    features: [
      'Wedding venue styling',
      'Corporate event design',
      'Holiday decorating',
      'Pop-up shop design',
      'Themed party decoration',
      'Seasonal home styling'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3'
  }
];

export default function Services() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative py-20 bg-gray-900 text-white overflow-hidden">
        <ParallaxSection speed={0.5}>
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6"
              alt="Interior Design"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/50 to-transparent" />
          </div>
        </ParallaxSection>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <GlassCard className="p-8 rounded-2xl max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
              Our Services
            </h1>
            <p className="text-xl max-w-3xl mx-auto text-white/90">
              Comprehensive interior design solutions tailored to your unique
              needs and vision
            </p>
          </GlassCard>
        </div>
      </div>

      {/* Services Section */}
      <section
        ref={ref}
        className={`py-20 transition-opacity duration-1000 ${
          inView ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-16">
            {services.map((service, index) => (
              <div
                key={service.id}
                id={service.id}
                className={`flex flex-col md:flex-row gap-8 ${
                  index % 2 === 1 ? 'md:flex-row-reverse' : ''
                }`}
              >
                <div className="flex-1">
                  <GlassCard className="p-8 rounded-xl h-full transform-gpu transition-all duration-300 hover:scale-105">
                    <div className="text-indigo-600 mb-4">{service.icon}</div>
                    <h2 className="text-3xl font-bold text-gradient mb-4">
                      {service.title}
                    </h2>
                    <p className="text-xl text-gray-600 mb-6">
                      {service.description}
                    </p>
                    <ul className="space-y-3">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-start">
                          <span className="flex-shrink-0 h-6 w-6 text-indigo-600">
                            <svg
                              className="h-6 w-6"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M5 13l4 4L19 7"
                              />
                            </svg>
                          </span>
                          <span className="ml-3 text-gray-600">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </GlassCard>
                </div>
                <div className="flex-1">
                  <div className="relative h-full rounded-xl overflow-hidden group transform-gpu transition-all duration-300 hover:scale-105">
                    <img
                      src={service.imageUrl}
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Decorative Elements */}
      <div className="fixed bottom-0 left-0 w-full h-24 bg-gradient-to-t from-gray-900 to-transparent opacity-20 pointer-events-none" />
      <div className="fixed -bottom-12 -left-12 w-48 h-48 bg-purple-600/30 rounded-full blur-3xl pointer-events-none" />
      <div className="fixed -bottom-12 -right-12 w-48 h-48 bg-indigo-600/30 rounded-full blur-3xl pointer-events-none" />
    </div>
  );
}