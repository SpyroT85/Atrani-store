import { products } from '@/data/products';
import ProductCard from '@/components/ProductCard';
import Layout from '@/components/Layout';

const Watches = () => {
  return (
    <Layout>
      <section className="py-24 px-4 bg-white flex justify-center">
        <div className="max-w-5xl w-full">
          <div style={{ height: '3rem' }}></div>
          <h1 className="text-4xl md:text-5xl font-bold text-black text-center" style={{ marginBottom: '3rem' }}>Watches</h1>
          <div className="flex flex-col w-full">
            {products.watches.map((product, index) => (
              <div key={product.name} className={`flex ${index % 2 === 0 ? 'justify-start' : 'justify-end'} w-full`}>
                <ProductCard {...product} reverse={index % 2 !== 0} />
                {index < products.watches.length - 1 && <div className="h-24 md:h-32"></div>}
              </div>
            ))}
          </div>
          <div className="h-6 md:h-8"></div>
        </div>
      </section>
    </Layout>
  );
};

export default Watches;