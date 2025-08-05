// components/PaymentForm.js
import React, { useState, useEffect } from 'react';
import CardNumberInput from './CardNumberInput';
import ExpiryDateInput from './ExpiryDateInput';
import CardHolderNameInput from './CardHolderNameInput';
import SecurityCodeInput from './SecurityCodeInput';
import CardPasswordInput from './CardPasswordInput';
import AddCardButton from './AddCardButton';

const PaymentForm = ({
  mode = 'input', // 'input' or 'confirm'
  onNext,
  onConfirm,
  onCancel,
  onBack,
  defaultValues = {}
}) => {
  const [cardNumber, setCardNumber] = useState('');
  const [expiry, setExpiry] = useState('');
  const [name, setName] = useState('');
  const [cvc, setCvc] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    if (mode === 'confirm' && defaultValues) {
      setCardNumber(defaultValues.cardNumber || '');
      setExpiry(defaultValues.expiry || '');
      setName(defaultValues.name || '');
    }
  }, [mode, defaultValues]);

  const isFormValid = () => {
    const numberValid = /^\d{4}-\d{4}-\d{4}-\d{4}$/.test(cardNumber);
    const expiryValid = /^(0[1-9]|1[0-2])\/(\d{2})$/.test(expiry);
    const nameValid = name.trim().length > 0;
    const cvcValid = /^\d{3,4}$/.test(cvc);
    const passwordValid = /^\d{2}$/.test(password);
    return numberValid && expiryValid && nameValid && cvcValid && passwordValid;
  };

  const handleSubmit = () => {
    if (!isFormValid()) {
      alert('모든 필드를 정확히 입력해주세요.');
      return;
    }
    onNext && onNext({ cardNumber, expiry, name });
  };

  const handleConfirm = () => {
    onConfirm && onConfirm();
  };

  return (
    <div className="bg-white p-6 rounded-2xl shadow-md w-full max-w-md mx-auto space-y-4">
      <h2 className="text-lg font-bold text-center">
        {mode === 'confirm' ? '카드 정보 확인' : '카드 정보 입력'}
      </h2>
      <CardNumberInput value={cardNumber} onChange={setCardNumber} readOnly={mode === 'confirm'} />
      <ExpiryDateInput value={expiry} onChange={setExpiry} readOnly={mode === 'confirm'} />
      <CardHolderNameInput value={name} onChange={setName} readOnly={mode === 'confirm'} />
      {mode === 'input' && (
        <>
          <SecurityCodeInput value={cvc} onChange={setCvc} />
          <CardPasswordInput value={password} onChange={setPassword} />
        </>
      )}

      <div className="flex justify-between pt-2">
        {mode === 'input' ? (
          <>
            <button
              onClick={onCancel}
              className="bg-gray-300 text-gray-800 px-4 py-2 rounded-md w-[48%]"
            >
              취소
            </button>
            <AddCardButton onClick={handleSubmit} />
          </>
        ) : (
          <>
            <button
              onClick={onBack}
              className="bg-gray-300 text-gray-800 px-4 py-2 rounded-md w-[48%]"
            >
              이전
            </button>
            <button
              onClick={handleConfirm}
              className="bg-black text-white px-4 py-2 rounded-md w-[48%]"
            >
              등록 완료
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default PaymentForm;
