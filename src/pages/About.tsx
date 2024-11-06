import React from 'react';
import { useInView } from 'react-intersection-observer';
import { Award, Users, Target } from 'lucide-react';
import TeamMember from '../components/TeamMember';
import { team } from '../data/team';

export default function About() {
  const [missionRef, missionInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [teamRef, teamInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const values = [
    {
      icon: <Award className="h-8 w-8" />,
      title: 'Excellence',
      description:
        'We strive for excellence in every project, delivering exceptional results that exceed expectations.',
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: 'Collaboration',
      description:
        'We work closely with our clients, ensuring their vision is at the heart of every design decision.',
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: 'Innovation',
      description:
        'We embrace innovative solutions and stay ahead of design trends to create unique spaces.',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative py-20 bg-gray-900 text-white">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1497366216548-37526070297c"
            alt="Office Interior"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Us</h1>
          <p className="text-xl max-w-3xl mx-auto">
            We are passionate about creating beautiful, functional spaces that
            inspire and transform lives.
          </p>
        </div>
      </div>

      {/* Mission & Values Section */}
      <section
        ref={missionRef}
        className={`py-20 transition-opacity duration-1000 ${
          missionInView ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            {/* <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"> */}
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 via-violet-500 to-purple-600 inline-block text-transparent bg-clip-text mb-8">
              Our Mission
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              To create exceptional spaces that enhance the way people live,
              work, and interact, while delivering unparalleled value and
              satisfaction to our clients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value) => (
              <div key={value.title} className="text-center">
                <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-indigo-100 text-indigo-600 mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section
        ref={teamRef}
        className={`py-20 bg-gray-50 transition-opacity duration-1000 ${
          teamInView ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            {/* <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"> */}
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 via-violet-500 to-purple-600 inline-block text-transparent bg-clip-text mb-8">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our talented team of designers brings creativity, expertise, and
              passion to every project.
            </p>
          </div>

          <div className="flex justify-center">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl">
              {team.map((member) => (
                <TeamMember key={member.id} member={member} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
