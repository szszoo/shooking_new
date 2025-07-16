// src/App.js
import React from 'react';
import ProductCard from './components/ProductCard';
import Header from './components/Header';

function App() {
  const products = [
    {
      image: 'https://via.placeholder.com/184x120.png?text=신발1',
      brand: '브랜드A',
      description: '편안하고 착용감이 좋은 신발',
      price: 35000,
    },
    {
      image: 'https://via.placeholder.com/184x120.png?text=신발2',
      brand: '브랜드A',
      description: '힙한 컬러가 매력적인 신발',
      price: 25000,
    },
    {
      image: 'https://via.placeholder.com/184x120.png?text=신발3',
      brand: '브랜드B',
      description: '편안하고 착용감이 좋은 신발',
      price: 35000,
    },
    {
      image: 'https://via.placeholder.com/184x120.png?text=신발4',
      brand: '브랜드B',
      description: '힙한 컬러가 매력적인 신발',
      price: 35000,
    },
    {
      image: 'https://via.placeholder.com/184x120.png?text=신발5',
      brand: '브랜드C',
      description: '편안하고 착용감이 좋은 신발',
      price: 52000,
    },
    {
      image: 'https://via.placeholder.com/184x120.png?text=신발6',
      brand: '브랜드C',
      description: '힙한 컬러가 매력정니 신발',
      price: 35000,
    }
  ];

  return (
    <div style={styles.page}>
      <Header />
      <div style={styles.titleArea}>
        <h2 style={styles.title}>신발 상품 목록</h2>
        <p style={styles.subtitle}>현재 6개의 상품이 있습니다.</p>
      </div>
      <div style={styles.cardList}>
        {products.map((p, index) => (
          <ProductCard
            key={index}
            image={p.image}
            brand={p.brand}
            description={p.description}
            price={p.price}
          />
        ))}
      </div>
    </div>
  );
}

const styles = {
  page: {
    fontFamily: 'sans-serif',
    backgroundColor: '#fafafa',
    padding: '0 16px',
  },
  titleArea: {
    padding: '24px 0 12px',
  },
  title: {
    margin: 0,
    fontSize: '20px',
  },
  subtitle: {
    margin: '4px 0 0',
    fontSize: '14px',
    color: '#555',
  },
  cardList: {
    display: 'flex',
    gap: '16px',
    flexWrap: 'wrap',
    paddingBottom: '32px',
  },
};

export default App;