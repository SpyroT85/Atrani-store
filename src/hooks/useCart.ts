import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('useCart must be used within CartProvider');
  return ctx;
}
import { useState, useEffect } from 'react';
import type { CartItem } from '../context/CartContext';

export function useCartInternal() {
  const [items, setItems] = useState<CartItem[]>(() => {
    const stored = localStorage.getItem('cart-items');
    return stored ? JSON.parse(stored) : [];
  });
  useEffect(() => {
    localStorage.setItem('cart-items', JSON.stringify(items));
  }, [items]);

  const addItem = (newItem: Omit<CartItem, 'qty'>) => {
    setItems(prev => {
      const existing = prev.find(i => i.id === newItem.id);
      if (existing) {
        return prev.map(i => i.id === newItem.id ? { ...i, qty: i.qty + 1 } : i);
      }
      return [...prev, { ...newItem, qty: 1 }];
    });
  };

  const removeItem = (id: string) =>
    setItems(prev => prev.filter(i => i.id !== id));

  const updateQty = (id: string, qty: number) =>
    setItems(prev => prev.map(i => i.id === id ? { ...i, qty } : i));

  const removeAll = () => setItems([]);

  const totalItems = items.reduce((acc, i) => acc + i.qty, 0);

  return { items, addItem, removeItem, updateQty, removeAll, totalItems };
}
