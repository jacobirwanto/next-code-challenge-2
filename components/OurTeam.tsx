"use client";

import useTeam from "../hooks/useTeam";
import teamMembers from "../utils/teamMembers";

function OurTeam() {
  const teamMembersFromHook = useTeam();
  const teamMembersFromUtils = teamMembers.map((member) => ({
    name: member.name,
  }));

  const mergedTeamMembers = teamMembersFromHook.map(
    (memberFromHook, index) => ({
      ...memberFromHook,
      name: teamMembersFromUtils[index].name,
    })
  );

  return (
    <div className="py-8 px-4 md:px-24 text-center text-gray-300 bg-gray-950">
      <h2 className="text-gray-300 text-center text-2xl md:text-4xl font-bold mb-12">
        Our Team
      </h2>
      <div className="flex flex-wrap justify-center">
        {mergedTeamMembers.map((member, index) => (
          <div
            key={index}
            className="flex flex-col items-center p-2 mb-8 md:mr-8"
          >
            <div className="w-20 h-20 md:w-32 md:h-32 rounded-full overflow-hidden">
              <img
                src={member.picture}
                alt={member.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="mt-2 text-white">
              <p className="text-lg font-semibold">{member.name}</p>
              <p className="text-sm">{member.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default OurTeam;
