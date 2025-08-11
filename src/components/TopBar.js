// src/components/TopBar.js
import React from 'react';

const TopBar = ({ showBack, onBack, showCart, cartCount, onCartClick }) => {
  return (
    <div style={styles.header}>
      {/* Left: Back 버튼 */}
      <div style={styles.side}>
        {showBack ? (
          <button style={styles.iconBtn} onClick={onBack} aria-label="뒤로가기">
            ←
          </button>
        ) : null}
      </div>

      {/* Center: 비워둠 */}
      <div style={styles.center}></div>

      {/* Right: Cart 버튼 */}
      <div style={styles.side}>
        {showCart ? (
          <button style={styles.iconBtn} onClick={onCartClick} aria-label="장바구니">
            <span style={styles.iconWrap}>
              <span role="img" aria-label="cart">🛒</span>
              {cartCount > 0 && <span style={styles.badge}>{cartCount}</span>}
            </span>
          </button>
        ) : null}
      </div>
    </div>
  );
};

const styles = {
  header: {
    width: '100%',
    height: 56, // 고정 높이
    backgroundColor: '#000',
    color: '#fff',
    display: 'grid',
    gridTemplateColumns: '48px 1fr 48px', // 좌/중앙/우 고정
    alignItems: 'center',
    padding: '0 8px',
    boxSizing: 'border-box',
  },
  side: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  center: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconBtn: {
    width: 40,
    height: 40,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'transparent',
    border: 'none',
    color: '#fff',
    fontSize: 20,
    cursor: 'pointer',
    padding: 0,
  },
  iconWrap: {
    position: 'relative',
    width: 24,
    height: 24,
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  badge: {
    position: 'absolute',
    top: -6,
    right: -8,
    background: '#FFEF64',
    color: '#000',
    fontSize: 10,
    borderRadius: 10,
    padding: '2px 6px',
    fontWeight: 700,
    lineHeight: 1,
  },
};

export default TopBar;