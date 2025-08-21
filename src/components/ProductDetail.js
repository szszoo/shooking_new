// src/components/ProductDetail.js
import React, { useMemo, useState } from 'react';
import './ProductDetail.css';
import rel1 from '../assets/related_01.jpg';
import rel2 from '../assets/related_02.jpg';
import rel3 from '../assets/related_03.jpg';

/**
 * ProductDetail
 * - 피그마 모바일 상세페이지 시안을 기반으로 한 React 컴포넌트
 * - 필요한 props:
 *   product: {
 *     title: string,        // 상품명 (예: '브랜드A')
 *     subtitle: string,     // 상품 설명 (예: '편안하고 착용감이 좋은 신발')
 *     price: number,        // 원화 정수 (예: 35000)
 *     image: string,        // 메인 이미지 경로/URL
 *   }
 *   related: Array<{ id: string|number, image: string, alt?: string, href?: string }>
 *   onBack?: () => void
 *   onShare?: () => void
 *   onAddToCart?: ({ qty: number }) => void
 */
export default function ProductDetail({
  product = {
    title: '브랜드A',
    subtitle: '편안하고 착용감이 좋은 신발',
    price: 35000,
    image: '/images/sample-shoes.jpg',
  },
  related = [
    { id: 1, image: rel1 , alt: '연관 상품 1', href: '/product/1' },
    { id: 2, image: rel2 , alt: '연관 상품 2', href: '/product/2' },
    { id: 3, image: rel3 , alt: '연관 상품 3', href: '/product/3' },
  ],
  onBack,
  onShare,
  onAddToCart,
}) {
  const [qty, setQty] = useState(1);

  const priceLabel = useMemo(
    () => new Intl.NumberFormat('ko-KR').format(product.price) + '원',
    [product.price]
  );

  const dec = () => setQty((n) => Math.max(1, n - 1));
  const inc = () => setQty((n) => Math.min(99, n + 1));

  const handleAdd = () => {
    if (onAddToCart) onAddToCart({ qty });
  };

  return (
    <main className="pd" role="main">
      {/* 상단 앱바 */}
      <header className="pd__appbar" aria-label="상단 도구 모음">
        <button
          className="pd__icon-btn pd__icon-btn--back"
          type="button"
          aria-label="뒤로가기"
          onClick={onBack}
        >
          <span aria-hidden>←</span>
        </button>
        <h1 className="pd__sr-only">상품 상세</h1>
        {/* 공유 버튼 제거됨 */}
      </header>

      {/* 상품 이미지 */}
      <section className="pd__media" aria-label="상품 이미지">
        <figure className="pd__figure">
          <img
            className="pd__image"
            src={product.image}
            alt={`${product.title} 메인 이미지`}
            width="360"
            height="360"
          />
        </figure>
      </section>

      {/* 상품 정보 */}
      <section className="pd__info" aria-labelledby="pd-title">
        <div className="pd__title-wrap">
          <h2 className="pd__title" id="pd-title">{product.title}</h2>
          <p className="pd__subtitle">{product.subtitle}</p>
        </div>

        {/* 수량 조절 */}
        <div className="pd__qty" aria-label="수량 선택">
          <button
            className="pd__qty-btn pd__qty-btn--minus"
            type="button"
            aria-label="수량 감소"
            onClick={dec}
          >
            −
          </button>
          <output
            className="pd__qty-value"
            aria-live="polite"
            htmlFor="qty-input"
          >
            {String(qty).padStart(2, '0')}
          </output>
          <button
            className="pd__qty-btn pd__qty-btn--plus"
            type="button"
            aria-label="수량 증가"
            onClick={inc}
          >
            ＋
          </button>
          <input type="hidden" id="qty-input" name="quantity" value={qty} />
        </div>

        {/* 가격 */}
        <div className="pd__price" aria-label="가격">
          <strong className="pd__price-value">{priceLabel}</strong>
        </div>

        {/* CTA */}
        <div className="pd__cta">
          <button
            className="pd__cart-btn"
            type="button"
            onClick={handleAdd}
          >
            장바구니 담기
          </button>
        </div>
      </section>

      {/* 관련 상품 */}
      <section className="pd__related" aria-labelledby="related-title">
        <h3 className="pd__related-title" id="related-title">관련 상품</h3>
        <p className="pd__related-sub">브랜드A의 다른 신발은 어떤가요?</p>

        <ul className="pd__related-list" role="list">
          {related.map((r) => (
            <li className="pd__related-item" key={r.id}>
              <a
                className="pd__related-link"
                href={r.href || '#'}
                aria-label={`연관 상품 ${r.id} 보기`}
              >
                <img
                  className="pd__related-thumb"
                  src={r.image}
                  alt={r.alt || '연관 상품'}
                  width="72"
                  height="72"
                />
              </a>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
