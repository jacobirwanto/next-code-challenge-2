import {
  AboutHero,
  AboutHistory,
  AboutStatistics,
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
      <OurTeam />
      <AboutStatistics />
      <Footer />
    </div>
  );
}

export default page;
