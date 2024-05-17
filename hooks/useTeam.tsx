import { useEffect, useState } from "react";

interface TeamMember {
  id: string;
  name: string;
  email: string;
  phone: string;
  picture: string;
  location: string;
  role: string;
}

function useTeam() {
  const roles = ["CEO", "CTO", "COO", "CMO", "CFO"];
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([]);

  useEffect(() => {
    const storedData = localStorage.getItem("teamMembers");
    if (storedData) {
      setTeamMembers(JSON.parse(storedData));
    } else {
      const fetchTeamMembers = async () => {
        const response = await fetch("https://randomuser.me/api/?results=5");
        const data = await response.json();
        const members = data.results.map((user: any, index: number) => ({
          id: user.login.uuid,
          name: `${user.name.first} ${user.name.last}`,
          email: user.email,
          phone: user.phone,
          picture: user.picture.large,
          location: `${user.location.city}, ${user.location.country}`,
          role: roles[index],
        }));
        setTeamMembers(members);
        localStorage.setItem("teamMembers", JSON.stringify(members));
      };

      fetchTeamMembers();
    }
  }, []);

  return teamMembers;
}

export default useTeam;
