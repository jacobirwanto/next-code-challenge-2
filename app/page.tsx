import {
  Footer,
  LandingCulture,
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
      <LandingCulture />
      <Testimonials />
      <Footer />
    </div>
  );
}
