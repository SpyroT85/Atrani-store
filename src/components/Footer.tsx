import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { PiMapPinFill } from "react-icons/pi";
import { MdPhone } from "react-icons/md";
import { MdEmail } from "react-icons/md";

const Footer = () => (
  <footer className="bg-background text-white" style={{ paddingTop: '2.2rem', paddingBottom: '3.5rem', paddingLeft: 'clamp(6rem, 16vw, 20rem)', paddingRight: 'clamp(0rem, 2vw, 4rem)' }}>
    <style>{`
      @media (max-width: 768px) {
        footer {
          padding-left: 0.3rem !important;
          padding-right: 0.5rem !important;
        }
        .footer-mobile-stack {
          align-items: flex-start !important;
        }
        .footer-mobile-text {
          margin-left: auto !important;
          margin-right: auto !important;
          text-align: center !important;
        }
        .footer-mobile-copyright {
          margin-bottom: 0.005rem !important;
        }
        .footer-mobile-products {
          margin-top: -2rem !important;
        }
        .footer-mobile-contact {
          margin-top: -1.2rem !important;
        }
      }
    `}</style>

    {/* Divider */}
    <div className="max-w-7xl mx-auto" style={{ borderTop: '1px solid rgba(255,255,255,0.1)', marginBottom: '2rem' }}></div>

    {/* Main 3-Column Content - Centered */}
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 text-center footer-mobile-stack" style={{ gap: '6rem', gridTemplateColumns: '1fr 1fr 1fr' }}>
        <style>{`
          @media (max-width: 768px) {
            .footer-mobile-stack {
              display: flex !important;
              flex-direction: column !important;
              align-items: center !important;
              text-align: center !important;
            }
            .footer-mobile-text {
              white-space: pre-line !important;
              word-break: break-word !important;
              max-width: 90vw !important;
              margin-left: auto !important;
              margin-right: auto !important;
            }
          }
        `}</style>

        {/* Left Column: Logo + Description + Copyright */}
        <div className="flex flex-col items-center" style={{ justifySelf: 'end' }}>
          <img 
            src="/images/atrani.webp?v=2" 
            alt="Atrani Logo" 
            className="filter invert" 
            style={{ height: '28px', width: '96px', objectFit: 'fill', marginBottom: '1.5rem' }}
            width="96"
            height="28"
          />
          <p className="text-[14px] leading-relaxed footer-mobile-text" style={{ color: '#7D7D7D', marginBottom: '2rem', maxWidth: '280px' }}>
            Atrani is an all in one stop to fulfill your watch needs. We're a small team of watch enthusiasts who are devoted to helping you get the most out of luxury timepieces.
          </p>
          <p className="text-[14px] footer-mobile-copyright" style={{ color: '#7D7D7D', marginBottom: '2.2rem' }}>
            Copyright © 2026. All Rights Reserved
          </p>
        </div>

        {/* Center Column: Products */}
        <div className="flex flex-col items-center footer-mobile-products" style={{ justifySelf: 'center' }}>
          <h3 className="font-bold text-base" style={{ borderBottom: '2px solid #BFA57A', paddingBottom: '0.1rem', display: 'inline-block', width: 'fit-content', marginBottom: '1rem' }}>Products</h3>
          <div className="flex flex-col items-center" style={{ gap: '0.75rem' }}>
            <a href="#watches" className="text-[13px] transition" style={{ color: '#7D7D7D' }} onMouseOver={e => e.currentTarget.style.color = '#BFA57A'} onMouseOut={e => e.currentTarget.style.color = '#7D7D7D'}>› Watches</a>
            <a href="#pens" className="text-[13px] transition" style={{ color: '#7D7D7D' }} onMouseOver={e => e.currentTarget.style.color = '#BFA57A'} onMouseOut={e => e.currentTarget.style.color = '#7D7D7D'}>› Pens</a>
            <a href="#compasses" className="text-[13px] transition" style={{ color: '#7D7D7D' }} onMouseOver={e => e.currentTarget.style.color = '#BFA57A'} onMouseOut={e => e.currentTarget.style.color = '#7D7D7D'}>› Compasses</a>
            <a href="#inkwells" className="text-[13px] transition" style={{ color: '#7D7D7D' }} onMouseOver={e => e.currentTarget.style.color = '#BFA57A'} onMouseOut={e => e.currentTarget.style.color = '#7D7D7D'}>› Inkwells</a>
          </div>
        </div>

        {/* Right Column: Contact Us */}
        <div className="flex flex-col items-center footer-mobile-contact" style={{ justifySelf: 'start' }}>
          <h3 className="font-bold text-base" style={{ borderBottom: '2px solid #BFA57A', paddingBottom: '0.1rem', display: 'inline-block', width: 'fit-content', marginBottom: '1rem' }}>Contact us</h3>
          <div className="flex flex-col" style={{ gap: '0.75rem' }}>
            <div className="flex items-start gap-3">
              <PiMapPinFill className="w-5 h-5 mt-0.5 shrink-0" style={{ color: '#BFA57A' }} />
                <span className="text-[13px]" style={{ color: '#7D7D7D' }}>Via Fritto, 84342 Atrani SA, Italia</span>
            </div>
            <div className="flex items-center gap-3">
                <MdPhone className="w-5 h-5 shrink-0" style={{ color: '#BFA57A' }} />
                <span className="text-[13px]" style={{ color: '#7D7D7D' }}>+10 2341 534</span>
            </div>
            <div className="flex items-center gap-3">
              <MdEmail className="w-5 h-5 shrink-0" style={{ color: '#BFA57A' }} />
                <a href="mailto:spyrostserkezos@gmail.com" className="text-[13px] hover:text-[#BFA57A] transition" style={{ color: '#7D7D7D', textDecoration: 'underline', cursor: 'pointer' }}>spyrostserkezos@gmail.com</a>
            </div>
            <div className="flex justify-center gap-4" style={{ marginTop: '2rem' }}>
              <a href="#" className="hover:text-[#BFA57A] transition" aria-label="Facebook">
                <FaFacebookSquare className="w-7 h-7" />
              </a>
              <a href="https://www.linkedin.com/in/spyrostserkezos" target="_blank" rel="noopener noreferrer" className="hover:text-[#BFA57A] transition" aria-label="LinkedIn">
                <FaLinkedin className="w-7 h-7" />
              </a>
              <a href="https://github.com/SpyroT85" target="_blank" rel="noopener noreferrer" className="hover:text-[#BFA57A] transition" aria-label="GitHub">
                <FaGithub className="w-7 h-7" />
              </a>
            </div>
          </div>
        </div>

      </div>
    </div>

  </footer>
);

export default Footer;
