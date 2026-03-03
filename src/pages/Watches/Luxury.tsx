import { products } from '@/data/products';
import Layout from '@/components/Layout';
import MotionSection from '@/components/MotionSection';
import CartButton from '@/components/ui/CartButton';

const Luxury = () => {
  return (
    <Layout>
      <section className="p-0 m-0">
        <div className="w-full bg-background flex items-center justify-center overflow-hidden relative" style={{ minHeight: '22vh', padding: '3rem 0 6rem 0', borderTop: 'none', borderLeft: '1px solid rgba(255,255,255,0.1)', borderRight: '1px solid rgba(255,255,255,0.1)' }}>
          <div className="w-full flex items-center justify-center" style={{ height: '100%' }}>
              <h1 className="text-6xl md:text-7xl text-white tracking-tight drop-shadow-lg whitespace-nowrap" style={{ fontFamily: 'Manrope, sans-serif', fontWeight: 400, textAlign: 'center', fontSize: 'clamp(40px, 7vw, 64px)' }}>Luxury Brown</h1>
          </div>
        </div>
      </section>
      <div className="h-16 md:h-24"></div>

      <div className="flex flex-col w-full gap-20">
        {products['watches/luxury'].map((product, index) => (
          <MotionSection direction={index % 2 === 0 ? "left" : "right"} key={product.name}>
            <div className="w-full flex justify-center">
              <div
                className={`grid grid-cols-1 md:grid-cols-2 items-center ${index === 0 ? 'md:gap-x-160' : 'md:gap-x-24'} gap-12 max-w-6xl w-full ${index % 2 === 1 ? 'md:grid-flow-col-dense' : ''}`}
                style={{ minHeight: '520px' }}
              >
                {index % 2 === 1 ? (
                  <>
                    <div className={`flex flex-col items-start px-4 md:px-12 justify-self-start`} style={index === 0 ? { minWidth: '440px', marginLeft: '48px' } : undefined}>
                      <p className="text-accent font-semibold uppercase tracking-[0.5em] text-base mb-6" style={{ marginLeft: '0.5rem' }}>
                        {index === 0 ? 'LX742' : index === 1 ? 'LX529' : 'LX925'}
                      </p>
                      <h2 className="text-black font-bold mb-8 text-left whitespace-nowrap" style={{ fontSize: 'clamp(40px, 7vw, 64px)', lineHeight: '1.1', textAlign: 'left' }}>{index === 0 ? 'Luxury Brown' : product.name}</h2>
                      <p className="text-gray-700 text-lg md:text-xl leading-relaxed mb-4" style={{ marginTop: '1.5rem' }}>
                        {product.description}
                      </p>
                      <div className="mb-6"></div>
                      <p className="text-black text-lg font-bold mb-10">{product.price}</p>
                      <CartButton />
                    </div>
                    <div className="flex items-center justify-center rounded-2xl overflow-hidden bg-gray-50 shadow-lg" style={{ width: '520px', height: '520px' }}>
                      <img src={product.image} alt={product.name} className="object-cover w-full h-full" width="520" height="520" loading="lazy" />
                    </div>
                  </>
                ) : (
                  <>
                    <div className="flex items-center justify-start rounded-2xl overflow-hidden bg-gray-50 shadow-lg md:-ml-55" style={{ width: '520px', height: '520px' }}>
                      <img src={product.image} alt={product.name} className="object-cover w-full h-full" width="520" height="520" loading="lazy" />
                    </div>
                    <div className={`flex flex-col items-start px-4 md:px-12`} style={index === 0 ? { minWidth: '440px', marginLeft: 'clamp(-260px, 18vw, -500px)' } : undefined}>
                      <p className="text-accent font-semibold uppercase tracking-[0.5em] text-base mb-6" style={{ marginLeft: '0.5rem' }}>
                        {index === 0 ? 'LX742' : index === 1 ? 'LX529' : 'LX925'}
                      </p>
                      <h2 className="text-black font-bold mb-8 text-left" style={{ fontSize: 'clamp(40px, 7vw, 64px)', lineHeight: '1.1', textAlign: 'left' }}>{product.name}</h2>
                      <p className="text-gray-700 text-lg md:text-xl leading-relaxed mb-10" style={{ marginTop: '1.5rem' }}>
                        {product.description}
                      </p>
                    </div>
                  </>
                )}
              </div>
            </div>
          </MotionSection>
        ))}
      </div>

    </Layout>
  );
};

export default Luxury;
