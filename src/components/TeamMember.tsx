import React from 'react';
import type { TeamMember as TeamMemberType } from '../data/team';
import Card3D from './Card3D';

interface TeamMemberProps {
  member: TeamMemberType;
}

export default function TeamMember({ member }: TeamMemberProps) {
  return (
    <Card3D>
      <div className="bg-white/80 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl border border-white/20">
        <div className="relative overflow-hidden group">
          <img
            src={member.imageUrl}
            alt={member.name}
            className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
        <div className="p-6 backdrop-blur-sm bg-white/50">
          <h3 className="text-xl font-semibold text-gray-900 mb-1 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            {member.name}
          </h3>
          <p className="text-indigo-600 mb-3">{member.role}</p>
          <p className="text-gray-600">{member.bio}</p>
        </div>
      </div>
    </Card3D>
  );
}