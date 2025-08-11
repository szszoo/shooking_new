import React from 'react';
import './ExpiryDateInput.css'; // CSS 파일 연결

const ExpiryDateInput = ({ value, onChange }) => {
  const handleChange = (e) => {
    let input = e.target.value.replace(/[^0-9]/g, '').slice(0, 4);
    if (input.length > 2) {
      input = input.slice(0, 2) + '/' + input.slice(2);
    }
    onChange(input);
  };

  return (
    <div className="expiry-input">
      <label className="expiry-label">유효기간</label>
      <input
        type="text"
        value={value}
        onChange={handleChange}
        placeholder="MM/YY"
        maxLength={5}
        className="expiry-field"
      />
    </div>
  );
};

export default ExpiryDateInput;