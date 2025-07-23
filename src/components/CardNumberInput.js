import React from 'react';

const CardNumberInput = ({ value, onChange }) => {
  const handleChange = (e) => {
    let input = e.target.value.replace(/[^0-9]/g, '').slice(0, 16);
    const formatted = input.match(/.{1,4}/g)?.join('-') || '';
    onChange(formatted);
  };

  return (
    <div className="mb-4">
      <label className="text-sm text-gray-600">카드 번호</label>
      <input
        type="text"
        value={value}
        onChange={handleChange}
        placeholder="1234-5678-9012-3456"
        className="border p-2 rounded-md w-full"
        maxLength={19}
      />
    </div>
  );
};

export default CardNumberInput;