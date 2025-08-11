// src/components/PaymentFlow.js
import React, { useState } from 'react';
import PaymentMain from './PaymentMain';
import PaymentForm from './PaymentForm';

const PaymentFlow = ({ onClose }) => {
  const [step, setStep] = useState(1); // 1: 카드 리스트, 2: 입력
  const [cardList, setCardList] = useState([]);

  return (
    <div style={{ padding: 16 }}>
      {step === 1 && (
        <PaymentMain
          cards={cardList}
          onAddClick={() => setStep(2)}
        />
      )}

      {step === 2 && (
        <PaymentForm
          onCancel={() => {        // X: 모듈 닫기
            setStep(1);
            onClose && onClose();
          }}
          onSubmit={(card) => {    // 작성완료: 모듈 안에 머물기
            setCardList([...cardList, card]);
            setStep(1);
          }}
        />
      )}
    </div>
  );
};

export default PaymentFlow;