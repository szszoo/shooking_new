// src/App.js
import React, { useState } from 'react';
import ProductCard from './components/ProductCard';
import PaymentFlow from './components/PaymentFlow';
import CartPage from './components/CartPage';
import TopBar from './components/TopBar';

import shoes1 from './assets/shoes_01.png';
import shoes2 from './assets/shoes_02.png';
import shoes3 from './assets/shoes_03.png';
import shoes4 from './assets/shoes_04.png';
import shoes5 from './assets/shoes_05.png';
import shoes6 from './assets/shoes_06.png';

function App() {
  const [view, setView] = useState('shop'); // 'shop' | 'cart' | 'payment'
  const [cart, setCart] = useState([]);

  const products = [
    { id: 1, image: shoes1, brand: '브랜드A', description: '편안하고 착용감이 좋은 신발', price: 35000 },
    { id: 2, image: shoes2, brand: '브랜드A', description: '힙한 컬러가 매력적인 신발', price: 25000 },
    { id: 3, image: shoes3, brand: '브랜드B', description: '편안하고 착용감이 좋은 신발', price: 35000 },
    { id: 4, image: shoes4, brand: '브랜드B', description: '힙한 컬러가 매력적인 신발', price: 35000 },
    { id: 5, image: shoes5, brand: '브랜드C', description: '편안하고 착용감이 좋은 신발', price: 52000 },
    { id: 6, image: shoes6, brand: '브랜드C', description: '힙한 컬러가 매력적인 신발', price: 35000 },
  ];

  const addToCart = (product) => {
    setCart((prev) => {
      const idx = prev.findIndex((i) => i.id === product.id);
      if (idx >= 0) {
        const copy = [...prev];
        copy[idx] = { ...copy[idx], qty: copy[idx].qty + 1 };
        return copy;
      }
      return [...prev, { ...product, qty: 1 }];
    });
  };

  const goCheckout = () => setView('payment');

  const cartCount = cart.reduce((sum, it) => sum + it.qty, 0);

  return (
    <div style={styles.page}>
      {/* TopBar 화면별 토글 */}
      {view === 'shop' && (
        <TopBar
          showBack={false}
          showCart={true}
          cartCount={cartCount}
          onCartClick={() => setView('cart')}
        />
      )}
      {view === 'cart' && (
        <TopBar
          showBack={true}
          onBack={() => setView('shop')}
          showCart={false}
        />
      )}
      {view === 'payment' && (
        <TopBar
          showBack={true}
          onBack={() => setView('shop')}
          showCart={false}
        />
      )}

      {view === 'payment' ? (
        <PaymentFlow onClose={() => setView('shop')} />
      ) : view === 'cart' ? (
        <CartPage
          cart={cart}
          setCart={setCart}
          onBack={() => setView('shop')}
          onCheckout={goCheckout}
        />
      ) : (
        <>
          <div style={styles.titleArea}>
            <h2 style={styles.title}>신발 상품 목록</h2>
            <p style={styles.subtitle}>현재 {products.length}개의 상품이 있습니다.</p>
          </div>
          <div style={styles.cardList}>
            {products.map((p) => (
              <ProductCard
                key={p.id}
                image={p.image}
                brand={p.brand}
                description={p.description}
                price={p.price}
                onAddToCart={() => addToCart(p)}
                onPurchase={() => {
                  addToCart(p);
                  setView('payment'); // ✅ 구매 버튼 → 바로 결제 모듈 이동
                }}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

const styles = {
  page: {
    fontFamily: 'sans-serif',
    backgroundColor: '#fafafa',
    padding: '0 16px',
    minHeight: '100vh',
  },
  titleArea: { padding: '24px 0 12px' },
  title: { margin: 0, fontSize: '20px' },
  subtitle: { margin: '4px 0 0', fontSize: '14px', color: '#555' },
  cardList: { display: 'flex', gap: '16px', flexWrap: 'wrap', paddingBottom: '32px' },
};

export default App;