import { PiArrowCircleUp } from "react-icons/pi";

const BackToTop = () => (
  <div style={{
    position: 'absolute',
    right: '30px',
    bottom: '380px',
    zIndex: 100,
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    padding: 0,
  }}>
    <button
      aria-label="Back to top"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
    >
      <PiArrowCircleUp style={{ color: '#1A1A1A', width: '54px', height: '54px', filter: 'drop-shadow(0 0 2px #fff)' }} />
      <div style={{ textAlign: 'center', color: '#1A1A1A', fontWeight: 'bold', fontSize: '15px', marginTop: '4px', marginLeft: '-12px' }}>Back to Top</div>
    </button>
  </div>
);

export default BackToTop;
