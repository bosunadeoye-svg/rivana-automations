import Hero from '../components/Hero';
import Features from '../components/Features';
import Philosophy from '../components/Philosophy';
import Protocol from '../components/Protocol';
import Capabilities from '../components/Capabilities';
import TechStack from '../components/TechStack';
import Testimonials from '../components/Testimonials';

export default function Home() {
  return (
    <main>
      <Hero />
      <Features />
      <Philosophy />
      <Protocol />
      <Capabilities />
      <TechStack />
      <Testimonials />
    </main>
  );
}
