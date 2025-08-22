// src/components/PaymentDone.js
import React from 'react';

export default function PaymentDone({
  itemCount = 0,
  total = 0,
  onGoShop,
  showHeader = true, // ✅ 헤더 표시 여부
}) {
  return (
    <div style={S.wrap}>
      {/* ✅ 상단바는 showHeader일 때만 표시 */}
      {showHeader && <div style={S.topBar} />}

      <div style={S.body}>
        <h2 style={S.title}>결제 완료!</h2>
        <p style={S.sub}>총 {itemCount}개의 상품을 구매하셨습니다.</p>

        <div style={S.totalBox}>
          <div style={S.totalLabel}>총 결제 금액</div>
          <div style={S.totalPrice}>{Number(total).toLocaleString()}원</div>
        </div>

        <button style={S.button} type="button" onClick={onGoShop}>
          상품 목록 보기
        </button>
      </div>
    </div>
  );
}

const S = {
  wrap: {
    minHeight: '100vh',
    background: '#f7f7f7',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  topBar: { width: '100%', height: 56, background: '#000' },
  body: {
    width: 320,
    background: '#fff',
    marginTop: 24,
    padding: '32px 16px 24px',
    borderRadius: 12,
    boxShadow: '0 2px 10px rgba(0,0,0,0.08)',
    textAlign: 'center',
  },
  title: { margin: 0, fontSize: 20, fontWeight: 800 },
  sub: { margin: '8px 0 20px', fontSize: 13, color: '#666' },
  totalBox: { marginBottom: 20 },
  totalLabel: { fontSize: 13, color: '#666', marginBottom: 6 },
  totalPrice: { fontSize: 22, fontWeight: 800 },
  button: {
    width: '100%',
    height: 44,
    border: 'none',
    borderRadius: 999,
    background: '#FFEF64',
    color: '#000',
    fontSize: 14,
    fontWeight: 800,
    cursor: 'pointer',
  },
};