import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FiTrash2 } from 'react-icons/fi';
import { IoClose, IoCartOutline } from 'react-icons/io5';

export interface CartItem {
  id: string;
  name: string;
  price: number;
  qty: number;
  image?: string;
}

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onRemoveAll: () => void;
  onUpdateQty: (id: string, qty: number) => void;
  onRemoveItem: (id: string) => void;
}

const SHIPPING = 19.95;

export default function CartDrawer({
  isOpen,
  onClose,
  items,
  onRemoveAll,
  onUpdateQty,
  onRemoveItem,
}: CartDrawerProps) {
  const subtotal = items.reduce((acc, item) => acc + item.price * item.qty, 0);
  const grandTotal = subtotal + (items.length > 0 ? SHIPPING : 0);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [onClose]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  return (
    <>
      {/* Backdrop */}
      <div
        onClick={onClose}
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 40,
          backgroundColor: 'rgba(0,0,0,0.45)',
          opacity: isOpen ? 1 : 0,
          pointerEvents: isOpen ? 'auto' : 'none',
          transition: 'opacity 0.3s ease',
        }}
      />

      {/* Drawer */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          right: 0,
          height: '100%',
          width: '360px',
          maxWidth: '100vw',
          zIndex: 50,
          backgroundColor: '#fff',
          boxShadow: '-4px 0 24px rgba(0,0,0,0.15)',
          display: 'flex',
          flexDirection: 'column',
          transform: isOpen ? 'translateX(0)' : 'translateX(100%)',
          transition: 'transform 0.3s ease',
        }}
      >
        {/* Header */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '20px 24px',
          borderBottom: '1px solid #f0f0f0',
        }}>
          <h2 style={{ fontSize: '14px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#1a1a1a', margin: 0 }}>
            Cart ({items.reduce((a, i) => a + i.qty, 0)})
          </h2>
          <button
            onClick={onClose}
            style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#999', padding: '4px', display: 'flex', alignItems: 'center' }}
          >
            <IoClose size={22} />
          </button>
        </div>

        {/* Items */}
        <div style={{ flex: 1, overflowY: 'auto', padding: '8px 0' }}>
          {items.length === 0 ? (
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%', color: '#aaa', gap: '12px' }}>
              <IoCartOutline style={{ fontSize: '64px' }} />
              <p style={{ fontSize: '14px', margin: 0, fontWeight: 'bold' }}>Your cart is empty</p>
            </div>
          ) : (
            items.map((item) => (
              <div key={item.id} style={{
                display: 'flex',
                alignItems: 'center',
                gap: '16px',
                padding: '16px 24px',
                borderBottom: '1px solid #f5f5f5',
              }}>
                {/* Image or placeholder */}
                <div style={{
                  width: '80px',
                  height: '80px',
                  borderRadius: '6px',
                  overflow: 'hidden',
                  flexShrink: 0,
                  backgroundColor: '#f5f5f5',
                }}>
                  {item.image ? (
                    <img src={item.image} alt={item.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  ) : (
                    <div style={{ width: '100%', height: '100%', backgroundColor: '#e8e8e8' }} />
                  )}
                </div>

                {/* Name + price + qty */}
                <div style={{ flex: 1, minWidth: 0 }}>
                  <p style={{ margin: '0 0 4px 0', fontSize: '14px', fontWeight: 700, color: '#1a1a1a', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                    {item.name}
                  </p>
                  <p style={{ margin: '0 0 10px 0', fontSize: '13px', color: '#A67C52', fontWeight: 600 }}>
                    €{item.price.toFixed(2)}
                  </p>
                  {/* Qty stepper horizontal */}
                  <div style={{ display: 'flex', alignItems: 'center', border: '1px solid #e0e0e0', borderRadius: '4px', width: 'fit-content' }}>
                    <button
                      onClick={() => onUpdateQty(item.id, Math.max(1, item.qty - 1))}
                      style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '4px 10px', fontSize: '14px', color: '#666' }}
                    >−</button>
                    <span style={{ padding: '4px 10px', fontSize: '14px', fontWeight: 700, color: '#1a1a1a', borderLeft: '1px solid #e0e0e0', borderRight: '1px solid #e0e0e0' }}>
                      {item.qty}
                    </span>
                    <button
                      onClick={() => onUpdateQty(item.id, item.qty + 1)}
                      style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '4px 10px', fontSize: '14px', color: '#666' }}
                    >+</button>
                  </div>
                </div>

                {/* Line total + delete */}
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '8px', flexShrink: 0 }}>
                  <span style={{ fontSize: '14px', fontWeight: 700, color: '#1a1a1a' }}>
                    €{(item.price * item.qty).toFixed(2)}
                  </span>
                  <button
                    onClick={() => onRemoveItem(item.id)}
                    style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#ccc', padding: 0, display: 'flex' }}
                    onMouseEnter={e => (e.currentTarget.style.color = '#e05252')}
                    onMouseLeave={e => (e.currentTarget.style.color = '#ccc')}
                  >
                    <FiTrash2 size={14} />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div style={{ padding: '16px 24px', borderTop: '1px solid #f0f0f0', display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {/* Remove All */}
            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
              <button
                onClick={onRemoveAll}
                style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '11px', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#aaa' }}
                onMouseEnter={e => (e.currentTarget.style.color = '#e05252')}
                onMouseLeave={e => (e.currentTarget.style.color = '#aaa')}
              >
                Remove All
              </button>
            </div>

            {/* Totals */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.08em', color: '#999' }}>Subtotal</span>
                <span style={{ fontSize: '13px', fontWeight: 700, color: '#1a1a1a' }}>€{subtotal.toFixed(2)}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.08em', color: '#999' }}>Shipping</span>
                <span style={{ fontSize: '13px', fontWeight: 700, color: '#1a1a1a' }}>€{SHIPPING.toFixed(2)}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '10px', borderTop: '1px solid #f0f0f0' }}>
                <span style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 700, color: '#666' }}>Grand Total</span>
                <span style={{ fontSize: '18px', fontWeight: 700, color: '#A67C52' }}>€{grandTotal.toFixed(2)}</span>
              </div>
            </div>

            {/* Checkout */}
            <Link
              to="/checkout"
              onClick={onClose}
              style={{
                display: 'block',
                width: '100%',
                backgroundColor: '#A67C52',
                color: '#fff',
                textAlign: 'center',
                padding: '16px',
                fontSize: '12px',
                fontWeight: 700,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                borderRadius: '4px',
                textDecoration: 'none',
                boxSizing: 'border-box',
              }}
              onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#8a5e3a')}
              onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#A67C52')}
            >
              Checkout
            </Link>

            {/* Καλάθι link */}
            <p style={{ textAlign: 'center', margin: 0, fontSize: '12px', color: '#aaa' }}>
              Cart: {items.reduce((a, i) => a + i.qty, 0)} items
            </p>
          </div>
        )}
      </div>
    </>
  );
}