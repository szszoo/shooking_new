import React from 'react';

const CardPasswordInput = ({ value, onChange }) => {
  const handleChange = (e) => {
    const input = e.target.value.replace(/[^0-9]/g, '').slice(0, 2);
    onChange(input);
  };

  return (
    <div className="mb-4">
      <label className="text-sm text-gray-600">카드 비밀번호 (앞 2자리)</label>
      <input
        type="password"
        value={value}
        onChange={handleChange}
        placeholder="••"
        className="border p-2 rounded-md w-full"
        maxLength={2}
      />
    </div>
  );
};

export default CardPasswordInput;