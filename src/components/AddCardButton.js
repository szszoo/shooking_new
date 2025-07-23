import React from 'react';

const AddCardButton = ({ onClick }) => {
  return (
    <button onClick={onClick} className="bg-yellow-400 hover:bg-yellow-500 text-white py-2 px-4 rounded">
      카드 등록하기
    </button>
  );
};

export default AddCardButton;