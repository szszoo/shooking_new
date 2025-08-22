// src/components/ProductDetail.js
import React, { useMemo, useState } from 'react';
import './ProductDetail.css';
import TopBar from './TopBar';
import rel1 from '../assets/related_01.jpg';
import rel2 from '../assets/related_02.jpg';
import rel3 from '../assets/related_03.jpg';

export default function ProductDetail({
  product = {
    title: '브랜드A',
    subtitle: '편안하고 착용감이 좋은 신발',
    price: 35000,
    image: '/images/sample-shoes.jpg',
  },
  related = [
    { id: 1, image: rel1, alt: '연관 상품 1', href: '/product/1' },
    { id: 2, image: rel2, alt: '연관 상품 2', href: '/product/2' },
    { id: 3, image: rel3, alt: '연관 상품 3', href: '/product/3' },
  ],
  onBack,
  onAddToCart,
  cartCount = 0,
  onCartClick,
}) {
  const [qty, setQty] = useState(1);

  // ✅ 여기서 키 폴백 처리
  const title = product.title ?? product.brand ?? '';
  const subtitle = product.subtitle ?? product.description ?? '';
  const imageSrc = product.image;
  const priceNumber = product.price ?? 0;

  const priceLabel = useMemo(
    () => new Intl.NumberFormat('ko-KR').format(priceNumber) + '원',
    [priceNumber]
  );

  const dec = () => setQty((n) => Math.max(1, n - 1));
  const inc = () => setQty((n) => Math.min(99, n + 1));
  const handleAdd = () => { onAddToCart && onAddToCart(product, qty); };

  return (
    <main className="pd" role="main">
      <TopBar
        showBack
        onBack={onBack}
        showCart={!!onCartClick}
        cartCount={cartCount}
        onCartClick={onCartClick}
      />

      <section className="pd__media" aria-label="상품 이미지">
        <figure className="pd__figure">
          <img className="pd__image" src={imageSrc} alt={`${title} 메인 이미지`} />
        </figure>
      </section>

      <section className="pd__info" aria-labelledby="pd-title">
        <div className="pd__head">
          <div className="pd__meta">
            <h2 className="pd__title" id="pd-title">{title}</h2>
            {subtitle && <p className="pd__subtitle">{subtitle}</p>}
            <div className="pd__price" aria-label="가격">
              <strong className="pd__price-value">{priceLabel}</strong>
            </div>
          </div>

          <div className="pd__qty" aria-label="수량 선택">
            <button className="pd__qty-btn pd__qty-btn--minus" type="button" aria-label="수량 감소" onClick={dec}>−</button>
            <output className="pd__qty-value" aria-live="polite" htmlFor="qty-input">
              {String(qty).padStart(2, '0')}
            </output>
            <button className="pd__qty-btn pd__qty-btn--plus" type="button" aria-label="수량 증가" onClick={inc}>＋</button>
            <input type="hidden" id="qty-input" name="quantity" value={qty} />
          </div>
        </div>

        <div className="pd__cta">
          <button className="pd__cart-btn" type="button" onClick={handleAdd}>장바구니 담기</button>
        </div>
      </section>

      <section className="pd__related" aria-labelledby="related-title">
        <h3 className="pd__related-title" id="related-title">관련 상품</h3>
        <p className="pd__related-sub">{title}의 다른 신발은 어떤가요?</p>
        <ul className="pd__related-list" role="list">
          {related.map((r) => (
            <li className="pd__related-item" key={r.id}>
              <a className="pd__related-link" href={r.href || '#'} aria-label={`연관 상품 ${r.id} 보기`}>
                <img className="pd__related-thumb" src={r.image} alt={r.alt || '연관 상품'} />
              </a>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}