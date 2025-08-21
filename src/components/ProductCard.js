// src/components/ProductCard.js
import React from 'react';

const ProductCard = ({ image, brand, description, price, onPurchase, onAddToCart, onClick }) => {
  // 버튼 클릭 시 상위 onClick(카드 클릭)으로 전파 방지
  const stop = (e) => e.stopPropagation();

  return (
    <div
      style={styles.card}
      onClick={onClick}                 // ✅ 카드 전체 클릭 가능
      role="button"
      tabIndex={0}
      onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && onClick && onClick()}
    >
      <img
        src={image}
        alt={brand}
        style={styles.image}
        onClick={onClick}              // ✅ 이미지 클릭으로도 이동
      />
      <div style={styles.textContainer}>
        <h3 style={styles.brand}>{brand}</h3>
        <p style={styles.description}>{description}</p>
        <p style={styles.price}>{price.toLocaleString()}원</p>

        {/* 버튼 영역 */}
        <div style={styles.buttonContainer}>
          <button
            style={styles.button}
            onClick={(e) => { stop(e); onAddToCart && onAddToCart(); }}
            type="button"
          >
            담기
          </button>
          <button
            style={{ ...styles.button, backgroundColor: '#FFEF64', color: '#000' }}
            onClick={(e) => { stop(e); onPurchase && onPurchase(); }}
            type="button"
          >
            구매
          </button>
        </div>
      </div>
    </div>
  );
};

const styles = {
  card: {
    width: '184px',
    height: '247px',
    borderRadius: '12px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
    overflow: 'hidden',
    backgroundColor: '#fff',
    display: 'flex',
    flexDirection: 'column',
    cursor: 'pointer', // ✅ 클릭 affordance
  },
  image: {
    width: '184px',
    height: '115px',
    objectFit: 'cover',
  },
  textContainer: {
    padding: '10px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    flexGrow: 1,
  },
  brand: {
    margin: '10px 0 7px 0',
    fontWeight: '600',
    fontSize: '14px',
  },
  description: {
    margin: '0 0 7px 0',
    fontSize: '12px',
    color: '#555',
    lineHeight: '1.4',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
  price: {
    fontWeight: 'bold',
    fontSize: '14px',
    margin: '0 0 8px 0',
  },
  buttonContainer: {
    display: 'flex',
    gap: '6px',
  },
  button: {
    padding: '4.5px 12px',
    border: 'none',
    backgroundColor: '#000',
    color: '#fff',
    borderRadius: '15px',
    fontSize: '12px',
    cursor: 'pointer',
  },
};

export default ProductCard;