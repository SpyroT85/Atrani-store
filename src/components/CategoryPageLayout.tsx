import { memo } from 'react';
import Layout from '@/components/Layout';
import MotionSection from '@/components/MotionSection';
import ViewDetailsButton from '@/components/ui/ViewDetailsButton';

interface Product {
  id: string;
  name: string;
  description: string;
  image: string;
  price: number;
  code?: string;
}

interface CategoryPageLayoutProps {
  title: string;
  products: Product[];
  basePath: string;
  fontFamily?: string;
}

const CategoryPageLayout = memo(({
  title,
  products,
  basePath,
  fontFamily = 'Manrope, sans-serif',
}: CategoryPageLayoutProps) => {
  return (
    <Layout>
      {/* ── Hero ── */}
      <section className="p-0 m-0">
        <div
          className="w-full bg-background flex items-center justify-center overflow-hidden relative"
          style={{
            minHeight: '22vh',
            padding: '3rem 0 6rem 0',
            borderTop: 'none',
            borderLeft: '1px solid rgba(255,255,255,0.1)',
            borderRight: '1px solid rgba(255,255,255,0.1)',
          }}
        >
          <h1
            className="text-white tracking-tight drop-shadow-lg"
            style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontWeight: 300,
              textAlign: 'center',
              fontSize: 'clamp(48px, 8vw, 80px)',
              letterSpacing: '0.02em',
            }}
          >
            {title}
          </h1>
        </div>
      </section>

      <div className="h-16 md:h-24" />

      {/* ── Product rows ── */}
      <div className="flex flex-col w-full gap-20">
        {products.map((product, index) => {
          const isOdd = index % 2 === 1;

          const imageBlock = (
            <div
              className={`flex items-center ${isOdd ? 'justify-center' : 'justify-start md:-ml-55'} rounded-2xl overflow-hidden bg-gray-50 shadow-lg flex-shrink-0`}
              style={{ width: '520px', height: '520px' }}
            >
              <img
                src={product.image}
                alt={product.name}
                className="object-cover w-full h-full"
                width="520"
                height="520"
                loading="lazy"
              />
            </div>
          );

          const infoBlock = (
            <div
              className={`flex flex-col items-start px-4 md:px-12 ${isOdd ? 'justify-self-start' : 'justify-self-end'} ${!isOdd && index === 0 ? 'md:translate-x-12' : ''}`}
            >
              {product.code && (
                <p
                  className="text-accent font-semibold uppercase tracking-[0.5em] text-base mb-6"
                  style={{ marginLeft: '0.5rem' }}
                >
                  {product.code}
                </p>
              )}
              <h2
                className="text-black font-bold mb-8 text-left"
                style={{ fontSize: 'clamp(40px, 7vw, 64px)', lineHeight: '1.1' }}
              >
                {product.name}
              </h2>
              <p
                className="text-gray-700 text-lg md:text-xl leading-relaxed mb-4"
                style={{ marginTop: '1.5rem' }}
              >
                {product.description}
              </p>
              <div style={{ height: '16px' }} />
              <p className="text-black text-lg font-bold mb-2">Price: {product.price}€</p>
              <div style={{ height: '16px' }} />
              <ViewDetailsButton path={`${basePath}/${product.id}`} />
            </div>
          );

          return (
            <MotionSection direction={isOdd ? 'right' : 'left'} key={product.id}>
              <div className="w-full flex justify-center">
                <div
                  className={`grid grid-cols-1 md:grid-cols-2 items-center md:gap-x-24 gap-12 max-w-6xl w-full ${isOdd ? 'md:grid-flow-col-dense' : ''}`}
                  style={{ minHeight: '520px' }}
                >
                  {isOdd ? (
                    <>{infoBlock}{imageBlock}</>
                  ) : (
                    <>{imageBlock}{infoBlock}</>
                  )}
                </div>
              </div>
            </MotionSection>
          );
        })}
      </div>

      <div className="h-24 md:h-14" />
    </Layout>
  );
});

CategoryPageLayout.displayName = 'CategoryPageLayout';

export default CategoryPageLayout;