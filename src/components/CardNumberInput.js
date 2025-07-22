import React from "react";

function CardNumberInput({ value, onChange }) {
  const handleChange = (e) => {
    let input = e.target.value;
    input = input.replace(/\D/g, "");
    input = input.match(/.{1,4}/g)?.join(" ") || "";
    onChange(input);
  };

  return (
    <input
      type="text"
      maxLength={19}
      placeholder="카드 번호 입력 (숫자만)"
      value={value}
      onChange={handleChange}
      inputMode="numeric"
      autoComplete="cc-number"
    />
  );
}

export default CardNumberInput;