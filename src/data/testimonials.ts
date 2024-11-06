export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  imageUrl: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Sarah Johnson",
    role: "Homeowner",
    content: "Darpan transformed our house into a dream home. The attention to detail and understanding of our vision was exceptional.",
    imageUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330"
  },
  {
    id: "2",
    name: "Michael Chen",
    role: "Restaurant Owner",
    content: "The team's creativity and professionalism made our restaurant renovation project a huge success.",
    imageUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e"
  },
  {
    id: "3",
    name: "Emily Williams",
    role: "CEO",
    content: "Working with Design and Decor by Darpan was a game-changer for our office space. They created the perfect balance of functionality and aesthetics.",
    imageUrl: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80"
  }
];