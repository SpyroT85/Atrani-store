import Layout from '../components/Layout';
import Hero from '../components/Hero';
import ProductCategories from '../components/ProductCategories';
import FeaturedProducts from '../components/FeaturedProducts';
import About from '../components/About';

const Home = () => {
  return (
    <Layout>
      <Hero />
      <ProductCategories />
      <div className="h-16 md:h-24"></div>
      <FeaturedProducts />
      <div className="h-16 md:h-24"></div>
      <About />
    </Layout>
  );
};

export default Home;
