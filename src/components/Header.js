// src/components/Header.js
import React from 'react';

const Header = () => {
  return (
    <div style={styles.header}>
      <div style={styles.cartContainer}>
        🛒
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
    justifyContent: 'flex-end', // 오른쪽 정렬
    alignItems: 'center',
    padding: '0 16px',
  },
  cartContainer: {
    fontSize: '20px',
    color: '#fff',
    cursor: 'pointer',
  },
};

export default Header;