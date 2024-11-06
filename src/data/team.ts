export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  imageUrl: string;
}

export const team: TeamMember[] = [
  {
    id: "1",
    name: "Darpan Shah",
    role: "Founder & Principal Designer",
    bio: "With over 15 years of experience in interior design, Darpan brings a unique vision to every project.",
    imageUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a"
  },
  {
    id: "2",
    name: "Priya Patel",
    role: "Senior Interior Designer",
    bio: "Specializing in residential design, Priya creates spaces that perfectly blend functionality with aesthetics.",
    imageUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2"
  },
  {
    id: "3",
    name: "Alex Thompson",
    role: "Commercial Design Specialist",
    bio: "Alex brings expertise in creating innovative commercial spaces that inspire and engage.",
    imageUrl: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7"
  }
];