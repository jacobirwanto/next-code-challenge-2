import { Footer, Navbar, TeamDetail, TeamHero } from "@/components";

function page() {
  return (
    <div>
      <Navbar />
      <TeamHero />
      <TeamDetail />
      <Footer />
    </div>
  );
}

export default page;
