import { useEffect } from 'react';
import { Mail, Phone } from 'lucide-react';

export default function Contact() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="pt-40 pb-32 px-6 md:px-12 max-w-4xl mx-auto w-full min-h-[80vh] flex flex-col justify-center">
      <div className="mb-16">
        <h1 className="font-heading font-bold text-5xl md:text-7xl uppercase tracking-tighter mb-4 text-dark">
          Contact Us
        </h1>
        <p className="font-data text-dark/60 text-sm uppercase tracking-widest">
          Get in touch to discuss how we can automate your operations.
        </p>
      </div>
      
      <div className="flex flex-col gap-8">
        
        <div className="flex items-center gap-6 p-6 rounded-2xl border border-dark/10 bg-dark/5 hover:bg-dark/10 transition-colors w-fit pr-12">
          <div className="w-12 h-12 rounded-full bg-dark text-primary flex items-center justify-center">
            <Mail className="w-5 h-5" />
          </div>
          <div className="flex flex-col">
            <span className="font-data text-xs uppercase tracking-widest text-dark/50 mb-1">Email</span>
            <a href="mailto:bosunadeoye@rivanaautomations.com" className="font-heading text-xl font-bold hover:text-accent transition-colors">
              bosunadeoye@rivanaautomations.com
            </a>
          </div>
        </div>

        <div className="flex items-center gap-6 p-6 rounded-2xl border border-dark/10 bg-dark/5 hover:bg-dark/10 transition-colors w-fit pr-12">
          <div className="w-12 h-12 rounded-full bg-dark text-primary flex items-center justify-center">
            <Phone className="w-5 h-5" />
          </div>
          <div className="flex flex-col">
            <span className="font-data text-xs uppercase tracking-widest text-dark/50 mb-1">Phone</span>
            <a href="tel:07454349456" className="font-heading text-xl font-bold hover:text-accent transition-colors">
              07454349456
            </a>
          </div>
        </div>

      </div>
    </main>
  );
}
