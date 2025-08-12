import React from 'react';

const CartItem = ({ image, brand, price, qty, onInc, onDec, onRemove }) => {
  return (
    <div style={styles.row}>
      <img src={image} alt={brand} style={styles.thumb} />
      <div style={styles.info}>
        <div style={styles.brand}>{brand}</div>
        <div style={styles.price}>{price.toLocaleString()}원</div>
        <div style={styles.qtyArea}>
          <button style={styles.qtyBtn} onClick={onDec}>−</button>
          <span style={styles.qtyText}>{qty}</span>
          <button style={styles.qtyBtn} onClick={onInc}>＋</button>
        </div>
      </div>
      <button style={styles.remove} onClick={onRemove}>×</button>
    </div>
  );
};

const styles = {
  row: {
    display: 'flex',
    alignItems: 'center',
    background: '#fff',
    borderRadius: 12,
    padding: 12,
    boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
    position: 'relative',
    width: 360,
  },
  thumb: { width: 96, height: 96, objectFit: 'cover', borderRadius: 10 },
  info: { marginLeft: 12, display: 'flex', flexDirection: 'column', gap: 6 },
  brand: { fontSize: 14, color: '#444' },
  price: { fontSize: 16, fontWeight: 800 },
  qtyArea: { display: 'flex', alignItems: 'center', gap: 10, marginTop: 6 },
  qtyBtn: {
    width: 28,
    height: 28,
    borderRadius: 14,
    border: 'none',
    background: '#eee',
    fontSize: 18,
    cursor: 'pointer',
  },
  qtyText: { minWidth: 16, textAlign: 'center', fontSize: 14 },
  remove: {
    position: 'absolute',
    right: 10,
    top: 8,
    border: 'none',
    background: 'transparent',
    fontSize: 20,
    cursor: 'pointer',
    color: '#aaa',
  },
};

export default CartItem;