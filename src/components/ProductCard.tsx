import React from 'react';

interface ProductCardProps {
  name: string;
  description: string;
  image?: string;
  reverse?: boolean;
}

const ProductCard: React.FC<ProductCardProps> = ({ name, description, image, reverse = false }) => (
  <div className={`flex ${reverse ? 'flex-row-reverse' : 'flex-row'} items-center justify-center bg-white overflow-hidden w-full mx-auto`} style={{ maxWidth: '1100px', gap: '6rem' }}>
    <div className="flex-shrink-0 bg-gray-100 flex items-center justify-center rounded-2xl overflow-hidden" style={{ width: '450px', height: '450px' }}>
      {image ? (
        <img src={image} alt={name} className="w-full h-full object-cover" />
      ) : (
        <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-100 flex items-center justify-center">
          <span className="text-gray-400 text-lg">[Image]</span>
        </div>
      )}
    </div>
    <div className="flex-1 flex flex-col justify-center px-8">
      <p className="text-accent font-semibold uppercase tracking-[0.5em] text-xs mb-4">New Product</p>
      <h2 className="text-3xl md:text-4xl font-bold mb-6 text-black uppercase tracking-wider">{name}</h2>
      <p className="text-gray-600 text-base leading-relaxed mb-8">
        {description}
      </p>
      <button className="bg-accent text-white px-8 py-3 uppercase tracking-widest text-sm font-bold hover:bg-accentLight transition-colors rounded w-fit">
        See Product
      </button>
    </div>
  </div>
);

export default ProductCard;
