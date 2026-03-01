import { Button } from '@/components/ui/button';

const FeaturedProducts = () => {
  return (
    <section className="py-16" style={{ background: '#FFFFFF' }}>
      <div>
        <div className="flex flex-col gap-12">
        {/* ZX9 Style - Large Featured */}
        <div style={{ maxWidth: '900px', width: '100%', margin: '0 auto', padding: '0 16px' }}>
          <div className="featured-zx9-box rounded-xl overflow-hidden flex flex-col md:flex-row items-center p-12 md:p-16 relative" style={{ background: '#BFA57A' }}>
          <div className="md:w-1/2 flex flex-col justify-center md:items-start items-center text-left" style={{ zIndex: 3, marginLeft: '60px' }}>
            <h2 className="text-white font-bold mb-6" style={{ fontSize: '56px', lineHeight: '1.1' }}>
              HERITAGE<br />DIVER
              </h2>
              <p className="text-white/90 mb-10 max-w-md" style={{ fontSize: '16px', fontWeight: 400 }}>
                A timeless classic featuring exquisite two-tone craftsmanship. This vintage-inspired timepiece embodies the golden age of horology with modern precision and enduring elegance.
              </p>
              <Button variant="outline" className="border-2 border-white text-white bg-transparent hover:bg-white hover:text-black uppercase tracking-widest text-sm font-bold cursor-pointer rounded-md" style={{ paddingLeft: '2rem', paddingRight: '2rem', paddingTop: '1.5rem', paddingBottom: '1.5rem', marginTop: '2rem' }}>
                See Product
              </Button>
            </div>
            <div className="md:w-1/2 flex justify-center mb-8 md:mb-0 relative">
              <div className="w-lg h-128 flex items-center justify-center mx-auto" style={{ zIndex: 2 }}>
                <img 
                  src="/images/watch2.png" 
                  alt="ZX9 Chronograph" 
                  className="w-100 h-100 object-contain" 
                  style={{ zIndex: 2 }}
                />
              </div>
              {/* Circular accent */}
              <div className="absolute left-1/2" style={{ top: '50%', transform: 'translate(-50%, -50%)', width: '400px', height: '400px', borderRadius: '50%', background: 'rgba(255,255,255,0.07)', zIndex: 1 }}></div>
            </div>
          </div>
        </div>

        <style>{`
          .featured-zx9-box {
            min-height: 420px;
            height: 520px;
          }
        `}</style>

        {/* ZX7 Style - Image Background */}
        <div style={{ maxWidth: '900px', width: '100%', margin: '0 auto', padding: '0 16px' }}>
          <div className="rounded-xl overflow-hidden p-12 md:p-16 min-h-80 flex items-center relative" style={{ background: '#E8E8E8' }}>
            <img 
              src="/images/pen1.png" 
              alt="Vintage Fountain Pen" 
              className="relative w-full h-full object-contain rounded-xl" 
              style={{ maxWidth: '40%', marginLeft: '5%', marginRight: '15%' }}
            />
            <div className="relative z-10" style={{ marginLeft: '20px' }}>
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-black">VINTAGE FOUNTAIN PEN</h2>
              <p className="text-black mb-6 max-w-xs" style={{ fontSize: '16px', fontWeight: 400, wordWrap: 'break-word' }}>
                This vintage fountain pen is a timeless writing instrument, crafted with precision and elegance to provide a smooth and luxurious writing experience.
              </p>
              <Button variant="outline" className="border-2 border-black text-black bg-transparent hover:bg-black hover:text-white uppercase tracking-widest text-sm font-bold cursor-pointer rounded-md" style={{ paddingLeft: '2rem', paddingRight: '2rem', paddingTop: '1.5rem', paddingBottom: '1.5rem', marginTop: '2rem' }}>
                See Product
              </Button>
            </div>
          </div>
        </div>
        <div style={{ maxWidth: '900px', width: '100%', margin: '0 auto', padding: '0 16px' }}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="rounded-xl overflow-hidden p-12 md:p-16 flex items-center" style={{ background: '#BFA57A' }}>
              <div style={{ marginLeft: '50px' }}>
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">BRASS NAVIGATOR COMPASS</h2>
                <p className="text-white/90 mb-8 max-w-xs" style={{ fontSize: '15px', fontWeight: 400 }}>A beautifully crafted vintage brass compass, built for the modern explorer. Precision engineering meets timeless design in this stunning collector's piece.</p>
                <Button variant="outline" className="border-2 border-white text-white bg-transparent hover:bg-white hover:text-black uppercase tracking-widest text-sm font-bold cursor-pointer rounded-md" style={{ paddingLeft: '2rem', paddingRight: '2rem', paddingTop: '1.5rem', paddingBottom: '1.5rem', marginTop: '2rem' }}>
                  See Product
                </Button>
              </div>
            </div>
            <div className="rounded-xl overflow-hidden min-h-80" style={{ background: '#E8E8E8' }}>
              <img 
                src="/images/compass1.png" 
                alt="compass-vintage" 
                className="w-full h-full object-cover rounded-xl" 
              />
            </div>
          </div>
        </div>
        {/* About Style - Image + Text */}
        <div style={{ maxWidth: '900px', width: '100%', margin: '0 auto', padding: '0 16px' }}>
          <div className="rounded-xl overflow-hidden flex flex-col md:flex-row items-center gap-12 p-12 md:p-16" style={{ background: '#FFFFFF' }}>
            <div className="md:w-1/2">
              <div className="w-full h-96 bg-card rounded-xl overflow-hidden">
                <img
                  src="/images/inkwell1.png"
                  alt="Atrani Craftsmanship"
                  className="w-full h-full object-contain rounded-xl"
                />
              </div>
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-black">
                The Art of <span style={{ color: '#BFA57A' }}>Ink</span> & Writing
              </h2>
              <p className="leading-relaxed" style={{ color: '#7D7D7D' }}>
                Discover our curated collection of vintage inkwells, each a masterpiece of glass and metal craftsmanship. From elegant crystal designs to ornate brass pieces, our inkwells bring timeless sophistication to any writing desk and make for stunning collector's items.
              </p>
              <Button variant="outline" className="bg-[#BFA57A] text-white hover:text-white uppercase tracking-widest text-sm font-bold hover:bg-[#8a5e3a] transition border-none cursor-pointer rounded-md" style={{ paddingLeft: '2rem', paddingRight: '2rem', paddingTop: '1.5rem', paddingBottom: '1.5rem', marginTop: '2rem' }}>
                See Product
              </Button>
            </div>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
