import { useState, useRef } from "react";
import Layout from '../components/Layout';
import { MdError } from "react-icons/md";
import { BsFillEyeFill, BsFillEyeSlashFill } from "react-icons/bs";

type PaymentMethod = "e-money" | "cash";

interface FormData {
  name: string;
  email: string;
  phone: string;
  address: string;
  zip: string;
  city: string;
  country: string;
  paymentMethod: PaymentMethod;
  walletId: string;
  walletPin: string;
}

const initialForm: FormData = {
  name: "",
  email: "",
  phone: "",
  address: "",
  zip: "",
  city: "",
  country: "",
  paymentMethod: "e-money",
  walletId: "",
  walletPin: "",
};

interface CartItem {
  name: string;
  price: number;
  qty: number;
}

const cartItems: CartItem[] = [];
const SHIPPING = 19.95;
const COUNTRIES = ["Italy", "Greece", "Germany", "Denmark", "France"];

// ── InputField ──
function InputField({
  label,
  placeholder,
  value,
  onChange,
  type = "text",
  className = "",
  maxLength,
  mono = false,
  toggleable = false,
}: {
  label: string;
  placeholder?: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  className?: string;
  maxLength?: number;
  mono?: boolean;
  toggleable?: boolean;
}) {
  const [focused, setFocused] = useState(false);
  const [touched, setTouched] = useState(false);
  const [visible, setVisible] = useState(false);

  const isEmailInvalid =
    type === "email" &&
    touched &&
    value.length > 0 &&
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

  const inputType = toggleable ? (visible ? "text" : "password") : type;

  return (
    <div className={`flex flex-col gap-2 ${className}`}>
      <label className="text-sm font-bold text-gray-800">{label}</label>
      <div className="relative flex items-center">
        <input
          type={inputType}
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => { setFocused(false); setTouched(true); }}
          maxLength={maxLength}
          className={`w-full border text-base text-gray-800 placeholder-gray-400 focus:outline-none transition-colors ${
            mono ? "font-mono tracking-widest" : "font-medium"
          } ${isEmailInvalid ? "border-red-400" : focused ? "border-[#C8874A]" : "border-gray-300"}`}
          style={{ padding: '18px 20px', borderRadius: '0' }}
        />
        {toggleable && (
          <button
            type="button"
            onClick={() => setVisible(!visible)}
            className="absolute right-4 text-gray-400 hover:text-[#C8874A] transition-colors cursor-pointer"
          >
            {visible ? <BsFillEyeSlashFill size={18} /> : <BsFillEyeFill size={18} />}
          </button>
        )}
      </div>
      {isEmailInvalid && (
        <div className="flex items-center gap-2 mt-1">
          <MdError className="text-red-500 w-4 h-4 shrink-0" />
          <span className="text-red-500 text-xs font-semibold">Invalid email address</span>
        </div>
      )}
    </div>
  );
}

// ── CardInput ──
function CardInput({ value, onChange }: { value: string; onChange: (v: string) => void }) {
  const [focused, setFocused] = useState(false);
  const [visible, setVisible] = useState(false);
  const hiddenRef = useRef<HTMLInputElement>(null);

  // Remove spaces and non-digits, then format
  const digits = value.replace(/\D/g, "").slice(0, 16);
  const formatted = digits.match(/.{1,4}/g)?.join(" ") ?? digits;
  const maskedValue = formatted.replace(/\d/g, "●");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const raw = e.target.value.replace(/\D/g, "").slice(0, 16);
    onChange(raw.match(/.{1,4}/g)?.join(" ") ?? raw);
  };

  return (
    <div className="flex flex-col gap-2">
      <label className="text-sm font-bold text-gray-800">Account Number</label>
      <div
        className={`relative flex items-center border transition-colors ${focused ? "border-[#C8874A]" : "border-gray-300"}`}
        style={{ borderRadius: '0' }}
        onClick={() => hiddenRef.current?.focus()}
      >
        {/* Display */}
        <span
          className="flex-1 font-mono tracking-widest text-base text-gray-800"
          style={{ padding: '18px 20px' }}
        >
          {digits.length === 0
            ? <span className="text-gray-400">{"●●●● ●●●● ●●●● ●●●●"}</span>
            : visible ? formatted : maskedValue
          }
        </span>

        {/* Hidden real input */}
        <input
          ref={hiddenRef}
          type="text"
          inputMode="numeric"
          value={digits}
          onChange={handleChange}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          maxLength={16}
          className="absolute opacity-0 w-0 h-0"
        />

        <button
          type="button"
          onClick={(e) => { e.stopPropagation(); setVisible(!visible); }}
          className="absolute right-4 text-gray-400 hover:text-[#C8874A] transition-colors cursor-pointer"
        >
          {visible ? <BsFillEyeSlashFill size={18} /> : <BsFillEyeFill size={18} />}
        </button>
      </div>
    </div>
  );
}

// ── SectionTitle ──
function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-base font-bold tracking-widest text-[#C8874A] uppercase" style={{ marginBottom: '32px' }}>
      {children}
    </h2>
  );
}

// ── CountrySelect ──
function CountrySelect({ value, onChange }: { value: string; onChange: (v: string) => void }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex flex-col gap-2 sm:col-span-2 relative">
      <label className="text-sm font-bold text-gray-800">Country</label>
      <div
        onClick={() => setOpen(!open)}
        className="border border-gray-300 text-base font-medium text-gray-800 cursor-pointer flex justify-between items-center"
        style={{ padding: '18px 20px', borderRadius: '0' }}
      >
        <span className={value ? "text-gray-800" : "text-gray-400"}>
          {value || "Select a country"}
        </span>
        <span className="text-gray-400 text-xs">{open ? "▲" : "▼"}</span>
      </div>
      {open && (
        <div className="absolute top-full left-0 right-0 bg-white border border-gray-200 z-50 shadow-lg">
          {COUNTRIES.map((c) => (
            <div
              key={c}
              onClick={() => { onChange(c); setOpen(false); }}
              className="text-base font-medium text-gray-800 cursor-pointer transition-colors"
              style={{ padding: '20px 24px', borderBottom: '1px solid #f0f0f0' }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#FDF0E8')}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'white')}
            >
              {c}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

// ── CheckoutPage ──
export default function CheckoutPage() {
  const [form, setForm] = useState<FormData>(initialForm);

  const set = (key: keyof FormData) => (value: string) =>
    setForm((prev) => ({ ...prev, [key]: value }));

  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.qty, 0);
  const tax = 0;
  const grandTotal = subtotal + SHIPPING + tax;

  return (
    <Layout>
      <div className="min-h-screen bg-[#F2F2F2] flex justify-center" style={{ padding: '80px 60px' }}>
        <div className="w-full max-w-6xl mx-auto flex flex-col lg:flex-row items-start" style={{ gap: '32px' }}>

          {/* ── Checkout Form Card ── */}
          <div className="bg-white rounded-xl" style={{ padding: '72px', width: '780px', minWidth: '780px', minHeight: '800px' }}>
            <h1 className="text-3xl font-bold tracking-widest uppercase text-gray-900" style={{ marginBottom: '48px' }}>
              Checkout
            </h1>

            {/* BILLING DETAILS */}
            <div style={{ marginBottom: '48px' }}>
              <SectionTitle>Billing Details</SectionTitle>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <InputField
                  label="Full Name"
                  placeholder="Mario Rossi"
                  value={form.name}
                  onChange={set("name")}
                />
                <InputField
                  label="Email Address"
                  placeholder="example@mail.com"
                  value={form.email}
                  onChange={set("email")}
                  type="email"
                />
                <InputField
                  label="Phone Number"
                  placeholder="+1 202-555-0136"
                  value={form.phone}
                  onChange={set("phone")}
                  type="tel"
                />
              </div>
            </div>

            {/* SHIPPING INFO */}
            <div style={{ marginBottom: '48px' }}>
              <SectionTitle>Shipping Info</SectionTitle>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <InputField
                  label="Address"
                  placeholder="1137 Williams Avenue"
                  value={form.address}
                  onChange={set("address")}
                  className="sm:col-span-2"
                />
                <InputField
                  label="Zip Code"
                  placeholder="10001"
                  value={form.zip}
                  onChange={set("zip")}
                />
                <InputField
                  label="City"
                  placeholder="Atrani"
                  value={form.city}
                  onChange={set("city")}
                />
                <CountrySelect value={form.country} onChange={set("country")} />
              </div>
            </div>

            {/* PAYMENT DETAILS */}
            <div style={{ marginBottom: '48px' }}>
              <SectionTitle>Payment Details</SectionTitle>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

                <div className="flex flex-col justify-start">
                  <label className="text-sm font-bold text-gray-800">Payment</label>
                </div>

                <div className="flex flex-col gap-4">
                  <label className="flex items-center gap-4 cursor-pointer">
                    <div
                      onClick={() => set("paymentMethod")("e-money")}
                      className="w-4 h-4 rounded-full border border-gray-300 flex items-center justify-center shrink-0"
                    >
                      {form.paymentMethod === "e-money" && (
                        <div className="w-1.5 h-1.5 rounded-full bg-gray-400" />
                      )}
                    </div>
                    <span className="text-sm font-bold text-gray-800">e-Wallet</span>
                  </label>

                  <label className="flex items-center gap-4 cursor-pointer">
                    <div
                      onClick={() => set("paymentMethod")("cash")}
                      className="w-4 h-4 rounded-full border border-gray-300 flex items-center justify-center shrink-0"
                    >
                      {form.paymentMethod === "cash" && (
                        <div className="w-1.5 h-1.5 rounded-full bg-gray-400" />
                      )}
                    </div>
                    <span className="text-sm font-bold text-gray-800">Cash on Delivery</span>
                  </label>
                </div>

                {form.paymentMethod === "e-money" && (
                  <>
                    <CardInput value={form.walletId} onChange={set("walletId")} />
                    <InputField
                      label="PIN Code"
                      placeholder="●●●●"
                      value={form.walletPin}
                      onChange={(v) => set("walletPin")(v.replace(/\D/g, "").slice(0, 4))}
                      maxLength={4}
                      mono
                      toggleable
                    />
                  </>
                )}
              </div>
            </div>
          </div>

          {/* ── Summary Card ── */}
          <div className="bg-white rounded-xl shrink-0" style={{ padding: '40px', width: '380px' }}>
            <h2 className="text-base font-bold tracking-widest uppercase text-gray-900 mb-8">
              Summary
            </h2>

            {cartItems.length === 0 ? (
              <p className="text-sm text-gray-400 text-center mb-8">No Items</p>
            ) : (
              <ul className="mb-8 flex flex-col gap-6">
                {cartItems.map((item, i) => (
                  <li key={i} className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-bold text-gray-900">{item.name}</p>
                      <p className="text-sm text-gray-400">x{item.qty}</p>
                    </div>
                    <span className="text-sm font-bold text-gray-900">
                      ${(item.price * item.qty).toFixed(2)}
                    </span>
                  </li>
                ))}
              </ul>
            )}

            <div className="flex flex-col gap-3 mb-6">
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500 uppercase tracking-wide">Total</span>
                <span className="text-sm font-bold text-gray-900">${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500 uppercase tracking-wide">Shipping</span>
                <span className="text-sm font-bold text-gray-900">${SHIPPING.toFixed(2)}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500 uppercase tracking-wide">Tax</span>
                <span className="text-sm font-bold text-gray-900">${tax.toFixed(2)}</span>
              </div>
            </div>

            <div className="flex justify-between items-center" style={{ marginBottom: '32px' }}>
              <span className="text-sm text-gray-500 uppercase tracking-wide">Grand Total</span>
              <span className="text-lg font-bold text-[#C8874A]">${grandTotal.toFixed(2)}</span>
            </div>

            <button className="w-full bg-[#C8874A] hover:bg-[#b8773a] transition-colors text-white text-xs font-bold tracking-widest uppercase rounded" style={{ padding: '20px' }}>
              Continue &amp; Pay
            </button>
          </div>

        </div>
      </div>
    </Layout>
  );
}