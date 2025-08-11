import React from 'react';
import './CardNumberInput.css'; // 새 CSS 파일 연결

const CardNumberInput = ({ value, onChange }) => {
  const handleChange = (e) => {
    let input = e.target.value.replace(/[^0-9]/g, '').slice(0, 16);
    const formatted = input.match(/.{1,4}/g)?.join('-') || '';
    onChange(formatted);
  };

  return (
    <div className="card-number-input">
      <label className="card-number-label">카드 번호</label>
      <input
        type="text"
        value={value}
        onChange={handleChange}
        placeholder="1234-5678-9012-3456"
        className="card-number-field"
        maxLength={19}
      />
    </div>
  );
};

export default CardNumberInput;