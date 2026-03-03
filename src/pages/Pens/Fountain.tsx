import { products } from '@/data/products';
import Layout from '@/components/Layout';
import MotionSection from '@/components/MotionSection';
import { Button } from '@/components/ui/button';

const FountainPens = () => {
  return (
    <Layout>
      <section className="p-0 m-0">
        <div className="w-full bg-background flex items-center justify-center overflow-hidden relative" style={{ minHeight: '22vh', padding: '3rem 0 6rem 0', borderTop: 'none', borderLeft: '1px solid rgba(255,255,255,0.1)', borderRight: '1px solid rgba(255,255,255,0.1)' }}>
          <div className="w-full flex items-center justify-center" style={{ height: '100%' }}>
            <h1 className="text-6xl md:text-7xl text-white tracking-tight drop-shadow-lg" style={{ fontFamily: 'Manrope, sans-serif', fontWeight: 400, textAlign: 'center', fontSize: 'clamp(40px, 7vw, 64px)' }}>Fountain Pens</h1>
          </div>
        </div>
      </section>
      <div className="h-16 md:h-24"></div>

      <div className="flex flex-col w-full gap-20">
        {products.fountainPens.map((product, index) => (
          <MotionSection direction={index % 2 === 0 ? "left" : "right"} key={product.name}>
            <div className="w-full flex justify-center">
              <div
                className={`grid grid-cols-1 md:grid-cols-2 items-center ${index === 0 ? 'md:gap-x-[40rem]' : 'md:gap-x-24'} gap-12 max-w-6xl w-full ${index % 2 === 1 ? 'md:grid-flow-col-dense' : ''}`}
                style={{ minHeight: '520px' }}
              >
                {index % 2 === 1 ? (
                  <>
                    <div className={`flex flex-col items-start px-4 md:px-12 justify-self-start`}>
                      <p className="text-accent font-semibold uppercase tracking-[0.5em] text-base mb-6" style={{marginLeft: '0.5rem'}}>
                        {product.code || `FOUNTAIN${index+1}`}
                      </p>
                      <h2 className="text-black font-bold mb-8 text-left" style={{ fontSize: 'clamp(40px, 7vw, 64px)', lineHeight: '1.1', textAlign: 'left' }}>{product.name}</h2>
                      <p className="text-gray-700 text-lg md:text-xl leading-relaxed mb-4" style={{marginTop: '1.5rem'}}>{product.description}</p>
                      <div className="mb-6"></div>
                      <p className="text-black text-lg font-bold mb-10">{product.price}</p>
                      <Button
                        variant="outline"
                        className="bg-[#d1bb97] text-white hover:text-white uppercase tracking-widest text-sm font-bold transition border-none cursor-pointer rounded-md"
                        style={{ paddingLeft: '4rem', paddingRight: '4rem', paddingTop: '1.5rem', paddingBottom: '1.5rem', marginTop: '2rem' }}
                        aria-label="View product details"
                      >
                        SEE PRODUCT
                      </Button>
                    </div>
                    <div className="flex items-center justify-center rounded-2xl overflow-hidden bg-gray-50 shadow-lg" style={{ width: '520px', height: '520px' }}>
                      <img src={`/images/pens/fountain/fountain${index+1}.webp`} alt={product.name} className="object-cover w-full h-full" width="520" height="520" loading="lazy" />
                    </div>
                  </>
                ) : (
                  <>
                    <div className="flex items-center justify-start rounded-2xl overflow-hidden bg-gray-50 shadow-lg md:ml-[-220px]" style={{ width: '520px', height: '520px' }}>
                      <img src={`/images/pens/fountain/fountain${index+1}.webp`} alt={product.name} className="object-cover w-full h-full" width="520" height="520" loading="lazy" />
                    </div>
                    <div className={`flex flex-col items-start px-4 md:px-12 justify-self-end ${index === 0 ? 'md:-translate-x-38' : ''}`}>
                      <p className="text-accent font-semibold uppercase tracking-[0.5em] text-base mb-6" style={{marginLeft: '0.5rem'}}>
                        {product.code || `FOUNTAIN${index+1}`}
                      </p>
                      <h2 className="text-black font-bold mb-8 text-left" style={{ fontSize: 'clamp(40px, 7vw, 64px)', lineHeight: '1.1', textAlign: 'left' }}>{product.name}</h2>
                      <p className="text-gray-700 text-lg md:text-xl leading-relaxed mb-10" style={{marginTop: '1.5rem'}}>{product.description}</p>
                      <Button
                        variant="outline"
                        className="bg-[#d1bb97] text-white hover:text-white uppercase tracking-widest text-sm font-bold transition border-none cursor-pointer rounded-md"
                        style={{ paddingLeft: '4rem', paddingRight: '4rem', paddingTop: '1.5rem', paddingBottom: '1.5rem', marginTop: '2rem' }}
                        aria-label="View product details"
                      >
                        SEE DETAILS
                      </Button>
                    </div>
                  </>
                )}
              </div>
            </div>
          </MotionSection>
        ))}
      </div>
      <div className="h-24 md:h-14"></div>
      <div className="h-6 md:h-8"></div>
    </Layout>
  );
};

export default FountainPens;
