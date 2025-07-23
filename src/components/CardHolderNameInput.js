import React from 'react';

const CardHolderNameInput = ({ value, onChange }) => {
  const handleChange = (e) => {
    const input = e.target.value.replace(/[^a-zA-Z가-힣\s]/g, '');
    onChange(input);
  };

  return (
    <div className="mb-4">
      <label className="text-sm text-gray-600">카드 소지자 이름</label>
      <input
        type="text"
        value={value}
        onChange={handleChange}
        placeholder="홍길동"
        className="border p-2 rounded-md w-full"
        required
      />
    </div>
  );
};

export default CardHolderNameInput;