import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

export default function Philosophy() {
  const containerRef = useRef(null);
  const bgRef = useRef(null);

  useGSAP(() => {
    const ctx = gsap.context(() => {
      // Parallax background
      gsap.to(bgRef.current, {
        yPercent: 30,
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true
        }
      });

      // Text reveal
      const lines = gsap.utils.toArray('.reveal-line');
      lines.forEach((line) => {
        gsap.fromTo(line, 
          { y: 50, opacity: 0 },
          { 
            y: 0, opacity: 1, duration: 1, ease: 'power3.out',
            scrollTrigger: {
              trigger: line,
              start: 'top 85%',
            }
          }
        );
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="philosophy" ref={containerRef} className="relative w-full py-40 bg-dark text-primary overflow-hidden flex items-center justify-center min-h-[80vh]">
      {/* Parallax Background */}
      <div 
        ref={bgRef}
        className="absolute top-[-20%] left-0 w-full h-[140%] z-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1518005020951-eccb494ad742?fm=webp&q=30&w=1200&auto=format&fit=crop")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          mixBlendMode: 'luminosity'
        }}
      />

      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 md:px-12 flex flex-col items-start gap-12">
        <p className="reveal-line font-data text-sm uppercase tracking-widest opacity-60">
          The Objective
        </p>

        <div className="flex flex-col gap-8 w-full">
          <p className="reveal-line font-heading text-xl md:text-3xl text-primary/70">
            Your team's time is too valuable for repetitive tasks.
          </p>

          <p className="reveal-line font-heading font-bold uppercase tracking-tighter text-5xl md:text-7xl lg:text-8xl leading-[1.1] max-w-4xl">
            Scale revenue. <br/>
            <span className="text-accent block mt-4">Don't scale overhead.</span>
          </p>
        </div>
      </div>
    </section>
  );
}
