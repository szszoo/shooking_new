// src/components/Header.js
import React from 'react';

const Header = ({ count = 0, onCartClick }) => {
  return (
    <div style={styles.header}>
      <div style={styles.right}>
        <button style={styles.cartBtn} onClick={onCartClick}>
          <span role="img" aria-label="cart">🛒</span>
          {count > 0 && <span style={styles.badge}>{count}</span>}
        </button>
      </div>
    </div>
  );
};

const styles = {
  header: {
    width: '100%',
    height: '69px',
    backgroundColor: '#000',
    display: 'flex',
    alignItems: 'center',
    padding: '0 16px',
  },
  right: { marginLeft: 'auto' },
  cartBtn: {
    position: 'relative',
    fontSize: '20px',
    color: '#fff',
    cursor: 'pointer',
    background: 'transparent',
    border: 'none',
    padding: 0,
  },
  badge: {
    position: 'absolute',
    top: -6,
    right: -10,
    background: '#FFEF64',
    color: '#000',
    fontSize: 10,
    borderRadius: 10,
    padding: '2px 6px',
    fontWeight: 700,
  },
};

export default Header;