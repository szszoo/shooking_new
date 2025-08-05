// src/App.js
/*import React from 'react';
import ProductCard from './components/ProductCard';
import Header from './components/Header';

import shoes1 from './assets/shoes_01.png';
import shoes2 from './assets/shoes_02.png';
import shoes3 from './assets/shoes_03.png';
import shoes4 from './assets/shoes_04.png';
import shoes5 from './assets/shoes_05.png';
import shoes6 from './assets/shoes_06.png';

function App() {
  const products = [
    {
      image: shoes1,
      brand: '브랜드A',
      description: '편안하고 착용감이 좋은 신발',
      price: 35000,
    },
    {
      image: shoes2,
      brand: '브랜드A',
      description: '힙한 컬러가 매력적인 신발',
      price: 25000,
    },
    {
      image: shoes3,
      brand: '브랜드B',
      description: '편안하고 착용감이 좋은 신발',
      price: 35000,
    },
    {
      image: shoes4,
      brand: '브랜드B',
      description: '힙한 컬러가 매력적인 신발',
      price: 35000,
    },
    {
      image: shoes5,
      brand: '브랜드C',
      description: '편안하고 착용감이 좋은 신발',
      price: 52000,
    },
    {
      image: shoes6,
      brand: '브랜드C',
      description: '힙한 컬러가 매력적인 신발',
      price: 35000,
    },
  ];

  return (
    <div style={styles.page}>
      <Header />
      <div style={styles.titleArea}>
        <h2 style={styles.title}>신발 상품 목록</h2>
        <p style={styles.subtitle}>현재 {products.length}개의 상품이 있습니다.</p>
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

export default App;*/
// src/App.js
import React from 'react';
import PaymentFlow from './components/PaymentFlow';

function App() {
  return (
    <div className="App min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <PaymentFlow />
    </div>
  );
}

export default App;