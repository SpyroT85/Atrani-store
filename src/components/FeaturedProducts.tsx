import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'instant' });

const FeaturedProducts = () => {
  return (
    <section className="py-16" style={{ background: '#F1F1F1' }}>
      <div>
        <div className="flex flex-col gap-12">
        {/* ZX9 Style - Large Featured */}
        <div style={{ maxWidth: '900px', width: '100%', margin: '0 auto', padding: '0 16px' }}>
          <div className="featured-zx9-box rounded-xl overflow-hidden flex flex-col md:flex-row items-center justify-center p-6 sm:p-12 md:p-12 relative" style={{ background: '#BFA57A' }}>
          <div className="md:w-1/2 flex flex-col justify-center items-center md:items-start text-center md:text-left heritage-text" style={{ zIndex: 3, paddingBottom: '2rem', paddingTop: '1rem' }}>
              <h2 className="text-white font-bold" style={{ fontSize: 'clamp(28px, 5vw, 46px)', lineHeight: '1.1', marginBottom: '1.2rem' }}>
                HERITAGE<br />DIVER
              </h2>
              <p className="text-white/90 mb-10 max-w-xs mx-auto md:mx-0 md:max-w-md" style={{ fontSize: '16px', fontWeight: 400 }}>
                A timeless classic featuring exquisite two-tone craftsmanship. This vintage-inspired timepiece embodies the golden age of horology with modern precision and enduring elegance.
              </p>
              <div className="flex justify-center md:justify-start">
                <Link to="/watches/luxury" style={{ display: 'inline-block', width: '100%' }} onClick={scrollToTop}>
                  <Button variant="outline" className="border-2 border-white text-white bg-transparent hover:bg-white hover:text-black uppercase tracking-widest text-sm font-bold cursor-pointer rounded-md w-full" style={{ paddingLeft: '2rem', paddingRight: '2rem', paddingTop: '1.5rem', paddingBottom: '1.5rem', marginTop: '2rem' }}>
                    See Details
                  </Button>
                </Link>
              </div>
          </div>
            <div className="md:w-1/2 flex justify-center items-center mb-8 md:mb-0 relative" style={{ minHeight: '300px' }}>
              <div className="w-lg h-auto flex items-center justify-center mx-auto" style={{ zIndex: 2 }}>
                <img 
                  src="/images/watches/watch2.webp" 
                  alt="ZX9 Chronograph" 
                  className="w-72 h-72 md:w-100 md:h-100 object-contain" 
                  style={{ zIndex: 2 }}
                  width="400"
                  height="400"
                  loading="lazy"
                />
              </div>
              {/* Circular accent */}
              <div className="absolute left-1/2" style={{ top: '50%', transform: 'translate(-50%, -50%)', width: '300px', height: '300px', borderRadius: '50%', background: 'rgba(255,255,255,0.07)', zIndex: 1 }}></div>
            </div>
          </div>
        </div>

        <style>{`
          .featured-zx9-box {
            min-height: 420px;
          }
          .brass-text {
            margin-left: auto;
            margin-right: auto;
          }
          @media (min-width: 768px) {
            .featured-zx9-box {
              height: 450px;
            }
            .heritage-text {
              padding-left: clamp(1.5rem, 6vw, 4rem);
            }
            .pen-text {
              padding-left: clamp(1.5rem, 6vw, 4rem);
            }
            .brass-text {
              margin-left: clamp(0px, 3vw, 30px);
              margin-right: 0;
            }
          }
        `}</style>

        <div style={{ maxWidth: '900px', width: '100%', margin: '0 auto', padding: '0 16px' }}>
          <div className="rounded-xl overflow-hidden p-6 sm:p-12 md:p-10 flex flex-col md:flex-row items-center justify-center relative gap-4 md:gap-0" style={{ background: '#E8E8E8', minHeight: '350px' }}>
            <div className="md:w-1/2 flex flex-col justify-center items-center md:items-start text-center md:text-left pen-text relative z-10 order-2 md:order-2" style={{ paddingTop: '1.25rem', paddingBottom: '2.5rem' }}>
              <h2 className="text-3xl md:text-4xl font-bold text-black" style={{ marginBottom: '1.5rem' }}>
                VINTAGE<br />FOUNTAIN PEN
              </h2>
              <p className="text-black max-w-xs mx-auto md:mx-0" style={{ fontSize: '16px', fontWeight: 400, wordWrap: 'break-word', marginBottom: '2rem' }}>
                This vintage fountain pen is a timeless writing instrument, crafted with precision and elegance to provide a smooth and luxurious writing experience.
              </p>
              <img
                src="/images/pens/pen1.webp"
                alt="Vintage Fountain Pen"
                className="md:hidden w-48 h-auto object-contain rounded-xl"
                style={{ marginBottom: '2rem' }}
                width="360"
                height="320"
                loading="lazy"
              />
              <div className="flex justify-center md:justify-start">
                <Link to="/inkwells" style={{ display: 'inline-block', width: '100%' }} onClick={scrollToTop}>
                <Button variant="outline" className="border-2 border-black text-black bg-transparent hover:bg-black hover:text-white uppercase tracking-widest text-sm font-bold cursor-pointer rounded-md" style={{ paddingLeft: '2rem', paddingRight: '2rem', paddingTop: '1.5rem', paddingBottom: '1.5rem' }}>
                  See Details
                </Button>
                </Link>
              </div>
            </div>
            {/* Desktop image: left column only on md+ */}
            <div className="md:w-1/2 order-1 md:order-1 hidden md:flex justify-center items-center w-full mt-6 md:mt-0">
              <img
                src="/images/pens/pen1.webp"
                alt="Vintage Fountain Pen"
                className="w-48 md:w-lg lg:w-160 h-auto object-contain rounded-xl"
                style={{ maxWidth: 'clamp(320px, 90%, 640px)' }}
                width="480"
                height="400"
                loading="lazy"
              />
            </div>
          </div>
        </div>
        <div style={{ maxWidth: '900px', width: '100%', margin: '0 auto', padding: '0 16px' }}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-13 md:gap-16">
            <div className="rounded-xl overflow-hidden min-h-80 order-1 md:order-2" style={{ background: '#E8E8E8' }}>
              <img 
                src="/images/compasses/compass1.webp" 
                alt="compass-vintage" 
                className="w-full h-full object-cover rounded-xl" 
                width="450"
                height="320"
                loading="lazy"
              />
            </div>
            <div className="rounded-xl overflow-hidden p-6 sm:p-12 md:p-16 flex items-center order-2 md:order-1" style={{ background: '#BFA57A' }}>
              <div className="brass-text flex flex-col items-center md:items-start text-center md:text-left" style={{ paddingTop: '2rem', paddingBottom: '2.5rem' }}>
                <h2 className="text-3xl md:text-4xl font-bold text-white" style={{ marginBottom: '1.2rem' }}>
                  BRASS NAVIGATOR<br />
                  COMPASS
                </h2>
                <p className="text-white/90 mb-8 max-w-xs" style={{ fontSize: '15px', fontWeight: 400 }}>
                  A beautifully crafted vintage brass compass, built for the modern explorer. Precision engineering meets timeless design in this stunning collector's piece.
                </p>
                <div className="flex justify-center md:justify-start w-full">
                  <Link to="/compasses" style={{ display: 'inline-block', width: '100%' }} onClick={scrollToTop}>
                  <Button variant="outline" className="border-2 border-white text-white bg-transparent hover:bg-white hover:text-black uppercase tracking-widest text-sm font-bold cursor-pointer rounded-md" style={{ paddingLeft: '2rem', paddingRight: '2rem', paddingTop: '1.5rem', paddingBottom: '1.5rem', marginTop: '2rem' }}>
                    See Details
                  </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* About Style - Image + Text */}
        <div style={{ maxWidth: '900px', width: '100%', margin: '0 auto', padding: '0 16px' }}>
          <div className="rounded-xl overflow-hidden flex flex-col md:flex-row items-center gap-6 md:gap-12 p-6 sm:p-12 md:p-16" style={{ background: '#F1F1F1' }}>
            <div className="md:w-1/2">
              <div className="w-full h-96 bg-card rounded-xl overflow-hidden">
                <img
                  src="/images/inkwells/inkwell1.webp"
                  alt="Atrani Craftsmanship"
                  className="w-full h-full object-contain rounded-xl"
                  width="384"
                  height="384"
                  loading="lazy"
                />
              </div>
            </div>
            <div className="md:w-1/2 text-center md:text-left">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-black">
                The Art of <span style={{ color: '#BFA57A' }}>Ink</span> & Writing
              </h2>
              <p className="leading-relaxed" style={{ color: '#7D7D7D' }}>
                Discover our curated collection of vintage inkwells, each a masterpiece of glass and metal craftsmanship. From elegant crystal designs to ornate brass pieces, our inkwells bring timeless sophistication to any writing desk and make for stunning collector's items.
              </p>
              <Link to="/inkwells" style={{ display: 'inline-block', width: '100%' }} onClick={scrollToTop}>
                <Button variant="outline" className="bg-[#BFA57A] text-white hover:text-white uppercase tracking-widest text-sm font-bold hover:bg-[#8a5e3a] transition border-none cursor-pointer rounded-md w-full" style={{ paddingLeft: '2rem', paddingRight: '2rem', paddingTop: '1.5rem', paddingBottom: '1.5rem', marginTop: '2rem' }}>
                  See Details
                </Button>
              </Link>
            </div>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
