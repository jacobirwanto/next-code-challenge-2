import { Footer, LandingHero, LandingOverview, Navbar } from "@/components";
import OurTeam from "@/components/OurTeam";

export default function Home() {
  return (
    <div>
      <Navbar />
      <LandingHero />
      <LandingOverview />
      <OurTeam />
      <Footer />
    </div>
  );
}
