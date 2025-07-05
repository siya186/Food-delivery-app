import React, { useState, useEffect } from 'react';
import './Hero.css';

const Hero = ({ onOrderNow }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="hero" id="home">
      <div className="hero-background">
        <div className="hero-overlay"></div>
        
        {/* Beautiful Background Elements */}
        <div className="background-elements">
          <div className="bg-element element-1"></div>
          <div className="bg-element element-2"></div>
          <div className="bg-element element-3"></div>
        </div>
        
        {/* Floating Food Icons */}
        <div className="floating-elements">
          <div className="floating-item pizza">🍕</div>
          <div className="floating-item burger">🍔</div>
          <div className="floating-item pasta">🍝</div>
          <div className="floating-item dessert">🍰</div>
        </div>
      </div>
      
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-text-section">
            <div className="hero-badge">
              <span className="badge-icon">⭐</span>
              <span className="badge-text">Premium Food Delivery</span>
            </div>
            
            <h1 className="hero-title">
              <span className="title-line title-1">Delicious Food</span>
              <span className="title-line title-2 gradient-text">Delivered</span>
              <span className="title-line title-3">To Your Doorstep</span>
            </h1>
            
            <p className="hero-subtitle">
              Experience the finest cuisine from the best restaurants in town. 
              Fast delivery, fresh ingredients, and unforgettable taste.
            </p>
            
            <div className="hero-stats">
              <div className="stat stat-1">
                <div className="stat-icon">🏪</div>
                <span className="stat-number">500+</span>
                <span className="stat-label">Restaurants</span>
              </div>
              <div className="stat stat-2">
                <div className="stat-icon">😊</div>
                <span className="stat-number">10k+</span>
                <span className="stat-label">Happy Customers</span>
              </div>
              <div className="stat stat-3">
                <div className="stat-icon">⚡</div>
                <span className="stat-number">30min</span>
                <span className="stat-label">Fast Delivery</span>
              </div>
            </div>
            
            <div className="hero-buttons">
              <button className="btn-primary" onClick={onOrderNow}>
                <span className="btn-text">Order Now</span>
                <span className="btn-icon">→</span>
              </button>
              <button className="btn-secondary">
                <span className="btn-text">View Menu</span>
                <span className="btn-icon">📋</span>
              </button>
            </div>

            <div className="hero-features">
              <div className="feature">
                <span className="feature-icon">🛡️</span>
                <span className="feature-text">Safe Delivery</span>
              </div>
              <div className="feature">
                <span className="feature-icon">💳</span>
                <span className="feature-text">Secure Payment</span>
              </div>
              <div className="feature">
                <span className="feature-icon">🎁</span>
                <span className="feature-text">Free Delivery</span>
              </div>
            </div>
          </div>
          
          <div className="hero-visual-section">
            <div className="hero-visual-container">
              {/* Main Food Showcase */}
              <div className="main-food-showcase">
                <div className="main-food-item">
                  <div className="food-emoji">🍕</div>
                  <div className="food-glow"></div>
                  <div className="food-label">Popular</div>
                </div>
              </div>
              
              {/* Secondary Food Items */}
              <div className="secondary-food-grid">
                <div className="food-item food-1">
                  <div className="food-emoji">🍔</div>
                  <div className="food-label">Fresh</div>
                </div>
                <div className="food-item food-2">
                  <div className="food-emoji">🍜</div>
                  <div className="food-label">Hot</div>
                </div>
                <div className="food-item food-3">
                  <div className="food-emoji">🍰</div>
                  <div className="food-label">Sweet</div>
                </div>
                <div className="food-item food-4">
                  <div className="food-emoji">🥗</div>
                  <div className="food-label">Healthy</div>
                </div>
              </div>
              
              {/* Delivery Animation */}
              <div className="delivery-animation">
                <div className="delivery-bike">
                  <div className="bike-body">🚲</div>
                  <div className="bike-wheel front-wheel"></div>
                  <div className="bike-wheel back-wheel"></div>
                </div>
                <div className="delivery-box">
                  <div className="box-content">🍕</div>
                </div>
                <div className="delivery-trail"></div>
              </div>
              
              {/* Delivery Icon */}
              <div className="delivery-icon">
                <span className="delivery-emoji">🚚</span>
                <div className="delivery-text">Fast Delivery</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="scroll-indicator">
        <div className="scroll-text">Scroll to explore</div>
        <div className="scroll-arrow">↓</div>
      </div>
    </section>
  );
};

export default Hero; 