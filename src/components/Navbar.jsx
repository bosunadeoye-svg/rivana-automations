import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  
  // Only change background based on scroll if we are on the homepage
  const isHome = location.pathname === '/';
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > (isHome ? window.innerHeight - 100 : 50));
    };
    // Initialize immediately
    handleScroll();
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHome]);

  return (
    <div className="fixed top-6 left-0 right-0 z-40 flex justify-center px-4 w-full">
      <nav className={`
        relative overflow-hidden
        px-8 py-4 rounded-[3rem] transition-all duration-500 flex items-center justify-between w-full max-w-5xl
        ${isScrolled || !isHome
          ? 'bg-background/80 backdrop-blur-xl text-dark shadow-lg border border-dark/5' 
          : 'bg-transparent text-primary'}
      `}>
        <Link to="/" className="font-heading font-bold text-xl tracking-tighter uppercase z-10 hover:opacity-70 transition-opacity">
          Rivana
        </Link>
        
        <div className="hidden md:flex items-center gap-8 font-data text-sm z-10">
          <Link to="/#features" className="hover:-translate-y-px transition-transform">Features</Link>
          <Link to="/#philosophy" className="hover:-translate-y-px transition-transform">Philosophy</Link>
          <Link to="/#protocol" className="hover:-translate-y-px transition-transform">Protocol</Link>
          <Link to="/contact" className="hover:-translate-y-px transition-transform">Contact</Link>
        </div>
        
        <button 
          onClick={() => window.open('https://calendly.com/bosunadeoye-rivanaautomations/introduction-call', '_blank', 'noopener,noreferrer')}
          className={`
          relative overflow-hidden rounded-full px-6 py-2.5 font-heading text-sm font-bold tracking-wide uppercase transition-all duration-300 z-10 hover:scale-[1.03] active:scale-[0.98]
          ${isScrolled || !isHome ? 'bg-accent text-primary' : 'bg-primary text-dark'}
          group
        `}>
          <span className="relative z-10 transition-colors group-hover:text-primary">Book a call</span>
          <div className="absolute inset-0 bg-dark transform scale-x-0 origin-left transition-transform duration-300 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover:scale-x-100"></div>
        </button>
      </nav>
    </div>
  );
}
