import React from 'react';
import './CardPasswordInput.css'; // CSS 파일 import

const CardPasswordInput = ({ value, onChange }) => {
  const handleChange = (e) => {
    const input = e.target.value.replace(/[^0-9]/g, '').slice(0, 2);
    onChange(input);
  };

  return (
    <div className="pw-input">
      <label className="pw-label">카드 비밀번호 (앞 2자리)</label>
      <input
        type="password"
        value={value}
        onChange={handleChange}
        placeholder="••"
        className="pw-field"
        maxLength={2}
      />
    </div>
  );
};

export default CardPasswordInput;