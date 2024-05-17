import {
  AboutHero,
  AboutHistory,
  AboutVisionMission,
  Footer,
  Navbar,
  OurTeam,
} from "@/components";

function page() {
  return (
    <div>
      <Navbar />
      <AboutHero />
      <AboutHistory />
      <AboutVisionMission />
      <Footer />
    </div>
  );
}

export default page;
