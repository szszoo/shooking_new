import React, { useState } from 'react';
import './PaymentForm.css';
import CardNumberInput from './CardNumberInput';
import ExpiryDateInput from './ExpiryDateInput';
import CardHolderNameInput from './CardHolderNameInput';
import SecurityCodeInput from './SecurityCodeInput';
import CardPasswordInput from './CardPasswordInput';
import AddCardButton from './AddCardButton';

const PaymentForm = ({ onSubmit, onCancel }) => {
  const [cardNumber, setCardNumber] = useState('');
  const [expiry, setExpiry] = useState('');
  const [name, setName] = useState('');
  const [cvc, setCvc] = useState('');
  const [password, setPassword] = useState('');

  const isFormValid = () => {
    const numberValid = /^\d{4}-\d{4}-\d{4}-\d{4}$/.test(cardNumber);
    const expiryValid = /^(0[1-9]|1[0-2])\/(\d{2})$/.test(expiry);
    const nameValid = name.trim().length > 0;
    const cvcValid = /^\d{3,4}$/.test(cvc);
    const passwordValid = /^\d{2}$/.test(password);
    return numberValid && expiryValid && nameValid && cvcValid && passwordValid;
  };

  const handleSubmit = () => {
    if (!isFormValid()) return;
    // 민감정보는 리스트에 저장하지 않음(cvc, password 제외)
    onSubmit && onSubmit({ cardNumber, expiry, name });
  };

  return (
    <div className="payment-form-wrapper">
      {/* 우측 상단 닫기(X) */}
      <button
        className="close-button"
        aria-label="닫기"
        onClick={onCancel}
      >
        ×
      </button>

      <h2 className="form-title">카드 정보 입력</h2>

      <CardNumberInput value={cardNumber} onChange={setCardNumber} />
      <ExpiryDateInput value={expiry} onChange={setExpiry} />
      <CardHolderNameInput value={name} onChange={setName} />
      <SecurityCodeInput value={cvc} onChange={setCvc} />
      <CardPasswordInput value={password} onChange={setPassword} />

      <div className="btn-row">
        <AddCardButton onClick={handleSubmit} disabled={!isFormValid()} />
      </div>
    </div>
  );
};

export default PaymentForm;