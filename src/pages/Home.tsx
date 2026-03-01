import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import ProductCategories from '../components/ProductCategories';
import FeaturedProducts from '../components/FeaturedProducts';
import About from '../components/About';

const Home = () => {
  return (
    <div className="text-black">
      <Navbar />
      <Hero />
      <ProductCategories />
      <div className="h-16 md:h-24"></div>
      <FeaturedProducts />
      <div className="h-16 md:h-24"></div>
      <About />
      <Footer />
    </div>
  );
};

export default Home;
