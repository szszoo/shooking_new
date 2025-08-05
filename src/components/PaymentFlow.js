// components/PaymentFlow.js
import React, { useState } from 'react';
import PaymentMain from './PaymentMain';
import PaymentForm from './PaymentForm';

const PaymentFlow = () => {
  const [step, setStep] = useState(1); // 1: 기본, 2: 입력, 3: 확인
  const [cardList, setCardList] = useState([]);
  const [tempCard, setTempCard] = useState(null);

  return (
    <div className="p-4">
      {step === 1 && (
        <PaymentMain
          cards={cardList}
          onAddClick={() => setStep(2)}
        />
      )}
      {step === 2 && (
        <PaymentForm
          mode="input"
          onNext={(card) => {
            setTempCard(card);
            setStep(3);
          }}
          onCancel={() => setStep(1)}
        />
      )}
      {step === 3 && (
        <PaymentForm
          mode="confirm"
          defaultValues={tempCard}
          onConfirm={() => {
            setCardList([...cardList, tempCard]);
            setTempCard(null);
            setStep(1);
          }}
          onBack={() => setStep(2)}
        />
      )}
    </div>
  );
};

export default PaymentFlow;