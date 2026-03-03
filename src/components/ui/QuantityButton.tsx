import React from "react";

interface QuantityButtonProps {
  value: number;
  onIncrease: () => void;
  onDecrease: () => void;
  min?: number;
  max?: number;
}

const QuantityButton: React.FC<QuantityButtonProps> = ({ value, onIncrease, onDecrease, min = 1, max = 99 }) => {
  return (
    <div className="flex items-center justify-center bg-gray-100 rounded-lg px-4 py-4 mx-auto" style={{ minWidth: '200', height: '75px' }}>
      <button
        className="text-gray-500 text-base font-bold hover:text-black transition px-4 py-2 focus:outline-none mr-3"
        onClick={onDecrease}
        disabled={value <= min}
        aria-label="Decrease quantity"
        style={{ background: 'none', border: 'none', borderRadius: '6px' }}
      >
        -
      </button>
      <span className="text-center text-base font-bold text-gray-700 select-none" style={{ minWidth: '62px' }}>
        {value}
      </span>
      <button
        className="text-gray-500 text-base font-bold hover:text-black transition px-4 py-2 focus:outline-none ml-3"
        onClick={onIncrease}
        disabled={value >= max}
        aria-label="Increase quantity"
        style={{ background: 'none', border: 'none', borderRadius: '6px' }}
      >
        +
      </button>
    </div>
  );
};

export default QuantityButton;
