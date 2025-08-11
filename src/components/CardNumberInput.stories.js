// src/components/CardNumberInput.stories.js
import React, { useState } from 'react';
import CardNumberInput from './CardNumberInput';

export default {
  title: 'Components/CardNumberInput',
  component: CardNumberInput,
};

export const Default = () => {
  const [value, setValue] = useState('');
  return <CardNumberInput value={value} onChange={setValue} />;
};