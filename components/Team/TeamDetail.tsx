"use client";

import useTeam from "@/hooks/useTeam";

function OurTeamDetails() {
  const teamMembers = useTeam();

  return (
    <div className="bg-gray-950">
      <div className="p-4 md:p-8 md:px-20 lg:px-36">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className={`bg-gray-900 overflow-hidden my-8 rounded-lg shadow-lg md:flex md:items-center ${
              index % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"
            }`}
          >
            <div className="md:w-1/2">
              <img
                className="h-full w-full object-cover object-top md:h-auto md:w-full rounded-lg"
                src={member.picture}
                alt={member.name}
              />
            </div>
            <div className="p-6 md:p-8 md:w-1/2">
              <h2 className="text-2xl md:text-3xl font-bold text-blue-500">
                {member.name}
              </h2>
              <p className="text-gray-300 font-light mb-4 md:mb-6">
                {member.location}
              </p>
              <p className="text-gray-300 font-extrabold italic text-lg md:text-2xl lg:text-4xl">
                {member.position}
              </p>
              <p className="text-gray-300 font-light mb-4 md:mb-6">
                {member.positionAbb}
              </p>
              <p className="text-gray-300">{member.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default OurTeamDetails;
