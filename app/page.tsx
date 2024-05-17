import { Footer, LandingHero, LandingOverview, Navbar } from "@/components";

export default function Home() {
  return (
    <div>
      <Navbar />
      <LandingHero />
      <LandingOverview />
      <Footer />
    </div>
  );
}
