import { useState, useEffect, useRef } from 'react';
import { MousePointer2, Save } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

// --- Card 1: Diagnostic Shuffler ---
const DiagnosticShuffler = () => {
  const [cards, setCards] = useState([
    { id: 1, label: "Automated Data Entry", metric: "100%", color: "bg-primary" },
    { id: 2, label: "Invoice Processing", metric: "0ms", color: "bg-background" },
    { id: 3, label: "Client Onboarding", metric: "24/7", color: "bg-white" }
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCards(prev => {
        const newCards = [...prev];
        const last = newCards.pop();
        newCards.unshift(last);
        return newCards;
      });
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-64 w-full flex items-center justify-center perspective-[1000px]">
      {cards.map((card, idx) => {
        // Calculate dynamic styles for the stack
        const zIndex = cards.length - idx;
        const translateY = idx * 15;
        const scale = 1 - idx * 0.05;
        const opacity = 1 - idx * 0.2;

        return (
          <div 
            key={card.id}
            className={`absolute w-3/4 p-6 rounded-2xl shadow-xl border border-dark/10 transition-all duration-[800ms] ease-[cubic-bezier(0.34,1.56,0.64,1)] ${card.color}`}
            style={{
              zIndex,
              transform: `translateY(${translateY}px) scale(${scale})`,
              opacity,
            }}
          >
            <div className="flex justify-between items-center mb-4">
              <span className="font-data text-xs uppercase tracking-wider opacity-60">System Task</span>
              <span className="font-data text-sm font-bold text-accent">{card.metric}</span>
            </div>
            <div className="font-heading font-bold text-lg">{card.label}</div>
            <div className="mt-2 h-1 w-full bg-dark/5 rounded-full overflow-hidden">
              <div className="h-full bg-accent w-full origin-left animate-pulse"></div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

// --- Card 2: Telemetry Typewriter ---
const TelemetryTypewriter = () => {
  const [text, setText] = useState('');
  const fullText = "INITIALIZING WORKFLOW...\n> SCANNING INPUTS [OK]\n> EXTRACTING DATA [OK]\n> UPDATING CRM [OK]\n> SENDING ALERTS [OK]\nPROCESS COMPLETE.\nNO ERRORS DETECTED.";
  
  useEffect(() => {
    let i = 0;
    const typing = setInterval(() => {
      setText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) {
        clearInterval(typing);
        setTimeout(() => { i = 0; setText(''); }, 3000); // Reset and loop
      }
    }, 50);
    return () => clearInterval(typing);
  }, []);

  return (
    <div className="h-64 w-full bg-dark rounded-2xl p-6 shadow-xl border border-dark/10 flex flex-col relative overflow-hidden">
      <div className="flex items-center gap-2 mb-4 text-primary">
        <div className="w-2 h-2 rounded-full bg-accent animate-pulse"></div>
        <span className="font-data text-xs tracking-wider uppercase">Live Feed</span>
      </div>
      <div className="font-data text-sm text-primary/80 whitespace-pre-wrap leading-relaxed">
        {text}
        <span className="inline-block w-2 h-4 bg-accent ml-1 animate-pulse align-middle"></span>
      </div>
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent to-dark/50"></div>
    </div>
  );
};

// --- Card 3: Cursor Protocol Scheduler ---
const CursorProtocolScheduler = () => {
  const containerRef = useRef(null);
  const cursorRef = useRef(null);
  const days = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
  const [activeDay, setActiveDay] = useState(null);

  useGSAP(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ repeat: -1, repeatDelay: 1 });
      
      // Initial position
      tl.set(cursorRef.current, { x: 0, y: 0, opacity: 0 });
      
      // Move to a day (Wednesday - index 3)
      tl.to(cursorRef.current, { x: 120, y: 50, opacity: 1, duration: 1, ease: 'power2.inOut' })
        .to(cursorRef.current, { scale: 0.8, duration: 0.1 }) // Click down
        .add(() => setActiveDay(3)) // Activate day
        .to(cursorRef.current, { scale: 1, duration: 0.1 }) // Click up
        
      // Move to Save button
      tl.to(cursorRef.current, { x: 220, y: 140, duration: 1, ease: 'power2.inOut', delay: 0.5 })
        .to(cursorRef.current, { scale: 0.8, duration: 0.1 }) // Click down
        .to(cursorRef.current, { scale: 1, duration: 0.1 }) // Click up
        .to(cursorRef.current, { opacity: 0, duration: 0.5, delay: 0.5 })
        .add(() => setActiveDay(null)); // Reset
        
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="h-64 w-full bg-primary rounded-2xl p-6 shadow-xl border border-dark/10 relative">
      <div className="font-data text-xs uppercase tracking-wider mb-6 opacity-60">Weekly Schedule</div>
      
      <div className="grid grid-cols-7 gap-2 mb-8 relative z-10">
        {days.map((day, idx) => (
          <div 
            key={idx} 
            className={`
              aspect-square flex items-center justify-center rounded-lg font-heading text-sm transition-colors duration-300
              ${activeDay === idx ? 'bg-accent text-primary font-bold' : 'bg-background border border-dark/10'}
            `}
          >
            {day}
          </div>
        ))}
      </div>

      <div className="flex justify-end relative z-10">
        <button className="flex items-center gap-2 px-4 py-2 bg-dark text-primary rounded-xl font-heading text-sm hover:bg-dark/80 transition-colors">
          <Save size={16} />
          Save
        </button>
      </div>

      {/* Animated Cursor */}
      <div ref={cursorRef} className="absolute top-4 left-4 z-20 pointer-events-none drop-shadow-md">
        <MousePointer2 className="text-dark fill-white w-8 h-8" />
      </div>
    </div>
  );
};

export default function Features() {
  const sectionRef = useRef(null);

  useGSAP(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.feature-card',
        { y: 50, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.8, stagger: 0.15, ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
          }
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="features" ref={sectionRef} className="py-32 px-6 md:px-12 max-w-7xl mx-auto w-full">
      <div className="mb-20">
        <h2 className="font-heading font-bold text-4xl md:text-5xl uppercase tracking-tighter mb-4">
          Engineered Systems
        </h2>
        <p className="font-data text-dark/60 max-w-xl text-sm leading-relaxed uppercase tracking-widest">
          Systems engineered to eliminate manual friction and restore operational capacity.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Card 1 */}
        <div className="feature-card flex flex-col gap-8 bg-background p-8 rounded-[2rem] border border-dark/5 drop-shadow-sm hover:drop-shadow-md transition-shadow">
          <DiagnosticShuffler />
          <div>
            <h3 className="font-heading font-bold text-2xl mb-3">Time Recovery</h3>
            <p className="font-data text-sm opacity-70 leading-relaxed">
              Your team stops doing manually what a system can do automatically, freeing them to focus on the work that actually drives revenue.
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="feature-card flex flex-col gap-8 bg-background p-8 rounded-[2rem] border border-dark/5 drop-shadow-sm hover:drop-shadow-md transition-shadow">
          <TelemetryTypewriter />
          <div>
            <h3 className="font-heading font-bold text-2xl mb-3">Process Reliability</h3>
            <p className="font-data text-sm opacity-70 leading-relaxed">
              Automated workflows don't forget steps, miss follow-ups or let things fall through the cracks. Consistent execution without supervision.
            </p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="feature-card flex flex-col gap-8 bg-background p-8 rounded-[2rem] border border-dark/5 drop-shadow-sm hover:drop-shadow-md transition-shadow">
          <CursorProtocolScheduler />
          <div>
            <h3 className="font-heading font-bold text-2xl mb-3">Fast Implementation</h3>
            <p className="font-data text-sm opacity-70 leading-relaxed">
              No lengthy IT projects, no bloated software packages. You get working automation quickly, without the overhead of a traditional transformation programme.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
