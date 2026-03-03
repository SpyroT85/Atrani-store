import React from "react";

interface AddToCartButtonProps {
  quantity: number;
  onClick: (quantity: number) => void;
  className?: string;
  disabled?: boolean;
}

export const AddToCartButton: React.FC<AddToCartButtonProps> = ({
  quantity,
  onClick,
  className = "",
  disabled = false,
}) => {
  return (
    <button
      className={`bg-[#a67c52] text-white font-bold rounded-lg px-12 py-4 uppercase tracking-widest text-base hover:bg-[#8a5e3a] transition border-none cursor-pointer focus:outline-none flex items-center justify-center ${className}`}
      style={{ letterSpacing: '0.08em', minWidth: '200px', minHeight: '75px' }}
      onClick={() => onClick(quantity)}
      disabled={disabled}
      aria-label="Add to basket"
    >
      ADD TO BASKET
    </button>
  );
};