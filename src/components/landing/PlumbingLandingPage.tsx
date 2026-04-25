import { Navigation } from './Navigation';
import { EmergencyCTA } from './EmergencyCTA';
import { HeroSection } from './HeroSection';
import { ScrollPipeStory } from './ScrollPipeStory';
import { ServicesGrid } from './ServicesGrid';
import { TrustSection } from './TrustSection';
import { ContactSection } from './ContactSection';
import { FinalCTA } from './FinalCTA';
import { Footer } from './Footer';

export function PlumbingLandingPage() {
  return (
    <div
      className="min-h-screen text-white"
      style={{ background: '#020817', overflowX: 'hidden' }}
    >
      <EmergencyCTA />
      <Navigation />
      <HeroSection />
      <ScrollPipeStory />
      <ServicesGrid />
      <TrustSection />
      <ContactSection />
      <FinalCTA />
      <Footer />
    </div>
  );
}
