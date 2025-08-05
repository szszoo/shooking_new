// components/CardList.js
import React from 'react';

const CardList = ({ cards }) => {
  return (
    <div className="space-y-4">
      {cards.map((card, idx) => (
        <div
          key={idx}
          className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white p-4 rounded-xl shadow-md space-y-1"
        >
          <div className="text-sm tracking-widest font-mono">
            **** **** **** {card.cardNumber.slice(-4)}
          </div>
          <div className="text-xs">유효기간: {card.expiry}</div>
          <div className="text-xs">소유자명: {card.name}</div>
        </div>
      ))}
    </div>
  );
};

export default CardList;