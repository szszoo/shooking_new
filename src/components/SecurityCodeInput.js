import React from 'react';

const SecurityCodeInput = ({ value, onChange }) => {
  const handleChange = (e) => {
    const input = e.target.value.replace(/[^0-9]/g, '').slice(0, 4);
    onChange(input);
  };

  return (
    <div className="mb-4">
      <label className="text-sm text-gray-600">보안 코드 (CVC)</label>
      <input
        type="password"
        value={value}
        onChange={handleChange}
        placeholder="•••"
        className="border p-2 rounded-md w-full"
        maxLength={4}
      />
    </div>
  );
};

export default SecurityCodeInput;