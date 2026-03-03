import './App.css'
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import { Routes, Route } from 'react-router-dom';
import Watches from './pages/Watches';
import Luxury from './pages/Watches/Luxury';
import Smartwatches from './pages/Watches/Smartwatches';
import Pocket from './pages/Watches/Pocket';
import QuillPens from './pages/Pens/Quill';
import FountainPens from './pages/Pens/Fountain';
import BackToTop from './BackToTop';
import Compasses from './pages/Compasses/Compasses';
import Inkwells from './pages/Inkwells/Inkwells';

function App() {
  return (
    <div style={{ position: 'relative', minHeight: '100vh' }}>
      <BackToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/watches" element={<Watches />} />
        <Route path="/watches/luxury" element={<Luxury />} />
        <Route path="/watches/smartwatches" element={<Smartwatches />} />
        <Route path="/watches/pocket" element={<Pocket />} />
        <Route path="/pens/quill" element={<QuillPens />} />
        <Route path="/pens/fountain" element={<FountainPens />} />
        <Route path="/compasses" element={<Compasses />} />
        <Route path="/inkwells" element={<Inkwells />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App
