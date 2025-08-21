// src/App.js
import React, { useState } from 'react';
import ProductCard from './components/ProductCard';
import PaymentFlow from './components/PaymentFlow';
import CartPage from './components/CartPage';
import TopBar from './components/TopBar';
import ProductDetail from './components/ProductDetail';
import PaymentDone from './components/PaymentDone';

import shoes1 from './assets/shoes_01.png';
import shoes2 from './assets/shoes_02.png';
import shoes3 from './assets/shoes_03.png';
import shoes4 from './assets/shoes_04.png';
import shoes5 from './assets/shoes_05.png';
import shoes6 from './assets/shoes_06.png';

function App() {
  // shop | cart | payment | detail | paymentDone
  const [view, setView] = useState('shop');
  const [cart, setCart] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [paymentInfo, setPaymentInfo] = useState({ total: 0, count: 0 });

  const products = [
    { id: 1, image: shoes1, brand: '브랜드A', description: '편안하고 착용감이 좋은 신발', price: 35000 },
    { id: 2, image: shoes2, brand: '브랜드A', description: '힙한 컬러가 매력적인 신발', price: 25000 },
    { id: 3, image: shoes3, brand: '브랜드B', description: '편안하고 착용감이 좋은 신발', price: 35000 },
    { id: 4, image: shoes4, brand: '브랜드B', description: '힙한 컬러가 매력적인 신발', price: 35000 },
    { id: 5, image: shoes5, brand: '브랜드C', description: '편안하고 착용감이 좋은 신발', price: 52000 },
    { id: 6, image: shoes6, brand: '브랜드C', description: '힙한 컬러가 매력적인 신발', price: 35000 },
  ];

  // 장바구니 담기(기본 수량 1)
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

  // 상세에서 수량 선택해 담기
  const addToCartWithQty = (product, qty) => {
    setCart((prev) => {
      const idx = prev.findIndex((i) => i.id === product.id);
      if (idx >= 0) {
        const copy = [...prev];
        copy[idx] = { ...copy[idx], qty: copy[idx].qty + qty };
        return copy;
      }
      return [...prev, { ...product, qty }];
    });
  };

  const computeTotals = (items) => {
    const subtotal = items.reduce((s, it) => s + it.price * it.qty, 0);
    const shipping = subtotal < 100000 ? 3000 : 0; // 10만원 미만 3,000원
    const total = subtotal + shipping;
    const count = items.reduce((s, it) => s + it.qty, 0);
    return { subtotal, shipping, total, count };
  };

  const goCheckout = () => setView('payment');
  const cartCount = cart.reduce((sum, it) => sum + it.qty, 0);

  return (
    <div style={styles.page}>
      {/* 상세/결제완료 화면은 자체 상단바 사용 → TopBar 숨김 */}
      {view !== 'detail' && view !== 'paymentDone' && (
        <>
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
        </>
      )}

      {view === 'detail' ? (
        <ProductDetail
          product={selectedProduct}
          onBack={() => setView('shop')}
          onAddToCart={(prod, qty) => {
            addToCartWithQty(prod, qty);
            // setView('cart'); // 바로 장바구니로 보내고 싶으면 사용
          }}
        />
      ) : view === 'payment' ? (
        <PaymentFlow
          onClose={() => setView('shop')}
          onPaid={() => {
            const { total, count } = computeTotals(cart);
            setPaymentInfo({ total, count });
            setCart([]);             // 결제 후 장바구니 비우기(옵션)
            setView('paymentDone');  // 결제 완료 화면
          }}
        />
      ) : view === 'paymentDone' ? (
        <PaymentDone
          itemCount={paymentInfo.count}
          total={paymentInfo.total}
          onGoShop={() => setView('shop')}
        />
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
                  setView('payment'); // 구매 → 결제 모듈
                }}
                // ✅ 이미지(또는 카드) 클릭 시 상세로 이동
                onClick={() => {
                  setSelectedProduct(p);
                  setView('detail');
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