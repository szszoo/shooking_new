// src/components/CardList.js
import React from 'react';
import './CardList.css';

const CardList = ({ cards = [], onPay }) => {
  if (!cards.length) return null; // 카드 없으면 버튼/리스트 모두 표시 안 함

  return (
    <div className="cardlist-wrap">
      {cards.map((card, idx) => (
        <div key={idx} className="saved-card">
          <div className="saved-card__number">**** **** **** {card.cardNumber.slice(-4)}</div>
          <div className="saved-card__meta">
            <span>유효기간: {card.expiry}</span>
            <span>소유자명: {card.name}</span>
          </div>

          {/* ⬇️ 각 카드 아래 결제 버튼 */}
          <button
            type="button"
            className="pay-btn"
            onClick={() => onPay && onPay(card)}
          >
            이 카드로 결제하기
          </button>
        </div>
      ))}
    </div>
  );
};

export default CardList;