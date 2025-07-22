// src/components/ProductCard.js
import React from 'react';

const ProductCard = ({ image, brand, description, price }) => {
  return (
    <div style={styles.card}>
      <img src={image} alt={brand} style={styles.image} />
      <div style={styles.textContainer}>
        <h3 style={styles.brand}>{brand}</h3>
        <p style={styles.description}>{description}</p>
        <p style={styles.price}>{price.toLocaleString()}원</p>
        <div style={styles.buttonContainer}>
          <button style={styles.cartButton}>담기</button>
          <button style={styles.buyButton}>구매</button>
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
    margin: '17px 0 7px 0',
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
    gap: '8px',
  },
  cartButton: {
    padding: '4.5px 12px',
    border: 'none',
    backgroundColor: '#000',
    color: '#fff',
    borderRadius: '15px',
    fontSize: '12px',
    cursor: 'pointer',
    alignSelf: 'flex-start',
  },
  buyButton: {
    padding: '4.5px 12px',
    border: 'none',
    backgroundColor: '#ffef54',
    color: '#000',
    borderRadius: '15px',
    fontSize: '12px',
    cursor: 'pointer',
    alignSelf: 'flex-start',
  },
};

export default ProductCard;