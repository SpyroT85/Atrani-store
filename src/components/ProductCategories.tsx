import CategoryCard from './CategoryCard';

const ProductCategories = () => {
  const categories = [
    { image: '/images/product-watch.png', title: 'Watches' },
    { image: '/images/main-pen.png', title: 'Pens' },
    { image: '/images/main-inkwell.png', title: 'Inkwells' },
    { image: '/images/main-compass.png', title: 'Compasses' },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="w-full flex justify-center">
        <div className="px-4" style={{ maxWidth: '1300px', width: '100%' }}>
          <div className="grid grid-cols-1 md:grid-cols-4" style={{ gap: '32px' }}>
            {categories.map((category) => (
              <CategoryCard 
                key={category.title} 
                image={category.image} 
                title={category.title} 
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductCategories;
