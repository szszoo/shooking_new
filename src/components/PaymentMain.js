// src/components/PaymentMain.js
import React from 'react';
import CardList from './CardList';
import './PaymentMain.css';

const PaymentMain = ({ cards = [], onAddClick, onPay }) => {
  return (
    <div className="payment-container">
      <h2 className="payment-title">내 카드 목록</h2>

      <div className="card-list">
        <CardList cards={cards} onPay={onPay} />
      </div>

      {/* 회색 플러스 카드 박스 → button으로 변경 */}
      <button
        type="button"                      // ✅ 폼 내부에서도 안전
        className="add-card-box"
        onClick={() => {
          console.log('[PaymentMain] add click'); // ✅ 디버그 로그
          onAddClick && onAddClick();
        }}
        onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && onAddClick && onAddClick()}
        aria-label="새 카드 등록"
      >
        <span className="add-card-plus">+</span>
        <p className="add-card-text">새 카드 등록</p>
      </button>
    </div>
  );
};

export default PaymentMain;