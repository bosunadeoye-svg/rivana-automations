import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export default function Hero() {
  const container = useRef(null);

  useGSAP(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.hero-text', 
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2, stagger: 0.15, ease: 'power3.out', delay: 0.2 }
      );
    }, container);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={container} className="relative w-full h-[100dvh] flex items-end pb-24 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1509048191080-d2984bad6ae5?fm=webp&q=60&w=2000&auto=format&fit=crop" 
          alt="Precise clockwork mechanism representing efficiency" 
          className="w-full h-full object-cover"
          loading="eager"
          fetchpriority="high"
        />
      </div>
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-dark via-dark/70 to-dark/30"></div>

      {/* Content */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-6 md:px-12 flex flex-col items-start justify-end lg:w-2/3 xl:w-1/2">
        <p className="hero-text text-primary/80 font-data text-sm tracking-widest uppercase mb-6 flex items-center gap-4">
          <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
          Rivana Automations
        </p>
        
        <h1 className="flex flex-col mb-8 text-primary">
          <span className="hero-text font-heading font-bold text-5xl md:text-7xl lg:text-8xl tracking-tighter uppercase leading-[0.9]">
            Automate the
          </span>
          <span className="hero-text font-drama italic text-7xl md:text-9xl lg:text-[10rem] leading-[0.8] mt-2">
            Manual.
          </span>
        </h1>
        
        <p className="hero-text text-primary/70 font-heading text-lg md:text-xl max-w-lg mb-10 leading-relaxed">
          Turns manual, repetitive business processes into systems that run without people.
        </p>

        <button 
          onClick={() => window.open('https://calendly.com/bosunadeoye-rivanaautomations/introduction-call', '_blank', 'noopener,noreferrer')}
          className="hero-text group relative overflow-hidden rounded-[2rem] bg-accent text-primary px-10 py-5 font-heading text-lg font-bold tracking-wide uppercase transition-all duration-300 hover:scale-[1.03] active:scale-[0.98]"
        >
          <span className="relative z-10 transition-colors group-hover:text-dark">Book a discovery call</span>
          <div className="absolute inset-0 bg-primary transform scale-x-0 origin-left transition-transform duration-300 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover:scale-x-100"></div>
        </button>
      </div>
    </section>
  );
}
