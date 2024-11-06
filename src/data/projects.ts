export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  images: string[];
  beforeImage?: string;
  afterImage?: string;
  details: {
    challenge: string;
    solution: string;
    result: string;
  };
}

export const projects: Project[] = [
  {
    id: 'modern-living',
    title: 'Modern Living Room Transformation',
    category: 'Residential',
    description:
      'A complete renovation of a dated living space into a contemporary haven.',
    images: [
      'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0',
      'https://images.unsplash.com/photo-1600585154526-990dced4db0d',
      'https://images.unsplash.com/photo-1600573472592-401b489a3cdc'
    ],
    beforeImage: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750',
    afterImage: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d',
    details: {
      challenge:
        'Transform a traditional living room into a modern space while maintaining functionality.',
      solution:
        'Implemented an open floor plan with custom furniture and strategic lighting.',
      result:
        'Created a bright, welcoming space that perfectly balances style and comfort.',
    },
  },
  {
    id: 'luxury-bedroom',
    title: 'Luxury Master Bedroom',
    category: 'Residential',
    description:
      'An elegant master bedroom design featuring custom millwork and premium materials.',
    images: [
      'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af',
      'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267',
      'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af'
    ],
    details: {
      challenge: 'Design a luxurious yet comfortable master retreat.',
      solution: 'Used high-end materials and custom furniture pieces.',
      result: 'A sophisticated sanctuary that exceeds client expectations.',
    },
  },
  {
    id: 'office-space',
    title: 'Corporate Office Design',
    category: 'Commercial',
    description:
      'A modern office space designed for productivity and collaboration.',
    images: [
      'https://images.unsplash.com/photo-1497366216548-37526070297c',
      'https://images.unsplash.com/photo-1497366412874-3415097a27e7',
      'https://images.unsplash.com/photo-1497366754035-f200968a6e72'
    ],
    details: {
      challenge: 'Create an inspiring workspace that promotes productivity.',
      solution: 'Incorporated flexible workstations and collaborative areas.',
      result: 'Increased employee satisfaction and productivity.',
    },
  },
];