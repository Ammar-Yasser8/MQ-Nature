import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/layout/Header/Header';
import { Footer } from './components/layout/Footer/Footer';
import { Home } from './pages/Home/Home';

function App() {
  return (
    <Router>
      <Header />
      <main style={{ flex: 1 }}>
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
