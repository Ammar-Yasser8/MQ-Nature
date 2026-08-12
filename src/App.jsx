import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/layout/Header/Header';
import { Footer } from './components/layout/Footer/Footer';
import { Home } from './pages/Home/Home';
import { BotanicalBackground } from './components/ui/BotanicalBackground/BotanicalBackground';

function App() {
  return (
    <Router>
      <BotanicalBackground />
      <Header />
      <main style={{ flex: 1, position: 'relative', zIndex: 2 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/products/:id" element={<ProductDetails />} /> */}
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;

