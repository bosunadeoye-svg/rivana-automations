import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const protocols = [
  {
    step: '01',
    title: 'Audit & Mapping',
    description: 'We map every manual touchpoint, identifying the repetitive processes that drain team capacity and introduce human error.',
    visual: 'gear'
  },
  {
    step: '02',
    title: 'System Architecture',
    description: 'We engineer precise, automated workflows. No bloated software—just lean logic connecting your existing tools into a unified system.',
    visual: 'scanner'
  },
  {
    step: '03',
    title: 'Deployment',
    description: 'The automated system is deployed to run invisibly in the background. Continuous execution without supervision overhead.',
    visual: 'waveform'
  }
];

const GearVisual = () => (
  <svg className="w-full h-full max-w-xs animate-[spin_20s_linear_infinite] opacity-80" viewBox="0 0 100 100">
    <path fill="currentColor" d="M92.1 55.4l-7.7-1.8c-.6-2.4-1.4-4.7-2.5-6.8l4.4-6.6c1.1-1.6.8-3.7-.6-5.1L78 28.1c-1.4-1.4-3.5-1.7-5.1-.6l-6.6 4.4c-2.1-1.1-4.4-1.9-6.8-2.5l-1.8-7.7c-.4-1.9-2.1-3.3-4-3.3H46.3c-2 0-3.6 1.4-4 3.3l-1.8 7.7c-2.4.6-4.7 1.4-6.8 2.5l-6.6-4.4c-1.6-1.1-3.7-.8-5.1.6l-7.1 7.1c-1.4 1.4-1.7 3.5-.6 5.1l4.4 6.6c-1.1 2.1-1.9 4.4-2.5 6.8l-7.7 1.8c-1.9.4-3.3 2.1-3.3 4v10.1c0 2 1.4 3.6 3.3 4l7.7 1.8c.6 2.4 1.4 4.7 2.5 6.8l-4.4 6.6c-1.1 1.6-.8 3.7.6 5.1l7.1 7.1c1.4 1.4 3.5 1.7 5.1.6l6.6-4.4c2.1 1.1 4.4 1.9 6.8 2.5l1.8 7.7c.4 1.9 2.1 3.3 4 3.3h10.1c2 0 3.6-1.4 4-3.3l1.8-7.7c2.4-.6 4.7-1.4 6.8-2.5l6.6 4.4c1.6 1.1 3.7.8 5.1-.6l7.1-7.1c1.4-1.4 1.7-3.5.6-5.1l-4.4-6.6c1.1-2.1 1.9-4.4 2.5-6.8l7.7-1.8c1.9-.4 3.3-2.1 3.3-4V49.5c0-1.9-1.4-3.6-3.3-4zm-42.1 15c-11.3 0-20.4-9.1-20.4-20.4S38.7 29.6 50 29.6 70.4 38.7 70.4 50 61.3 70.4 50 70.4z"/>
  </svg>
);

const ScannerVisual = () => (
  <div className="w-full h-full max-w-xs relative overflow-hidden bg-dark/5 rounded-2xl border border-dark/10">
    <div className="absolute inset-0 grid grid-cols-10 grid-rows-10 gap-1 p-2 opacity-30">
      {Array.from({ length: 100 }).map((_, i) => (
        <div key={i} className="bg-dark/50 rounded-sm"></div>
      ))}
    </div>
    <div className="absolute top-0 left-0 w-full h-[2px] bg-accent shadow-[0_0_15px_rgba(230,59,46,0.8)] animate-[scan_3s_ease-in-out_infinite_alternate]"></div>
    <style>{`
      @keyframes scan {
        0% { transform: translateY(0); }
        100% { transform: translateY(300px); }
      }
    `}</style>
  </div>
);

const WaveformVisual = () => (
  <svg className="w-full h-full max-w-xs overflow-visible" viewBox="0 0 200 100">
    <path 
      d="M 0 50 L 40 50 L 50 20 L 70 90 L 90 10 L 110 70 L 120 50 L 200 50" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="animate-[pulseWave_2s_linear_infinite]"
      style={{ strokeDasharray: 300, strokeDashoffset: 0 }}
    />
    <style>{`
      @keyframes pulseWave {
        0% { stroke-dashoffset: 300; }
        100% { stroke-dashoffset: 0; }
      }
    `}</style>
  </svg>
);

export default function Protocol() {
  const containerRef = useRef(null);

  useGSAP(() => {
    const cards = gsap.utils.toArray('.protocol-card');
    
    cards.forEach((card, i) => {
      if (i === cards.length - 1) return; // Last card doesn't scale down
      
      gsap.to(card, {
        scale: 0.9,
        opacity: 0.5,
        filter: 'blur(20px)',
        scrollTrigger: {
          trigger: cards[i + 1], // Triggered by the NEXT card coming in
          start: 'top bottom',
          end: 'top top',
          scrub: true,
        }
      });
    });
  }, []);

  return (
    <section id="protocol" ref={containerRef} className="bg-background relative w-full pt-20">
      {protocols.map((protocol, i) => (
        <div 
          key={protocol.step}
          className="protocol-card sticky top-0 w-full h-screen flex items-center justify-center p-6 md:p-12 origin-top"
          style={{ zIndex: i }}
        >
          <div className="w-full max-w-6xl bg-primary rounded-[3rem] p-8 md:p-16 shadow-2xl border border-dark/10 h-[80vh] flex flex-col md:flex-row items-center justify-between gap-12 overflow-hidden relative">
            
            <div className="flex-1 flex flex-col gap-6 relative z-10">
              <span className="font-data text-accent font-bold text-xl tracking-widest bg-dark text-primary w-min px-4 py-1 rounded-full">
                {protocol.step}
              </span>
              <h2 className="font-heading font-bold text-5xl md:text-6xl lg:text-7xl uppercase tracking-tighter">
                {protocol.title}
              </h2>
              <p className="font-data text-lg opacity-70 max-w-xl leading-relaxed mt-4">
                {protocol.description}
              </p>
            </div>

            <div className="flex-1 flex items-center justify-center w-full h-full relative z-10 text-dark">
              {protocol.visual === 'gear' && <GearVisual />}
              {protocol.visual === 'scanner' && <ScannerVisual />}
              {protocol.visual === 'waveform' && <WaveformVisual />}
            </div>

            {/* Background huge number */}
            <div className="absolute bottom-[-10%] right-[-5%] font-drama italic text-[30rem] leading-none opacity-5 pointer-events-none select-none">
              {protocol.step}
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
