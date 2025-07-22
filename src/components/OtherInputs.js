import React from "react";

export function ExpiryDateInput({ value, onChange }) {
  const handleChange = (e) => {
    let input = e.target.value;
    input = input.replace(/[^0-9\/]/g, "");
    if (input.length === 2 && !input.includes("/")) {
      input = input + "/";
    }
    if (input.length > 5) return;
    onChange(input);
  };

  return (
    <input
      type="text"
      placeholder="유효기간 (MM/YY)"
      value={value}
      onChange={handleChange}
      maxLength={5}
      autoComplete="cc-exp"
    />
  );
}

export function CardHolderNameInput({ value, onChange }) {
  const handleChange = (e) => {
    const input = e.target.value;
    if (/^[a-zA-Z가-힣\s]*$/.test(input)) {
      onChange(input);
    }
  };

  return (
    <input
      type="text"
      placeholder="카드 소유자 이름"
      value={value}
      onChange={handleChange}
      autoComplete="cc-name"
    />
  );
}

export function SecurityCodeInput({ value, onChange }) {
  const handleChange = (e) => {
    let input = e.target.value;
    input = input.replace(/\D/g, "");
    if (input.length <= 4) {
      onChange(input);
    }
  };

  return (
    <input
      type="password"
      placeholder="CVC"
      value={value}
      onChange={handleChange}
      maxLength={4}
      autoComplete="cc-csc"
    />
  );
}