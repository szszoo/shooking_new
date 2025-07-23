// components/PaymentForm.js
import React, { useState } from 'react';
import CardNumberInput from './CardNumberInput';
import ExpiryDateInput from './ExpiryDateInput';
import CardHolderNameInput from './CardHolderNameInput';
import SecurityCodeInput from './SecurityCodeInput';
import CardPasswordInput from './CardPasswordInput';
import CardList from './CardList';
import AddCardButton from './AddCardButton';
import PurchaseButton from './PurchaseButton';

const PaymentForm = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [expiry, setExpiry] = useState('');
  const [name, setName] = useState('');
  const [cvc, setCvc] = useState('');
  const [password, setPassword] = useState('');
  const [cards, setCards] = useState([]);

  const isFormValid = () => {
    const numberValid = /^\d{4}-\d{4}-\d{4}-\d{4}$/.test(cardNumber);
    const expiryValid = /^(0[1-9]|1[0-2])\/(\d{2})$/.test(expiry);
    const nameValid = name.trim().length > 0;
    const cvcValid = /^\d{3,4}$/.test(cvc);
    const passwordValid = /^\d{2}$/.test(password);
    return numberValid && expiryValid && nameValid && cvcValid && passwordValid;
  };

  const handleAddCard = () => {
    if (!isFormValid()) {
      alert('모든 필드를 정확히 입력해주세요.');
      return;
    }
    const exists = cards.some((c) => c.cardNumber === cardNumber);
    if (exists) {
      alert('이미 등록된 카드입니다.');
      return;
    }
    setCards([...cards, { cardNumber, expiry }]);
    setCardNumber('');
    setExpiry('');
    setName('');
    setCvc('');
    setPassword('');
  };

  const handlePurchase = () => {
    alert('결제가 완료되었습니다.');
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-white rounded shadow">
      <CardNumberInput value={cardNumber} onChange={setCardNumber} />
      <ExpiryDateInput value={expiry} onChange={setExpiry} />
      <CardHolderNameInput value={name} onChange={setName} />
      <SecurityCodeInput value={cvc} onChange={setCvc} />
      <CardPasswordInput value={password} onChange={setPassword} />
      <div className="flex justify-between mt-4">
        <AddCardButton onClick={handleAddCard} />
        <PurchaseButton disabled={!isFormValid()} onClick={handlePurchase} />
      </div>
      <CardList cards={cards} />
    </div>
  );
};

export default PaymentForm;