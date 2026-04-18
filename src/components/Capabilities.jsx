import { useState, useRef } from 'react';
import { Plus, Minus } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const CAPABILITIES = [
  {
    category: "Sales & Marketing",
    items: [
      "Abandoned Cart Recovery Workflows",
      "VIP Product Drop SMS/Email Blasts",
      "Dynamic Cross-selling Campaigns",
      "Influencer Outreach Sequencing"
    ]
  },
  {
    category: "Customer Service AI",
    items: [
      "Automated Returns & Exchanges Processing",
      "24/7 Conversational AI Chatbots",
      "Ticket Routing & Triage",
      "Order Status Verification Systems"
    ]
  },
  {
    category: "Operations & Inventory",
    items: [
      "Multi-channel Stock Synchronization",
      "Low Inventory Supplier Reordering",
      "Fulfillment Handoff Automation",
      "Pricing & Catalog Updates"
    ]
  },
  {
    category: "Data & CRM",
    items: [
      "B2B Wholesale Lead Scoring",
      "Daily KPI Consolidation & Reporting",
      "Customer Lifetime Value Tracking",
      "Cross-platform Data Cleansing"
    ]
  }
];

export default function Capabilities() {
  const [openIndex, setOpenIndex] = useState(0);
  const containerRef = useRef(null);
  const listRef = useRef(null);

  useGSAP(() => {
    gsap.from(listRef.current.children, {
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 75%",
      },
      y: 30,
      opacity: 0,
      stagger: 0.1,
      duration: 0.8,
      ease: "power3.out"
    });
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="py-32 px-6 md:px-12 max-w-7xl mx-auto w-full">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
        
        {/* Left Column: Context */}
        <div className="lg:col-span-5 flex flex-col justify-start">
          <div className="sticky top-32">
            <h2 className="font-heading font-bold text-5xl md:text-6xl uppercase tracking-tighter mb-6 text-dark leading-none">
              Our <br/><span className="text-accent italic font-drama">Capabilities</span>
            </h2>
            <div className="border-l-2 border-accent pl-4 max-w-sm">
              <p className="font-data text-sm opacity-70 uppercase tracking-widest leading-relaxed mb-4">
                We don't just sell software; we engineer precision systems tailored for e-commerce and retail operations.
              </p>
              <p className="font-data text-xs font-bold text-dark/80 uppercase tracking-widest">
                Including, but not limited to:
              </p>
            </div>
          </div>
        </div>

        {/* Right Column: Accordion List */}
        <div className="lg:col-span-7 flex flex-col" ref={listRef}>
          {CAPABILITIES.map((cap, index) => {
            const isOpen = openIndex === index;
            
            return (
              <div 
                key={index}
                className={`border-b border-dark/10 overflow-hidden transition-colors duration-300 ${isOpen ? 'bg-dark/5' : 'hover:bg-dark/[0.02]'}`}
              >
                <button 
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  className="w-full text-left py-8 px-4 flex items-center justify-between focus:outline-none group"
                >
                  <span className="font-heading text-2xl md:text-3xl font-bold uppercase tracking-tight group-hover:text-accent transition-colors">
                    {cap.category}
                  </span>
                  <div className="w-8 h-8 rounded-full border border-dark/20 flex items-center justify-center group-hover:border-accent transition-colors text-dark/60 group-hover:text-accent">
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>
                
                <div 
                  className={`grid transition-all duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] ${isOpen ? 'grid-rows-[1fr] opacity-100 mb-8' : 'grid-rows-[0fr] opacity-0'}`}
                >
                  <div className="overflow-hidden">
                    <ul className="px-4 space-y-3 font-data text-sm text-dark/70 uppercase tracking-wider">
                      {cap.items.map((item, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <span className="text-accent mt-0.5">■</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
