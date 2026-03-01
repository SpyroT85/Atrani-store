interface CategoryCardProps {
  image: string;
  title: string;
}

const CategoryCard = ({ image, title }: CategoryCardProps) => {
  // Only apply bottom shadow to PNG images
  const isPng = image.toLowerCase().endsWith('.png');
  const imageStyle: React.CSSProperties = {
    width: '200px',
    height: '200px',
    transform: title === 'Inkwells' ? 'translateX(20px)' : 'none',
    filter: isPng ? 'drop-shadow(0 24px 16px rgba(0,0,0,0.5))' : undefined,
  };
  return (
    <div className="flex flex-col items-center cursor-pointer transition relative" style={{ paddingTop: '3rem', width: '280px' }}>
      <div className="flex items-center justify-center" style={{ position: 'relative', zIndex: 2, marginBottom: '-6rem' }}>
        <img src={image} alt={`${title}`} className="object-contain" style={imageStyle} />
      </div>
      <div className="w-full rounded-xl flex flex-col items-center" style={{ backgroundColor: '#E5E7EB', boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)', paddingTop: '7rem', paddingBottom: '2.5rem', paddingLeft: '2rem', paddingRight: '2rem' }}>
        <h3 className="font-bold uppercase tracking-wider text-black" style={{ fontSize: '15px', letterSpacing: '0.1em' }}>{title}</h3>
      </div>
    </div>
  );
};

export default CategoryCard;
