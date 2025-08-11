import React from 'react';

const ConfirmCard = ({ card, onConfirm, onBack }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow space-y-4">
      <h2 className="text-lg font-bold">카드 정보 확인</h2>
      <div className="bg-gray-100 p-4 rounded-md">
        <p>카드 번호: ****-****-****-{card.cardNumber.slice(-4)}</p>
        <p>유효기간: {card.expiry}</p>
        <p>소유자명: {card.name}</p>
      </div>
      <div className="flex justify-between">
        <button
          className="bg-gray-300 text-black px-4 py-2 rounded"
          onClick={onBack}
        >
          이전
        </button>
        <button
          className="bg-black text-white px-4 py-2 rounded"
          onClick={onConfirm}
        >
          등록 완료
        </button>
      </div>
    </div>
  );
};

export default ConfirmCard;