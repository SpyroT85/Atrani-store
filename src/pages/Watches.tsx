import React from 'react';
import { products } from '@/data/products';
import ProductCard from '@/components/ProductCard';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Watches = () => {
  return (
    <>
      <Navbar />
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-8">Watches</h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {products.watches.map((product, index) => (
              <ProductCard key={index} product={product} />
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Watches;