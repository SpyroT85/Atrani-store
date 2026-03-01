import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section 
      className="bg-background flex items-center justify-center overflow-hidden relative"
      style={{ padding: '8rem 0', minHeight: '90vh', borderTop: 'none', borderLeft: '1px solid rgba(255, 255, 255, 0.1)', borderRight: '1px solid rgba(255, 255, 255, 0.1)' }}
    >
      <div 
        className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 px-4 md:px-32 items-center"
        style={{ alignItems: 'flex-start' }}
      >
        <div className="flex items-start justify-center md:justify-start">
          <div className="md:pr-32" style={{ marginTop: '-2rem' }}>
            <span className="uppercase tracking-[0.5em] text-xs" style={{ color: '#A67C52', marginLeft: '0.35rem' }}>Featured Timepiece</span>
            <h1 className="text-4xl md:text-6xl font-bold mt-4 mb-2 leading-tight tracking-wide text-white">
              OLD TOWN<br/>POCKET WATCH
            </h1>
            <p className="text-white/50 text-sm tracking-wider mb-6" style={{ fontFamily: 'monospace' }}>REF. OT-1883</p>
            <p className="text-white/70 max-w-md text-base md:text-lg leading-relaxed">
              A restored masterpiece from 1883. Where timeless craftsmanship meets the golden age of horology.
            </p>
            <Button 
              variant="outline"
              className="bg-[#A67C52] text-white hover:text-white uppercase tracking-widest text-sm font-bold hover:bg-[#8a5e3a] transition border-none cursor-pointer rounded-md"
              style={{ paddingLeft: '4rem', paddingRight: '4rem', paddingTop: '1.5rem', paddingBottom: '1.5rem', marginTop: '2rem' }}
              aria-label="View product details"
            >
              See Product
            </Button>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <img 
            src="/images/main-image.png" 
            alt="Old Town Pocket Watch" 
            className="w-80 h-80 md:w-130 md:h-130 object-contain" 
            style={{ marginLeft: '-5rem' }}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
