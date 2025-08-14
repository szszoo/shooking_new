import CartItem from './CartItem';
import { fn } from '@storybook/test';
import shoes1 from '../assets/shoes_01.png';

export default {
  title: 'Components/CartItem',
  component: CartItem,
  tags: ['autodocs'],
  args: {
    image: shoes1,
    brand: '브랜드A',
    price: 35000,
    qty: 1,
    onInc: fn(),
    onDec: fn(),
    onRemove: fn(),
  },
};

export const Default = {};
export const Qty3 = {
  args: { qty: 3, price: 52000, brand: '브랜드C' },
};