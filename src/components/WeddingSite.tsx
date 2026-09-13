import Hero from "@/components/Hero";
import Countdown from "@/components/Countdown";
import Events from "@/components/Events";
import Venue from "@/components/Venue";
import FamilyNote from "@/components/FamilyNote";
import Footer from "@/components/Footer";

export default function WeddingSite() {
  return (
    <main>
      <Hero />
      <Countdown />
      <Events />
      <Venue />
      <FamilyNote />
      <Footer />
    </main>
  );
}
