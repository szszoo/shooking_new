import React from 'react';
import './SecurityCodeInput.css'; // CSS 파일 import

const SecurityCodeInput = ({ value, onChange }) => {
  const handleChange = (e) => {
    const input = e.target.value.replace(/[^0-9]/g, '').slice(0, 4);
    onChange(input);
  };

  return (
    <div className="cvc-input">
      <label className="cvc-label">보안 코드 (CVC)</label>
      <input
        type="password"
        value={value}
        onChange={handleChange}
        placeholder="•••"
        className="cvc-field"
        maxLength={4}
      />
    </div>
  );
};

export default SecurityCodeInput;