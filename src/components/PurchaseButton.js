import React from 'react';

const PurchaseButton = ({ disabled, onClick }) => {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={`w-full py-2 px-4 rounded ${disabled ? 'bg-gray-300' : 'bg-black text-white hover:bg-gray-800'}`}
    >
      결제하기
    </button>
  );
};

export default PurchaseButton;