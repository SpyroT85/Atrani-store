// ...existing code...
import React from 'react';

interface ProductCardProps {
  name: string;
  description: string;
  image?: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ name, description, image }) => (
  <div className="bg-card rounded-lg p-6 shadow hover:scale-105 transition">
    <div className="h-48 bg-background rounded mb-4 flex items-center justify-center" style={{ filter: 'drop-shadow(0 8px 16px rgba(0, 0, 0, 0.4))' }}>
      {image ? <img src={image} alt={name} className="max-h-full" /> : <span className="text-muted">[Image]</span>}
    </div>
    <h3 className="text-xl font-semibold mb-2">{name}</h3>
    <p className="text-muted mb-4">{description}</p>
    <button className="border border-accent text-accent px-4 py-2 rounded hover:bg-accent hover:text-white">See Product</button>
  </div>
);

export default ProductCard;
