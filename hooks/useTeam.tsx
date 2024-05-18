import { useEffect, useState } from "react";
import teamMembers from "../utils/teamMembers";

interface TeamMember {
  id: string;
  name: string;
  email: string;
  phone: string;
  picture: string;
  location: string;
  position: string;
  description: string;
  positionAbb: string;
}

function useTeam() {
  const [teamMembersState, setTeamMembersState] = useState<TeamMember[]>([]);

  useEffect(() => {
    const storedData = localStorage.getItem("teamMembers");
    if (storedData) {
      setTeamMembersState(JSON.parse(storedData));
    } else {
      const fetchData = async () => {
        try {
          const response = await fetch("https://randomuser.me/api/?results=5");
          const data = await response.json();
          const members = data.results.map((user: any, index: number) => ({
            id: user.login.uuid,
            email: user.email,
            phone: user.phone,
            picture: user.picture.large,
            location: `${user.location.city}, ${user.location.country}`,
            ...teamMembers[index],
          }));
          setTeamMembersState(members);
          localStorage.setItem("teamMembers", JSON.stringify(members));
        } catch (error) {
          console.error("Error fetching team members:", error);
        }
      };
      fetchData();
    }
  }, []);

  return teamMembersState;
}

export default useTeam;
