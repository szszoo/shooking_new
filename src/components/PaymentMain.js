// components/PaymentMain.js
import React from 'react';
import CardList from './CardList';

const PaymentMain = ({ cards, onAddClick }) => {
  return (
    <div className="w-full max-w-md mx-auto p-4 space-y-6">
      <h2 className="text-xl font-bold text-center">내 카드 목록</h2>
      <CardList cards={cards} />

      {/* 회색 플러스 카드 박스 */}
      <div
        className="w-full h-40 bg-gray-100 border-2 border-dashed border-gray-300 rounded-xl flex flex-col items-center justify-center cursor-pointer hover:bg-gray-200 transition"
        onClick={onAddClick}
      >
        <span className="text-5xl text-gray-400 font-light">+</span>
        <p className="text-gray-500 text-sm mt-2">새 카드 등록</p>
      </div>
    </div>
  );
};

export default PaymentMain;