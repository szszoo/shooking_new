import React from 'react';

const CardList = ({ cards }) => {
  return (
    <div className="my-4">
      <h3 className="mb-2 text-gray-700">보유 카드</h3>
      {cards.map((card, idx) => (
        <div key={idx} className="border p-3 mb-2 rounded bg-gray-100">
          <div>카드 번호: ****-****-****-{card.cardNumber.slice(-4)}</div>
          <div>유효기간: {card.expiry}</div>
        </div>
      ))}
    </div>
  );
};

export default CardList;