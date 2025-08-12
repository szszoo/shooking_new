// src/components/PaymentFlow.js
import React, { useState } from 'react';
import PaymentMain from './PaymentMain';
import PaymentForm from './PaymentForm';

const PaymentFlow = ({ onClose }) => {
  const [step, setStep] = useState(1); // 1: 카드 리스트, 2: 입력
  const [cardList, setCardList] = useState([]);

  const goInput = () => setStep(2);

  return (
    <div style={{ padding: 16 }}>
      {step === 1 && (
        <PaymentMain
          cards={cardList}
          onAddClick={goInput}               // ✅ 분명히 전달
          onPay={(card) => alert(`**** ${card.cardNumber.slice(-4)} 결제 진행`)}
        />
      )}

      {step === 2 && (
        <PaymentForm
          onCancel={() => { setStep(1); onClose && onClose(); }}
          onSubmit={(card) => { setCardList([...cardList, card]); setStep(1); }}
        />
      )}
    </div>
  );
};

export default PaymentFlow;