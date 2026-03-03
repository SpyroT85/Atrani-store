import { useState } from 'react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { BiShoppingBag } from "react-icons/bi";
import { IoIosMenu } from "react-icons/io";
import { Link } from 'react-router-dom';
import CartDrawer, { type CartItem } from './ui/CartDrawer';

// Additional imports can go here

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [expandedSection, setExpandedSection] = useState<string | null>(null);
  const [cartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState<CartItem[]>([
    // Mock items — αντικατέστησε με πραγματικό cart state αργότερα
    { id: '1', name: 'Heritage Watch', price: 249.90, qty: 1 },
    { id: '2', name: 'Pocket Classic', price: 99.90, qty: 2 },
  ]);

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  const handleUpdateQty = (id: string, qty: number) => {
    setCartItems(prev => prev.map(item => item.id === id ? { ...item, qty } : item));
  };

  const handleRemoveItem = (id: string) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  const handleRemoveAll = () => {
    setCartItems([]);
  };

  const totalItems = cartItems.reduce((acc, item) => acc + item.qty, 0);

  return (
    <>
      <nav className="relative px-4 md:px-12 py-4 bg-background text-white" style={{ minHeight: '60px', fontFamily: '-apple-system, BlinkMacSystemFont' }}>

        {/* Mobile Layout */}
        <div className="grid grid-cols-3 items-center md:hidden" style={{ paddingTop: '12px' }}>
          <div className="flex items-center justify-start" style={{ marginLeft: '8px' }}>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="flex justify-center items-center hover:text-[#A67C52] transition border border-white/20 rounded p-2"
              aria-label="Toggle mobile menu"
            >
              <IoIosMenu className="w-8 h-8" />
            </button>
          </div>
          <div className="flex items-center justify-center" style={{ position: 'relative', zIndex: 20 }}>
            <Link to="/" style={{ zIndex: 21, display: 'inline-block' }}>
              <img
                src="/images/atrani.webp?v=2"
                alt="Atrani Logo"
                className="filter invert cursor-pointer"
                style={{ height: '28px', width: '96px', objectFit: 'fill' }}
                width="96"
                height="28"
              />
            </Link>
          </div>
          <div className="flex justify-end" style={{ marginRight: '8px' }}>
            <button
              onClick={() => setCartOpen(true)}
              className="hover:text-[#A67C52] transition flex items-center gap-1 cursor-pointer outline-none bg-transparent border-none"
            >
              <BiShoppingBag className="w-6 h-6" />
              <span className="text-xs">({totalItems})</span>
            </button>
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden md:grid grid-cols-3 items-center" style={{ paddingTop: '12px' }}>
          <div className="flex items-center">
            <Link to="/">
              <img
                src="/images/atrani.webp?v=2"
                alt="Atrani Logo"
                className="filter invert cursor-pointer"
                style={{ height: '28px', width: '96px', marginLeft: 'clamp(100px, 23vw, 500px)', objectFit: 'fill' }}
                width="96"
                height="28"
              />
            </Link>
          </div>

          {/* Nav links */}
          <div className="flex justify-center gap-4 md:gap-12 uppercase font-bold tracking-wider whitespace-nowrap" style={{ fontSize: 'clamp(8px, 1vw, 11px)', marginLeft: 'clamp(0px, 10vw, 120px)' }}>
            <Link to="/" className="hover:text-[#A67C52] transition cursor-pointer">Home</Link>
            <DropdownMenu>
              <DropdownMenuTrigger className="uppercase font-bold tracking-wider text-white hover:text-[#A67C52] transition outline-none bg-transparent border-none cursor-pointer" style={{ fontSize: '11px' }}>Watches</DropdownMenuTrigger>
              <DropdownMenuContent sideOffset={16} className="bg-background border border-white/10 text-white min-w-30 relative overflow-visible" style={{ fontFamily: '-apple-system, BlinkMacSystemFont', padding: '8px', borderTop: '3px solid #A67C52' }}>
                <div style={{ position: 'absolute', top: '-10px', left: '50%', transform: 'translateX(-50%)', width: '0', height: '0', borderLeft: '10px solid transparent', borderRight: '10px solid transparent', borderBottom: '10px solid #A67C52', zIndex: 10 }}></div>
                <DropdownMenuGroup>
                  <DropdownMenuItem>
                    <Link to="/watches/luxury" className="hover:bg-[#A67C52]/10 cursor-pointer uppercase tracking-wider justify-center" style={{ fontSize: '10px', padding: '16px 12px' }}>Luxury</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link to="/watches/smartwatches" className="hover:bg-[#A67C52]/10 cursor-pointer uppercase tracking-wider justify-center" style={{ fontSize: '10px', padding: '16px 12px' }}>Smartwatches</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link to="/watches/pocket" className="hover:bg-[#A67C52]/10 cursor-pointer uppercase tracking-wider justify-center" style={{ fontSize: '10px', padding: '16px 12px' }}>Pocket</Link>
                  </DropdownMenuItem>
                </DropdownMenuGroup>
              </DropdownMenuContent>
            </DropdownMenu>
            <DropdownMenu>
              <DropdownMenuTrigger className="uppercase font-bold tracking-wider text-white hover:text-[#A67C52] transition outline-none bg-transparent border-none cursor-pointer" style={{ fontSize: '11px' }}>Pens</DropdownMenuTrigger>
              <DropdownMenuContent sideOffset={16} className="bg-background border border-white/10 text-white min-w-30 relative overflow-visible" style={{ fontFamily: '-apple-system, BlinkMacSystemFont', padding: '8px', borderTop: '3px solid #A67C52' }}>
                <div style={{ position: 'absolute', top: '-10px', left: '50%', transform: 'translateX(-50%)', width: '0', height: '0', borderLeft: '10px solid transparent', borderRight: '10px solid transparent', borderBottom: '10px solid #A67C52', zIndex: 10 }}></div>
                <DropdownMenuGroup>
                  <DropdownMenuItem asChild>
                    <Link to="/pens/quill" className="hover:bg-[#A67C52]/10 cursor-pointer uppercase tracking-wider justify-center" style={{ fontSize: '10px', padding: '16px 12px' }}>Quill Pens</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/pens/fountain" className="hover:bg-[#A67C52]/10 cursor-pointer uppercase tracking-wider justify-center" style={{ fontSize: '10px', padding: '16px 12px' }}>Fountain Pens</Link>
                  </DropdownMenuItem>
                </DropdownMenuGroup>
              </DropdownMenuContent>
            </DropdownMenu>
            <Link to="/compasses" className="uppercase font-bold tracking-wider text-white hover:text-[#A67C52] transition cursor-pointer" style={{ fontSize: '11px', whiteSpace: 'nowrap', marginRight: '6px' }}>Compasses</Link>
            <Link to="/inkwells" className="uppercase font-bold tracking-wider text-white hover:text-[#A67C52] transition cursor-pointer" style={{ fontSize: '11px' }}>Inkwells</Link>
            <a href="#contact" className="hover:text-[#A67C52] transition cursor-pointer" style={{ whiteSpace: 'nowrap', position: 'relative', zIndex: 10 }}>Contact Us</a>
          </div>

          {/* Cart button — ανοίγει drawer αντί για dropdown */}
          <div className="flex justify-end" style={{ marginRight: 'clamp(80px, 8vw, 200px)' }}>
            <button
              onClick={() => setCartOpen(true)}
              className="hover:text-[#A67C52] transition flex items-center gap-1 cursor-pointer outline-none bg-transparent border-none relative"
            >
              <BiShoppingBag className="w-6 h-6" />
              <span className="text-xs">({totalItems})</span>
              {/* Badge */}
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-[#A67C52] text-white text-xs rounded-full w-4 h-4 flex items-center justify-center font-bold" style={{ fontSize: '9px' }}>
                  {totalItems}
                </span>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-[#1a1a1a] border-t border-[#A67C52] z-50 shadow-xl">
            <div className="flex flex-col uppercase font-bold tracking-wider text-sm text-center" style={{ paddingTop: '16px', paddingBottom: '16px', paddingLeft: '24px', paddingRight: '24px' }}>
              <Link to="/" className="hover:text-[#A67C52] transition cursor-pointer" style={{ paddingTop: '16px', paddingBottom: '16px' }} onClick={() => setIsMobileMenuOpen(false)}>Home</Link>

              <div>
                <button onClick={() => toggleSection('watches')} className="w-full text-center hover:text-[#A67C52] transition cursor-pointer" style={{ paddingTop: '16px', paddingBottom: '16px' }}>WATCHES</button>
                {expandedSection === 'watches' && (
                  <div className="flex flex-col gap-4 pb-4 text-xs">
                    <Link to="/watches/luxury" className="hover:text-[#A67C52] transition py-2" onClick={() => setIsMobileMenuOpen(false)}>Luxury</Link>
                    <Link to="/watches/smartwatches" className="hover:text-[#A67C52] transition py-2" onClick={() => setIsMobileMenuOpen(false)}>Smartwatches</Link>
                    <Link to="/watches/pocket" className="hover:text-[#A67C52] transition py-2" onClick={() => setIsMobileMenuOpen(false)}>Pocket</Link>
                  </div>
                )}
              </div>

              <div>
                <button onClick={() => toggleSection('pens')} className="w-full text-center hover:text-[#A67C52] transition cursor-pointer" style={{ paddingTop: '16px', paddingBottom: '16px' }}>PENS</button>
                {expandedSection === 'pens' && (
                  <div className="flex flex-col gap-4 pb-4 text-xs">
                    <Link to="/pens/quill" className="hover:text-[#A67C52] transition py-2" onClick={() => setIsMobileMenuOpen(false)}>Quill Pens</Link>
                    <a href="#steel" className="hover:text-[#A67C52] transition py-2" onClick={() => setIsMobileMenuOpen(false)}>Steel Nib Pens</a>
                    <Link to="/pens/fountain" className="hover:text-[#A67C52] transition py-2" onClick={() => setIsMobileMenuOpen(false)}>Fountain Pens</Link>
                  </div>
                )}
              </div>

              <div>
                <button onClick={() => toggleSection('inkwells')} className="w-full text-center hover:text-[#A67C52] transition cursor-pointer" style={{ paddingTop: '16px', paddingBottom: '16px' }}>INKWELLS</button>
                {expandedSection === 'inkwells' && (
                  <div className="flex flex-col gap-4 pb-4 text-xs">
                    <a href="#crystal" className="hover:text-[#A67C52] transition py-2" onClick={() => setIsMobileMenuOpen(false)}>Crystal Inkwells</a>
                    <a href="#brass-ink" className="hover:text-[#A67C52] transition py-2" onClick={() => setIsMobileMenuOpen(false)}>Brass Inkwells</a>
                    <a href="#traveling" className="hover:text-[#A67C52] transition py-2" onClick={() => setIsMobileMenuOpen(false)}>Traveling Inkwells</a>
                  </div>
                )}
              </div>

              <div>
                <button onClick={() => toggleSection('compasses')} className="w-full text-center hover:text-[#A67C52] transition cursor-pointer" style={{ paddingTop: '16px', paddingBottom: '16px' }}>COMPASSES</button>
                {expandedSection === 'compasses' && (
                  <div className="flex flex-col gap-4 pb-4 text-xs">
                    <a href="#brass-compass" className="hover:text-[#A67C52] transition py-2" onClick={() => setIsMobileMenuOpen(false)}>Brass Compasses</a>
                    <a href="#pocket-compass" className="hover:text-[#A67C52] transition py-2" onClick={() => setIsMobileMenuOpen(false)}>Pocket Compasses</a>
                    <a href="#nautical" className="hover:text-[#A67C52] transition py-2" onClick={() => setIsMobileMenuOpen(false)}>Nautical Compasses</a>
                  </div>
                )}
              </div>

              <a href="#contact" className="hover:text-[#A67C52] transition cursor-pointer" style={{ paddingTop: '16px', paddingBottom: '16px' }} onClick={() => setIsMobileMenuOpen(false)}>Contact Us</a>
            </div>
          </div>
        )}
      </nav>

      {/* Cart Drawer — εκτός nav, render στο root level */}
      <CartDrawer
        isOpen={cartOpen}
        onClose={() => setCartOpen(false)}
        items={cartItems}
        onRemoveAll={handleRemoveAll}
        onUpdateQty={handleUpdateQty}
        onRemoveItem={handleRemoveItem}
      />
    </>
  );
};

export default Navbar;