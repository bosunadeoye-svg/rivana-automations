import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const STACK = [
  "SHOPIFY", "KLAVIYO", "GORGIAS", "MAKE", "ZAPIER", 
  "STRIPE", "AIRTABLE", "OPENAI", "ZENDESK", "HUBSPOT",
  "ZOHO", "SALESFORCE", "PIPEDRIVE", "ACTIVECAMPAIGN"
];

export default function TechStack() {
  const containerRef = useRef(null);

  useGSAP(() => {
    // Subtle fade in on scroll
    gsap.from(containerRef.current, {
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
      },
      opacity: 0,
      y: 20,
      duration: 1,
      ease: "power3.out"
    });
  }, { scope: containerRef });

  return (
    <section 
      ref={containerRef}
      className="py-24 w-full bg-dark overflow-hidden flex flex-col items-center border-y border-primary/10"
    >
      <div className="mb-12 text-center">
        <h2 className="font-heading text-sm font-bold tracking-[0.2em] uppercase text-primary/50 mb-2">
          Integration Ecosystem
        </h2>
        <p className="font-data text-xs text-primary/30 uppercase tracking-widest">
          Seamless connection with your existing commerce stack
        </p>
      </div>

      <div className="relative flex overflow-x-hidden w-full group py-4">
        {/* Left Gradient Fade */}
        <div className="absolute top-0 bottom-0 left-0 w-32 bg-gradient-to-r from-dark to-transparent z-10 pointer-events-none"></div>
        
        <div className="animate-marquee-slow whitespace-nowrap flex items-center group-hover:[animation-play-state:paused]">
          {[...Array(3)].map((_, i) => (
            <span key={i} className="flex items-center">
              {STACK.map((tech, index) => (
                <span key={`${i}-${index}`} className="flex items-center">
                  <span className="font-heading font-bold text-4xl md:text-6xl text-primary/80 uppercase tracking-tighter hover:text-accent transition-colors duration-300 cursor-default">
                    {tech}
                  </span>
                  <span className="mx-8 md:mx-16 font-data text-accent/50 text-xl">/</span>
                </span>
              ))}
            </span>
          ))}
        </div>

        {/* Right Gradient Fade */}
        <div className="absolute top-0 bottom-0 right-0 w-32 bg-gradient-to-l from-dark to-transparent z-10 pointer-events-none"></div>
      </div>
    </section>
  );
}
