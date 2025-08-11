// components/PaymentMain.js
import React from 'react';
import CardList from './CardList';
import './PaymentMain.css';

const PaymentMain = ({ cards, onAddClick }) => {
  return (
    <div className="payment-container">
      <h2 className="payment-title">내 카드 목록</h2>

      <div className="card-list">
        <CardList cards={cards} />
      </div>

      <div className="add-card-box" onClick={onAddClick}>
        <span className="add-card-plus">+</span>
        <p className="add-card-text">새 카드 등록</p>
      </div>
    </div>
  );
};

export default PaymentMain;