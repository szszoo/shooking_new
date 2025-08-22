// src/components/PaymentFlow.js
import React, { useState } from 'react';
import PaymentMain from './PaymentMain';
import PaymentForm from './PaymentForm';
import PaymentDone from './PaymentDone';

const PaymentFlow = ({ onClose, itemCount = 0, total = 0, onPaid }) => {
  // 1: 카드 리스트, 2: 카드 입력, 3: 결제 완료
  const [step, setStep] = useState(1);
  const [cardList, setCardList] = useState([]);
  const [selectedCard, setSelectedCard] = useState(null);

  const goInput = () => setStep(2);

  const handlePay = (card) => {
    // 여기서 결제 로직(실결제/검증 등)을 넣을 수 있음. 지금은 화면 전환만.
    setSelectedCard(card);
    if (onPaid) onPaid();     // ✅ 부모에게 "결제 완료" 알림 → 장바구니 비우기 등 수행
    setStep(3);
  };

  const handleGoShop = () => {
    // 결제 완료 후 쇼핑 계속하기
    setStep(1);
    setSelectedCard(null);
    onClose && onClose(); // 모달 등 닫고 싶으면 onClose 사용
  };

  return (
    <div style={{ padding: 16 }}>
      {step === 1 && (
        <PaymentMain
          cards={cardList}
          onAddClick={goInput}
          onPay={handlePay} // ✅ 결제 버튼 누르면 PaymentDone으로 이동
        />
      )}

      {step === 2 && (
        <PaymentForm
          onCancel={() => {
            setStep(1);
            onClose && onClose();
          }}
          onSubmit={(card) => {
            setCardList((prev) => [...prev, card]);
            setStep(1);
          }}
        />
      )}

      {step === 3 && (
        <PaymentDone
          itemCount={itemCount}
          total={total}
          onGoShop={handleGoShop}
          showHeader={false}
        />
      )}
    </div>
  );
};

export default PaymentFlow;