import React, { useState } from 'react';
import { HiShoppingCart } from "react-icons/hi2";
import { Button } from './button';

interface CartButtonProps {
  onAddToCart?: (quantity: number) => void;
  initialQuantity?: number;
  className?: string;
}

const CartButton: React.FC<CartButtonProps> = ({ onAddToCart, initialQuantity = 0, className }) => {
  const [quantity, setQuantity] = useState(initialQuantity);

  const handleAddToCart = () => {
    setQuantity(1);
    if (onAddToCart) onAddToCart(1);
  };

  const handleIncrease = () => {
    setQuantity(q => {
      const newQ = q + 1;
      if (onAddToCart) onAddToCart(newQ);
      return newQ;
    });
  };

  const handleDecrease = () => {
    setQuantity(q => {
      const newQ = q > 1 ? q - 1 : 0;
      if (onAddToCart) onAddToCart(newQ);
      return newQ;
    });
  };

  const buttonStyles = "bg-[#b89e6f] text-white uppercase tracking-widest text-sm font-bold transition border-none cursor-pointer rounded-md flex items-center justify-center w-full";
  const buttonPadding = { padding: '2rem 2rem', minWidth: '200px' };

  return (
    <div className={className}>
      <Button
        variant="default"
        className={buttonStyles}
        style={buttonPadding}
        aria-label="Cart button"
        onClick={quantity === 0 ? handleAddToCart : undefined}
      >
        {quantity === 0 ? (
          <span className="flex items-center">
            <HiShoppingCart aria-label="cart" size={24} style={{ marginRight: '0.5rem' }} />
            Add to Cart
          </span>
        ) : (
          <div className="flex items-center gap-4">
            <button
              type="button"
              className="w-8 h-8 flex items-center justify-center bg-[#b89e6f] rounded-md text-white font-bold border-none hover:bg-[#a88c5c] transition cursor-pointer"
              aria-label="Decrease quantity"
              onClick={handleDecrease}
            >
              -
            </button>
            <span className="mx-4 text-center text-lg font-bold" style={{ minWidth: '2rem' }}>{quantity}</span>
            <button
              type="button"
              className="w-8 h-8 flex items-center justify-center bg-[#b89e6f] rounded-md text-white font-bold border-none hover:bg-[#a88c5c] transition cursor-pointer"
              aria-label="Increase quantity"
              onClick={handleIncrease}
            >
              +
            </button>
          </div>
        )}
      </Button>
    </div>
  );
};

export default CartButton;
