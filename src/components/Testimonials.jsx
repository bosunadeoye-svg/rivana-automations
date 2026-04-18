import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    tag: "E-COMMERCE · FASHION RETAIL",
    company: "SOLITAIRE LONDON",
    built: "Abandoned cart recovery system with automatic discount codes for high-value carts left unpurchased after 48 hours.",
    quote: "Bosun set this up quickly and it just runs. We're recovering around 15% of abandoned carts — revenue we were leaving on the table before.",
    author: "Director, Solitaire London"
  },
  {
    tag: "E-COMMERCE · FASHION RETAIL",
    company: "FAITHFUL SOULS UK",
    built: "New drop notification system that automatically emails subscribers and sends an SMS broadcast the moment a new product goes live in their store.",
    quote: "Every drop used to mean a mad rush to send emails and post on socials. Now it all goes out the second the product is live. Our first automated drop sold out in under two hours.",
    author: "CEO, Faithful Souls UK"
  }
];

export default function Testimonials() {
  const sectionRef = useRef(null);

  useGSAP(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.testimonial-card',
        { y: 40, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.8, stagger: 0.2, ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%',
          }
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="testimonials" ref={sectionRef} className="py-32 px-6 md:px-12 max-w-7xl mx-auto w-full">
      <div className="mb-20 border-t border-dark/10 pt-16 flex flex-col md:flex-row md:items-end justify-between gap-8">
        <div>
          <h2 className="font-heading font-bold text-4xl md:text-5xl uppercase tracking-tighter mb-4">
            Proof of Concept
          </h2>
          <p className="font-data text-dark/60 max-w-xl text-sm leading-relaxed uppercase tracking-widest">
            Real-world systems engineered for measurable revenue and time recovery.
          </p>
        </div>
        <div className="font-data text-xs font-bold bg-dark text-primary px-3 py-1 rounded-full uppercase tracking-widest w-fit">
          Case Studies
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {testimonials.map((item, idx) => (
          <div 
            key={idx} 
            className="testimonial-card flex flex-col justify-between bg-primary p-8 md:p-12 rounded-[2rem] border border-dark/10 shadow-lg relative overflow-hidden group"
          >
            {/* Minimal aesthetic accent */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-bl-[100%] pointer-events-none transition-transform duration-500 group-hover:scale-110"></div>
            
            <div className="relative z-10 flex flex-col gap-8">
              <div className="flex flex-col gap-2">
                <span className="font-data text-xs font-bold text-accent tracking-widest uppercase">
                  {item.tag}
                </span>
                <h3 className="font-heading font-bold text-3xl uppercase tracking-tight">
                  {item.company}
                </h3>
              </div>

              <div className="font-data text-sm bg-dark/5 p-4 rounded-xl border border-dark/5">
                <span className="font-bold opacity-60 uppercase mr-2">What we built:</span>
                <span className="opacity-80 leading-relaxed">{item.built}</span>
              </div>
              
              <blockquote className="font-drama italic text-3xl md:text-4xl leading-[1.2] text-dark/90 mt-4">
                "{item.quote}"
              </blockquote>
            </div>

            <div className="relative z-10 mt-12 flex items-center gap-4">
              <div className="w-8 h-[2px] bg-accent"></div>
              <p className="font-heading font-bold text-sm uppercase tracking-wider">
                {item.author}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
