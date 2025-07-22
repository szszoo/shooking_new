import React, { useState } from "react";
import CardNumberInput from "./CardNumberInput";
import { ExpiryDateInput, CardHolderNameInput, SecurityCodeInput } from "./OtherInputs";

function PaymentForm() {
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cardHolder, setCardHolder] = useState("");
  const [cvc, setCvc] = useState("");
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};

    if (cardNumber.replace(/\s/g, "").length !== 16) {
      newErrors.cardNumber = "카드 번호는 16자리여야 합니다.";
    }

    if (!/^(0[1-9]|1[0-2])\/\d{2}$/.test(expiryDate)) {
      newErrors.expiryDate = "유효기간은 MM/YY 형식이어야 합니다.";
    }

    if (cardHolder.trim() === "") {
      newErrors.cardHolder = "카드 소유자명을 입력하세요.";
    }

    if (!/^\d{3,4}$/.test(cvc)) {
      newErrors.cvc = "CVC는 3~4자리 숫자여야 합니다.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert("결제 정보가 정상적으로 제출되었습니다!");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>카드 번호</label><br />
        <CardNumberInput value={cardNumber} onChange={setCardNumber} />
        {errors.cardNumber && <div style={{ color: "red" }}>{errors.cardNumber}</div>}
      </div>

      <div>
        <label>유효기간</label><br />
        <ExpiryDateInput value={expiryDate} onChange={setExpiryDate} />
        {errors.expiryDate && <div style={{ color: "red" }}>{errors.expiryDate}</div>}
      </div>

      <div>
        <label>카드 소유자</label><br />
        <CardHolderNameInput value={cardHolder} onChange={setCardHolder} />
        {errors.cardHolder && <div style={{ color: "red" }}>{errors.cardHolder}</div>}
      </div>

      <div>
        <label>CVC</label><br />
        <SecurityCodeInput value={cvc} onChange={setCvc} />
        {errors.cvc && <div style={{ color: "red" }}>{errors.cvc}</div>}
      </div>

      <button type="submit">구매하기</button>
    </form>
  );
}

export default PaymentForm;