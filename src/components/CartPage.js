// src/components/CartPage.js
import React from 'react';
import CartItem from './CartItem';

const CartPage = ({ cart, setCart, onBack, onCheckout }) => {
  const inc = (id) =>
    setCart((prev) =>
      prev.map((it) => (it.id === id ? { ...it, qty: it.qty + 1 } : it))
    );
  const dec = (id) =>
    setCart((prev) =>
      prev.map((it) =>
        it.id === id ? { ...it, qty: Math.max(1, it.qty - 1) } : it
      )
    );
  const removeItem = (id) => setCart((prev) => prev.filter((it) => it.id !== id));

  const subtotal = cart.reduce((s, it) => s + it.price * it.qty, 0);
  const shipping = cart.length > 100000 ? 3000 : 0;
  const total = subtotal + shipping;

  return (
    <div style={styles.wrap}>
      <div style={styles.topBar}>
        <h2 style={styles.title}>장바구니</h2>
      </div>

      <p style={styles.caption}>현재 {cart.length}개의 상품이 담겨있습니다.</p>

      <div style={styles.list}>
        {cart.map((item) => (
          <CartItem
            key={item.id}
            image={item.image}
            brand={item.brand}
            price={item.price}
            qty={item.qty}
            onInc={() => inc(item.id)}
            onDec={() => dec(item.id)}
            onRemove={() => removeItem(item.id)}
          />
        ))}
      </div>

      <div style={styles.summary}>
        <div style={styles.sumRow}>
          <span>상품 금액</span>
          <strong>{subtotal.toLocaleString()}원</strong>
        </div>
        <div style={styles.sumRow}>
          <span>배송비</span>
          <strong>{shipping.toLocaleString()}원</strong>
        </div>
      </div>

      <div style={styles.totalBox}>
        <span>총 금액</span>
        <strong>{total.toLocaleString()}원</strong>
      </div>

      <button
        style={styles.payBtn}
        onClick={onCheckout}
        disabled={cart.length === 0}
      >
        결제하기
      </button>
    </div>
  );
};

const styles = {
  wrap: { paddingBottom: 24 },
  topBar: {
    display: 'flex',
    alignItems: 'center',
    paddingTop: 16,
  },
  backBtn: {
    border: 'none',
    background: 'transparent',
    fontSize: 22,
    cursor: 'pointer',
    marginRight: 6,
  },
  title: { margin: 0, fontSize: 24 },
  caption: { margin: '6px 0 16px', color: '#666', fontSize: 13 },
  list: { display: 'flex', flexDirection: 'column', gap: 12 },
  summary: {
    background: '#fff',
    borderRadius: 12,
    marginTop: 16,
    padding: '12px 14px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
  },
  sumRow: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '6px 0',
    fontSize: 14,
  },
  totalBox: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: 12,
    padding: '14px 14px',
    background: '#fff',
    borderRadius: 12,
    fontSize: 18,
    fontWeight: 800,
    boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
  },
  payBtn: {
    width: '100%',
    marginTop: 16,
    padding: '16px 0',
    border: 'none',
    borderRadius: 18,
    background: '#FFEF64',
    color: '#000',
    fontSize: 16,
    cursor: 'pointer',
  },
};

export default CartPage;