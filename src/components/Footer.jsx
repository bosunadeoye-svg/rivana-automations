import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-dark text-primary rounded-t-[4rem] pt-24 pb-12 px-6 md:px-12 w-full mt-24 relative z-20">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
        
        <div className="col-span-1 lg:col-span-2 flex flex-col gap-6">
          <Link to="/" className="font-heading font-bold text-3xl tracking-tighter uppercase hover:opacity-80 transition-opacity w-fit">
            Rivana Automations
          </Link>
          <p className="font-data text-sm opacity-70 max-w-sm leading-relaxed uppercase tracking-wider">
            Turns manual, repetitive business processes into systems that run without people.
          </p>
          <div className="mt-8 flex items-center gap-3">
            <div className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse"></div>
            <span className="font-data text-xs uppercase tracking-widest text-green-500/80">
              System Operational
            </span>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <div className="font-data text-xs opacity-50 uppercase tracking-widest mb-2">Navigation</div>
          <Link to="/#features" className="font-heading text-sm hover:text-accent transition-colors w-fit">Features</Link>
          <Link to="/#philosophy" className="font-heading text-sm hover:text-accent transition-colors w-fit">Philosophy</Link>
          <Link to="/#protocol" className="font-heading text-sm hover:text-accent transition-colors w-fit">Protocol</Link>
          <Link to="/contact" className="font-heading text-sm hover:text-accent transition-colors w-fit">Contact</Link>
        </div>

        <div className="flex flex-col gap-4">
          <div className="font-data text-xs opacity-50 uppercase tracking-widest mb-2">Legal</div>
          <Link to="/privacy-policy" className="font-heading text-sm hover:text-accent transition-colors w-fit">Privacy Policy</Link>
          <Link to="/terms-and-conditions" className="font-heading text-sm hover:text-accent transition-colors w-fit">Terms of Service</Link>
        </div>

      </div>

      <div className="max-w-7xl mx-auto w-full pt-8 border-t border-primary/10 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="font-data text-xs opacity-40">
          &copy; {new Date().getFullYear()} Rivana Automations. All rights reserved.
        </div>
        <div className="font-data text-xs opacity-40 uppercase tracking-widest">
          Initiate Sequence
        </div>
      </div>
    </footer>
  );
}
