import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { BiShoppingBag } from "react-icons/bi";
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="grid grid-cols-3 items-center px-4 md:px-12 py-14 md:py-16 bg-background text-white" style={{ minHeight: '60px', fontFamily: '-apple-system, BlinkMacSystemFont' }}>
    <div className="flex items-center" style={{ justifyContent: 'flex-start' }}>
      <img 
        src="/images/atrani.png?v=2" 
        alt="Atrani Logo" 
        className="filter invert" 
        style={{ height: '28px', width: '96px', marginLeft: '380px', objectFit: 'fill' }} 
      />
    </div>
    <div className="flex justify-center gap-12 uppercase font-bold tracking-wider" style={{ fontSize: '11px', marginLeft: '120px' }}>
      <a href="#home" className="hover:text-[#A67C52] transition cursor-pointer">Home</a>
      <DropdownMenu>
        <DropdownMenuTrigger className="uppercase font-bold tracking-wider text-white hover:text-[#A67C52] transition outline-none bg-transparent border-none cursor-pointer" style={{ fontSize: '11px' }}>Watches</DropdownMenuTrigger>
        <DropdownMenuContent sideOffset={16} className="bg-background border border-white/10 text-white min-w-30 px-6 py-6 relative overflow-visible" style={{ fontFamily: '-apple-system, BlinkMacSystemFont', padding: '8px', borderTop: '3px solid #A67C52' }}>
          <div style={{ position: 'absolute', top: '-10px', left: '50%', transform: 'translateX(-50%)', width: '0', height: '0', borderLeft: '10px solid transparent', borderRight: '10px solid transparent', borderBottom: '10px solid #A67C52', zIndex: 10 }}></div>
          <DropdownMenuGroup>
            <DropdownMenuItem>
              <Link to="/luxury" className="hover:bg-[#A67C52]/10 cursor-pointer uppercase tracking-wider justify-center" style={{ fontSize: '10px', padding: '16px 12px' }}>Luxury</Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link to="/casual" className="hover:bg-[#A67C52]/10 cursor-pointer uppercase tracking-wider justify-center" style={{ fontSize: '10px', padding: '16px 12px' }}>Casual</Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link to="/pocket" className="hover:bg-[#A67C52]/10 cursor-pointer uppercase tracking-wider justify-center" style={{ fontSize: '10px', padding: '16px 12px' }}>Pocket</Link>
            </DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
      <DropdownMenu>
        <DropdownMenuTrigger className="uppercase font-bold tracking-wider text-white hover:text-[#A67C52] transition outline-none bg-transparent border-none cursor-pointer" style={{ fontSize: '11px' }}>Pens</DropdownMenuTrigger>
        <DropdownMenuContent sideOffset={16} className="bg-background border border-white/10 text-white min-w-30 px-6 py-6 relative overflow-visible" style={{ fontFamily: '-apple-system, BlinkMacSystemFont', padding: '8px', borderTop: '3px solid #A67C52' }}>
          <div style={{ position: 'absolute', top: '-10px', left: '50%', transform: 'translateX(-50%)', width: '0', height: '0', borderLeft: '10px solid transparent', borderRight: '10px solid transparent', borderBottom: '10px solid #A67C52', zIndex: 10 }}></div>
          <DropdownMenuGroup>
            <DropdownMenuItem className="hover:bg-[#A67C52]/10 cursor-pointer uppercase tracking-wider justify-center" style={{ fontSize: '10px', padding: '16px 12px' }}>Quill Pens</DropdownMenuItem>
            <DropdownMenuItem className="hover:bg-[#A67C52]/10 cursor-pointer uppercase tracking-wider justify-center" style={{ fontSize: '10px', padding: '16px 12px' }}>Steel Nib Pens</DropdownMenuItem>
            <DropdownMenuItem className="hover:bg-[#A67C52]/10 cursor-pointer uppercase tracking-wider justify-center" style={{ fontSize: '10px', padding: '16px 12px' }}>Fountain Pens</DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
      <DropdownMenu>
        <DropdownMenuTrigger className="uppercase font-bold tracking-wider text-white hover:text-[#A67C52] transition outline-none bg-transparent border-none cursor-pointer" style={{ fontSize: '11px' }}>Inkwells</DropdownMenuTrigger>
        <DropdownMenuContent sideOffset={16} className="bg-background border border-white/10 text-white min-w-30 px-6 py-6 relative overflow-visible" style={{ fontFamily: '-apple-system, BlinkMacSystemFont', padding: '8px', borderTop: '3px solid #A67C52' }}>
          <div style={{ position: 'absolute', top: '-10px', left: '50%', transform: 'translateX(-50%)', width: '0', height: '0', borderLeft: '10px solid transparent', borderRight: '10px solid transparent', borderBottom: '10px solid #A67C52', zIndex: 10 }}></div>
          <DropdownMenuGroup>
            <DropdownMenuItem className="hover:bg-[#A67C52]/10 cursor-pointer uppercase tracking-wider justify-center" style={{ fontSize: '10px', padding: '16px 12px' }}>Crystal Inkwells</DropdownMenuItem>
            <DropdownMenuItem className="hover:bg-[#A67C52]/10 cursor-pointer uppercase tracking-wider justify-center" style={{ fontSize: '10px', padding: '16px 12px' }}>Brass Inkwells</DropdownMenuItem>
            <DropdownMenuItem className="hover:bg-[#A67C52]/10 cursor-pointer uppercase tracking-wider justify-center" style={{ fontSize: '10px', padding: '16px 12px' }}>Traveling Inkwells</DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
      <DropdownMenu>
        <DropdownMenuTrigger className="uppercase font-bold tracking-wider text-white hover:text-[#A67C52] transition outline-none bg-transparent border-none cursor-pointer" style={{ fontSize: '11px', whiteSpace: 'nowrap' }}>Compasses</DropdownMenuTrigger>
        <DropdownMenuContent sideOffset={16} className="bg-background border border-white/10 text-white min-w-30 px-6 py-6 relative overflow-visible" style={{ fontFamily: '-apple-system, BlinkMacSystemFont', padding: '8px', borderTop: '3px solid #A67C52' }}>
          <div style={{ position: 'absolute', top: '-10px', left: '50%', transform: 'translateX(-50%)', width: '0', height: '0', borderLeft: '10px solid transparent', borderRight: '10px solid transparent', borderBottom: '10px solid #A67C52', zIndex: 10 }}></div>
          <DropdownMenuGroup>
            <DropdownMenuItem className="hover:bg-[#A67C52]/10 cursor-pointer uppercase tracking-wider justify-center" style={{ fontSize: '10px', padding: '16px 12px' }}>Brass Compasses</DropdownMenuItem>
            <DropdownMenuItem className="hover:bg-[#A67C52]/10 cursor-pointer uppercase tracking-wider justify-center" style={{ fontSize: '10px', padding: '16px 12px' }}>Pocket Compasses</DropdownMenuItem>
            <DropdownMenuItem className="hover:bg-[#A67C52]/10 cursor-pointer uppercase tracking-wider justify-center" style={{ fontSize: '10px', padding: '16px 12px' }}>Nautical Compasses</DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
      <a href="#contact" className="hover:text-[#A67C52] transition cursor-pointer" style={{ whiteSpace: 'nowrap', display: 'inline-block', position: 'relative', zIndex: 10 }}>Contact Us</a>
    </div>
    <div className="flex justify-end" style={{ marginRight: '300px' }}>
      <DropdownMenu>
        <DropdownMenuTrigger className="hover:text-[#A67C52] data-[state=open]:text-[#A67C52] transition flex items-center gap-1 cursor-pointer outline-none bg-transparent border-none">
          <BiShoppingBag className="w-6 h-6" />
          <span className="text-xs">(0)</span>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" sideOffset={16} alignOffset={-115} className="bg-background border border-white/10 text-white w-72 relative overflow-visible" style={{ fontFamily: '-apple-system, BlinkMacSystemFont', borderTop: '3px solid #A67C52', padding: '32px' }}>
          <div style={{ position: 'absolute', top: '-10px', left: '50%', transform: 'translateX(-50%)', width: '0', height: '0', borderLeft: '10px solid transparent', borderRight: '10px solid transparent', borderBottom: '10px solid #A67C52', zIndex: 10 }}></div>
          <div className="flex flex-col gap-4">
            <div className="flex justify-between items-center">
              <span className="font-bold text-xs">CART (0)</span>
              <button className="text-xs hover:text-[#A67C52] cursor-pointer transition">REMOVE ALL</button>
            </div>
            <div className="text-center text-white/70 py-8 text-xs">
              No Items
            </div>
            <div className="flex justify-between font-bold text-xs">
              <span>TOTAL</span>
              <span>$0.00</span>
            </div>
            <div className="px-4">
              <Button variant="outline" className="w-full bg-[#A67C52] text-white hover:text-white py-5 rounded-md hover:bg-[#8a5e3a] transition text-sm font-bold border-none cursor-pointer">CHECKOUT</Button>
            </div>
          </div>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  </nav>
);

export default Navbar;
