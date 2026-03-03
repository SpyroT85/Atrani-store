import CategoryCard from './CategoryCard';

const ProductCategories = () => {
  const categories = [
    { image: '/images/watches/main-image.webp', title: 'Watches' },
    { image: '/images/pens/main-pen.webp', title: 'Pens' },
    { image: '/images/inkwells/main-inkwell.webp', title: 'Inkwells' },
    { image: '/images/compasses/main-compass.webp', title: 'Compasses' },
  ];

  return (
    <section className="py-12 md:py-24 bg-white">
      <div className="w-full flex justify-center">
        <div className="px-4" style={{ maxWidth: '1300px', width: '100%' }}>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 justify-items-center" style={{ gap: '32px' }}>
            {categories.map((category) => (
              <CategoryCard 
                key={category.title} 
                image={category.image} 
                title={category.title} 
                large={category.title === 'Inkwells' || category.title === 'Pens'}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductCategories;
