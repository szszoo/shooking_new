import React from 'react';
import './AddCardButton.css';

const AddCardButton = ({ onClick, disabled }) => {
  return (
    <button
      onClick={onClick}
      className={`submit-btn ${disabled ? 'is-disabled' : ''}`}
      disabled={disabled}
    >
      작성완료
    </button>
  );
};

export default AddCardButton;