import { products } from '@/data/products';
import ProductCard from '@/components/ProductCard';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Luxury = () => {
  return (
    <>
      <Navbar />
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-8">Luxury</h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {products.luxury.map((product) => (
              <ProductCard key={product.name} {...product} />
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Luxury;