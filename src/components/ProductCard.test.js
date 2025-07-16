import React from 'react';
import { render, screen } from '@testing-library/react';
import ProductCard from './ProductCard';

// ProductCard 렌더링 테스트
describe('ProductCard', () => {
  test('상품 정보가 화면에 잘 렌더링된다', () => {
    // 테스트용 샘플 데이터
    const sampleProduct = {
      image: 'https://via.placeholder.com/184x120.png?text=샘플',
      brand: '테스트브랜드',
      description: '테스트 설명입니다.',
      price: 12345,
    };

    render(
      <ProductCard
        image={sampleProduct.image}
        brand={sampleProduct.brand}
        description={sampleProduct.description}
        price={sampleProduct.price}
      />
    );

    // 기대하는 요소들이 화면에 모두 잘 나오는지 확인
    expect(screen.getByText('테스트브랜드')).toBeInTheDocument();
    expect(screen.getByText('테스트 설명입니다.')).toBeInTheDocument();
    expect(screen.getByText('12,345원')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: '담기' })).toBeInTheDocument();
  });
});