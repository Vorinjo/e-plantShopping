import { useState } from 'react';
import AboutUs from './AboutUs.jsx';
import CartItem from './CartItem.jsx';
import ProductList from './ProductList.jsx';
import './App.css';

function App() {
  const [page, setPage] = useState('home');

  const navigate = (nextPage) => {
    setPage(nextPage);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (page === 'plants') {
    return <ProductList onNavigate={navigate} />;
  }

  if (page === 'cart') {
    return <CartItem onNavigate={navigate} />;
  }

  return (
    <main className="landing-page" id="home">
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero__overlay" />
        <div className="hero__content">
          <span className="hero__eyebrow">Welcome to</span>
          <h1 id="hero-title">Paradise Nursery</h1>
          <p>Where green meets serenity.</p>
          <button
            type="button"
            className="hero__button"
            onClick={() => navigate('plants')}
          >
            Get Started
          </button>
        </div>
      </section>
      <AboutUs />
    </main>
  );
}

export default App;
