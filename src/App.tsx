import './App.css'
import Home from './pages/Home';
import { Routes, Route } from 'react-router-dom';
import Watches from './pages/Watches';
import Luxury from './pages/Luxury';
import Casual from './pages/Casual';
import Pocket from './pages/Pocket';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/watches" element={<Watches />} />
      <Route path="/luxury" element={<Luxury />} />
      <Route path="/casual" element={<Casual />} />
      <Route path="/pocket" element={<Pocket />} />
    </Routes>
  );
}

export default App
