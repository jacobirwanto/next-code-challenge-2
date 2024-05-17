import {
  Footer,
  LandingHero,
  LandingOverview,
  Navbar,
  OurTeam,
  Testimonials,
} from "@/components";

export default function Home() {
  return (
    <div>
      <Navbar />
      <LandingHero />
      <LandingOverview />
      <OurTeam />
      <Testimonials />
      <Footer />
    </div>
  );
}
