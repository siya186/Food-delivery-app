import React, { useState } from 'react';
import './Menu.css';

// Using unique images for each food item
const foodImages = {
  margheritaPizza: 'https://images.pexels.com/photos/825661/pexels-photo-825661.jpeg?auto=compress&cs=tinysrgb&w=600',
  pepperoniPizza: 'https://images.pexels.com/photos/1146760/pexels-photo-1146760.jpeg?auto=compress&cs=tinysrgb&w=600',
  classicBurger: 'https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg?auto=compress&cs=tinysrgb&w=600',
  chickenBurger: 'https://images.pexels.com/photos/1633578/pexels-photo-1633578.jpeg?auto=compress&cs=tinysrgb&w=600',
  carbonaraPasta: 'https://images.pexels.com/photos/1437267/pexels-photo-1437267.jpeg?auto=compress&cs=tinysrgb&w=600',
  caesarSalad: 'https://images.pexels.com/photos/1213710/pexels-photo-1213710.jpeg?auto=compress&cs=tinysrgb&w=600',
  chocolateCake: 'https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?auto=compress&cs=tinysrgb&w=600',
  cheesecake: 'https://images.pexels.com/photos/1126359/pexels-photo-1126359.jpeg?auto=compress&cs=tinysrgb&w=600',
  tiramisu: 'https://images.pexels.com/photos/3026808/pexels-photo-3026808.jpeg?auto=compress&cs=tinysrgb&w=600',
  freshLemonade: 'https://images.pexels.com/photos/2789328/pexels-photo-2789328.jpeg?auto=compress&cs=tinysrgb&w=600',
  icedCoffee: 'https://images.pexels.com/photos/2396220/pexels-photo-2396220.jpeg?auto=compress&cs=tinysrgb&w=600',
  smoothie: 'https://images.pexels.com/photos/7656565/pexels-photo-7656565.jpeg?auto=compress&cs=tinysrgb&w=600',
  milkshake: 'https://images.pexels.com/photos/12365249/pexels-photo-12365249.jpeg?auto=compress&cs=tinysrgb&w=600',
};

// Fallback emojis for each food type
const foodEmojis = {
  margheritaPizza: '🍕',
  pepperoniPizza: '🍕',
  classicBurger: '🍔',
  chickenBurger: '🍔',
  carbonaraPasta: '🍝',
  caesarSalad: '🥗',
  chocolateCake: '🍰',
  cheesecake: '🍰',
  tiramisu: '🍰',
  freshLemonade: '🥤',
  icedCoffee: '☕',
  smoothie: '🥤',
  milkshake: '🥤',
};

const Menu = ({ onAddToCart }) => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [priceFilter, setPriceFilter] = useState('all');
  const [ratingFilter, setRatingFilter] = useState('all');

  const categories = [
    { id: 'all', name: 'All', icon: '🍽️' },
    { id: 'pizza', name: 'Pizza', icon: '🍕' },
    { id: 'burger', name: 'Burgers', icon: '🍔' },
    { id: 'pasta', name: 'Pasta', icon: '🍝' },
    { id: 'salad', name: 'Salads', icon: '🥗' },
    { id: 'dessert', name: 'Desserts', icon: '🍰' },
    { id: 'drink', name: 'Drinks', icon: '🥤' }
  ];

  const menuItems = [
    {
      id: 1,
      name: 'Margherita Pizza',
      category: 'pizza',
      price: 18.99,
      rating: 4.8,
      image: foodImages.margheritaPizza,
      emoji: foodEmojis.margheritaPizza,
      description: 'Classic tomato sauce with mozzarella cheese',
      popular: true
    },
    {
      id: 2,
      name: 'Pepperoni Pizza',
      category: 'pizza',
      price: 22.99,
      rating: 4.9,
      image: foodImages.pepperoniPizza,
      emoji: foodEmojis.pepperoniPizza,
      description: 'Spicy pepperoni with melted cheese',
      popular: true
    },
    {
      id: 3,
      name: 'Classic Burger',
      category: 'burger',
      price: 15.99,
      rating: 4.7,
      image: foodImages.classicBurger,
      emoji: foodEmojis.classicBurger,
      description: 'Juicy beef patty with fresh vegetables',
      popular: false
    },
    {
      id: 4,
      name: 'Chicken Burger',
      category: 'burger',
      price: 14.99,
      rating: 4.6,
      image: foodImages.chickenBurger,
      emoji: foodEmojis.chickenBurger,
      description: 'Grilled chicken with special sauce',
      popular: false
    },
    {
      id: 5,
      name: 'Carbonara Pasta',
      category: 'pasta',
      price: 16.99,
      rating: 4.8,
      image: foodImages.carbonaraPasta,
      emoji: foodEmojis.carbonaraPasta,
      description: 'Creamy pasta with bacon and parmesan',
      popular: true
    },
    {
      id: 6,
      name: 'Caesar Salad',
      category: 'salad',
      price: 12.99,
      rating: 4.5,
      image: foodImages.caesarSalad,
      emoji: foodEmojis.caesarSalad,
      description: 'Fresh romaine lettuce with caesar dressing',
      popular: false
    },
    {
      id: 7,
      name: 'Chocolate Cake',
      category: 'dessert',
      price: 8.99,
      rating: 4.9,
      image: foodImages.chocolateCake,
      emoji: foodEmojis.chocolateCake,
      description: 'Rich chocolate cake with ganache',
      popular: true
    },
    {
      id: 8,
      name: 'New York Cheesecake',
      category: 'dessert',
      price: 9.99,
      rating: 4.8,
      image: foodImages.cheesecake,
      emoji: foodEmojis.cheesecake,
      description: 'Creamy cheesecake with berry compote',
      popular: false
    },
    {
      id: 9,
      name: 'Tiramisu',
      category: 'dessert',
      price: 11.99,
      rating: 4.9,
      image: foodImages.tiramisu,
      emoji: foodEmojis.tiramisu,
      description: 'Italian coffee-flavored dessert',
      popular: true
    },
    {
      id: 10,
      name: 'Fresh Lemonade',
      category: 'drink',
      price: 4.99,
      rating: 4.4,
      image: foodImages.freshLemonade,
      emoji: foodEmojis.freshLemonade,
      description: 'Refreshing homemade lemonade',
      popular: false
    },
    {
      id: 11,
      name: 'Iced Coffee',
      category: 'drink',
      price: 5.99,
      rating: 4.6,
      image: foodImages.icedCoffee,
      emoji: foodEmojis.icedCoffee,
      description: 'Smooth iced coffee with cream',
      popular: false
    },
    {
      id: 12,
      name: 'Berry Smoothie',
      category: 'drink',
      price: 6.99,
      rating: 4.7,
      image: foodImages.smoothie,
      emoji: foodEmojis.smoothie,
      description: 'Fresh strawberry and huckleberry smoothie',
      popular: true
    },
    {
      id: 13,
      name: 'Chocolate Milkshake',
      category: 'drink',
      price: 7.99,
      rating: 4.8,
      image: foodImages.milkshake,
      emoji: foodEmojis.milkshake,
      description: 'Rich chocolate milkshake with whipped cream',
      popular: true
    }
  ];

  const filteredItems = menuItems.filter(item => {
    const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    // Price filter
    let matchesPrice = true;
    if (priceFilter === 'low') matchesPrice = item.price <= 10;
    else if (priceFilter === 'medium') matchesPrice = item.price > 10 && item.price <= 20;
    else if (priceFilter === 'high') matchesPrice = item.price > 20;
    
    // Rating filter
    let matchesRating = true;
    if (ratingFilter === 'high') matchesRating = item.rating >= 4.5;
    else if (ratingFilter === 'medium') matchesRating = item.rating >= 4.0 && item.rating < 4.5;
    else if (ratingFilter === 'low') matchesRating = item.rating < 4.0;
    
    return matchesCategory && matchesSearch && matchesPrice && matchesRating;
  });

  return (
    <section className="menu" id="menu">
      <div className="menu-container">
        <div className="menu-header">
          <h2 className="menu-title">
            Our <span className="gradient-text">Delicious</span> Menu
          </h2>
          <p className="menu-subtitle">
            Discover our carefully crafted dishes made with the finest ingredients
          </p>
        </div>

        <div className="menu-controls">
          <div className="search-box">
            <input
              type="text"
              placeholder="Search for your favorite food..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
            <span className="search-icon">🔍</span>
          </div>

          <div className="filter-controls">
            <div className="filter-group">
              <label className="filter-label">Price:</label>
              <select 
                value={priceFilter} 
                onChange={(e) => setPriceFilter(e.target.value)}
                className="filter-select"
              >
                <option value="all">All Prices</option>
                <option value="low">Under $10</option>
                <option value="medium">$10 - $20</option>
                <option value="high">Over $20</option>
              </select>
            </div>

            <div className="filter-group">
              <label className="filter-label">Rating:</label>
              <select 
                value={ratingFilter} 
                onChange={(e) => setRatingFilter(e.target.value)}
                className="filter-select"
              >
                <option value="all">All Ratings</option>
                <option value="high">4.5+ Stars</option>
                <option value="medium">4.0 - 4.4 Stars</option>
                <option value="low">Under 4.0</option>
              </select>
            </div>
          </div>

          <div className="category-filters">
            {categories.map(category => (
              <button
                key={category.id}
                className={`category-btn ${activeCategory === category.id ? 'active' : ''}`}
                onClick={() => setActiveCategory(category.id)}
              >
                <span className="category-icon">{category.icon}</span>
                {category.name}
              </button>
            ))}
          </div>
        </div>

        <div className="menu-grid">
          {filteredItems.map(item => (
            <div key={item.id} className={`menu-item ${item.popular ? 'popular' : ''}`}>
              {item.popular && <span className="popular-badge">🔥 Popular</span>}
              
              <div className="menu-item-image">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="food-img" 
                  loading="lazy"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div className="food-emoji-fallback" style={{ display: 'none' }}>
                  <span className="food-emoji">{item.emoji}</span>
                </div>
                <div className="menu-item-overlay">
                  <button 
                    className="add-to-cart-btn"
                    onClick={() => onAddToCart(item)}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>

              <div className="menu-item-content">
                <div className="menu-item-header">
                  <h3 className="menu-item-name">{item.name}</h3>
                  <div className="menu-item-rating">
                    <span className="star">⭐</span>
                    <span className="rating-text">{item.rating}</span>
                  </div>
                </div>

                <p className="menu-item-description">{item.description}</p>

                <div className="menu-item-footer">
                  <span className="menu-item-price">${item.price}</span>
                  <button 
                    className="quick-add-btn"
                    onClick={() => onAddToCart(item)}
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredItems.length === 0 && (
          <div className="no-results">
            <span className="no-results-icon">😕</span>
            <h3>No items found</h3>
            <p>Try adjusting your search or filter criteria</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Menu; 