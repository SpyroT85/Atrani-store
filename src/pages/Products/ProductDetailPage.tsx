import Layout from '@/components/Layout';
import CartButton from '@/components/ui/CartButton';
import RelatedProducts from '@/components/RelatedProducts';
import { useNavigate, useParams } from 'react-router-dom';
import { products } from '@/data/products';
import type { Products } from '@/types/productTypes';
import NotFound from '@/pages/NotFound/NotFound';
import { useEffect, useRef } from 'react';

type CategoryKey = keyof Products;

interface ProductDetailPageProps {
  category: CategoryKey | string;
}

export default function ProductDetailPage({ category }: ProductDetailPageProps) {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const imageRef = useRef<HTMLDivElement>(null);
  const infoRef = useRef<HTMLDivElement>(null);

  const categoryProducts = products[category as CategoryKey] as any[];
  const product = categoryProducts?.find((p) => p.id === id);

  // Fade-in animation on mount
  useEffect(() => {
    const els = [imageRef.current, infoRef.current];
    els.forEach((el, i) => {
      if (!el) return;
      el.style.opacity = '0';
      el.style.transform = i === 0 ? 'translateX(-24px)' : 'translateX(24px)';
      el.style.transition = 'opacity 0.7s ease, transform 0.7s ease';
      setTimeout(() => {
        el.style.opacity = '1';
        el.style.transform = 'translateX(0)';
      }, 100 + i * 120);
    });
  }, [id]);

  if (!product) return <NotFound />;

  const specs: { label: string; value: string }[] = [];
  if (product.material)        specs.push({ label: 'Material',         value: product.material });
  if (product.movement)        specs.push({ label: 'Movement',         value: product.movement });
  if (product.waterResistance) specs.push({ label: 'Water Resistance', value: product.waterResistance });
  if (product.waterproof)      specs.push({ label: 'Waterproof',       value: product.waterproof });
  if (product.battery)         specs.push({ label: 'Battery Life',     value: product.battery });
  if (product.code)            specs.push({ label: 'Reference',        value: product.code });

  return (
    <Layout>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&family=Manrope:wght@300;400;500;600&display=swap');

        .pdp-divider {
          width: 48px;
          height: 1px;
          background: #C8874A;
          margin-bottom: 2rem;
        }

        .pdp-spec-row {
          display: flex;
          align-items: baseline;
          gap: 0;
          padding: 0.75rem 0;
          border-bottom: 1px solid #e8e0d5;
        }
        .pdp-spec-row:first-child {
          border-top: 1px solid #e8e0d5;
        }
        .pdp-spec-label {
          font-family: 'Manrope', sans-serif;
          font-size: 0.7rem;
          font-weight: 600;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: #9a8a78;
          width: 140px;
          flex-shrink: 0;
        }
        .pdp-spec-value {
          font-family: 'Manrope', sans-serif;
          font-size: 0.9rem;
          font-weight: 400;
          color: #2a2118;
        }

        .pdp-back-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          font-family: 'Manrope', sans-serif;
          font-size: 0.72rem;
          font-weight: 600;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: #9a8a78;
          background: none;
          border: none;
          cursor: pointer;
          padding: 0;
          transition: color 0.2s ease;
          margin-top: 2rem;
        }
        .pdp-back-btn:hover { color: #C8874A; }
        .pdp-back-btn::before {
          content: '';
          display: inline-block;
          width: 20px;
          height: 1px;
          background: currentColor;
          transition: width 0.2s ease;
        }
        .pdp-back-btn:hover::before { width: 28px; }

        .pdp-image-wrap {
          position: relative;
          border-radius: 4px;
          overflow: hidden;
          background: #f5f0ea;
          box-shadow: 0 24px 64px rgba(60, 40, 10, 0.13), 0 2px 8px rgba(60,40,10,0.07);
        }
        .pdp-image-wrap::after {
          content: '';
          position: absolute;
          inset: 0;
          box-shadow: inset 0 0 0 1px rgba(200,135,74,0.15);
          border-radius: 4px;
          pointer-events: none;
        }

        .pdp-price {
          font-family: 'Cormorant Garamond', serif;
          font-size: 2rem;
          font-weight: 300;
          color: #2a2118;
          letter-spacing: 0.02em;
        }
        .pdp-price span {
          font-size: 1.1rem;
          vertical-align: super;
          margin-right: 2px;
          font-weight: 400;
        }
      `}</style>

      <div
        className="w-full min-h-screen"
        style={{ background: '#FAF7F3', fontFamily: 'Manrope, sans-serif' }}
      >
        <div className="h-28" />

        {/* ── Main product section ── */}
        <div
          className="w-full flex justify-center px-6 md:px-12"
          style={{ paddingBottom: '100px' }}
        >
          <div
            className="flex flex-col md:flex-row gap-16 md:gap-20 items-start max-w-6xl w-full"
          >

            {/* LEFT: Image */}
            <div ref={imageRef} className="flex-shrink-0 w-full md:w-auto" style={{ width: 'min(480px, 100%)' }}>
              <div
                className="pdp-image-wrap"
                style={{ width: '100%', aspectRatio: '1 / 1', minHeight: '320px' }}
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="object-cover w-full h-full"
                  style={{ transition: 'transform 0.6s ease' }}
                  onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.03)')}
                  onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
                  loading="lazy"
                />
              </div>
            </div>

            {/* RIGHT: Info */}
            <div
              ref={infoRef}
              className="flex flex-col justify-start"
              style={{ flex: 1, paddingTop: '0.5rem', minWidth: 0 }}
            >
              {/* Code */}
              {product.code && (
                <p
                  style={{
                    fontFamily: 'Manrope, sans-serif',
                    fontSize: '0.7rem',
                    fontWeight: 600,
                    letterSpacing: '0.2em',
                    textTransform: 'uppercase',
                    color: '#C8874A',
                    marginBottom: '1.25rem',
                  }}
                >
                  {product.code}
                </p>
              )}

              {/* Gold divider line — always visible */}
              <div className="pdp-divider" />

              {/* Name */}
              <h1
                style={{
                  fontFamily: 'Cormorant Garamond, serif',
                  fontSize: 'clamp(36px, 4.5vw, 58px)',
                  fontWeight: 300,
                  lineHeight: 1.05,
                  color: '#1a1208',
                  marginBottom: '1.75rem',
                  letterSpacing: '-0.01em',
                }}
              >
                {product.name}
              </h1>

              {/* Description */}
              <p
                style={{
                  fontFamily: 'Manrope, sans-serif',
                  fontSize: '0.95rem',
                  fontWeight: 300,
                  lineHeight: 1.85,
                  color: '#5a4e42',
                  marginBottom: '2.5rem',
                  maxWidth: '480px',
                }}
              >
                {product.description}
              </p>

              {/* Specs */}
              {specs.length > 0 && (
                <div style={{ marginBottom: '2.5rem' }}>
                  {specs.map(({ label, value }) => (
                    <div key={label} className="pdp-spec-row">
                      <span className="pdp-spec-label">{label}</span>
                      <span className="pdp-spec-value">{value}</span>
                    </div>
                  ))}
                </div>
              )}

              {/* Price */}
              <p className="pdp-price" style={{ marginBottom: '2rem' }}>
                <span>€</span>{product.price.toLocaleString('el-GR')}
              </p>

              {/* Cart button */}
              <CartButton
                productId={product.id}
                productName={product.name}
                productPrice={product.price}
                productImage={product.image}
              />

              {/* Back */}
              <button className="pdp-back-btn" onClick={() => navigate(-1)}>
                Back
              </button>
            </div>
          </div>
        </div>

        {/* ── Divider ── */}
        <div className="w-full flex justify-center px-6 md:px-12">
          <div
            className="max-w-6xl w-full"
            style={{ borderTop: '1px solid #e0d6c8', marginBottom: '64px' }}
          />
        </div>

        {/* ── Related products ── */}
        <div
          className="w-full flex justify-center px-6 md:px-12"
          style={{ paddingBottom: '100px' }}
        >
          <div className="max-w-6xl w-full">
            <RelatedProducts currentProductId={product.id} />
          </div>
        </div>
      </div>
    </Layout>
  );
}