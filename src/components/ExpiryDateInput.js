import React from 'react';

const ExpiryDateInput = ({ value, onChange }) => {
  const handleChange = (e) => {
    let input = e.target.value.replace(/[^0-9]/g, '').slice(0, 4);
    if (input.length > 2) {
      input = input.slice(0, 2) + '/' + input.slice(2);
    }
    onChange(input);
  };

  return (
    <div className="mb-4">
      <label className="text-sm text-gray-600">유효기간</label>
      <input
        type="text"
        value={value}
        onChange={handleChange}
        placeholder="MM/YY"
        maxLength={5}
        className="border p-2 rounded-md w-full"
      />
    </div>
  );
};

export default ExpiryDateInput;