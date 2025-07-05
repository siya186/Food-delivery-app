import { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Menu from './components/Menu'
import Cart from './components/Cart'
import Footer from './components/Footer'
import './App.css'

function App() {
  const [cartOpen, setCartOpen] = useState(false)
  const [cartItems, setCartItems] = useState([])

  // Add item to cart
  const handleAddToCart = (item) => {
    setCartItems((prev) => {
      const existing = prev.find((i) => i.id === item.id)
      if (existing) {
        return prev.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        )
      } else {
        return [...prev, { ...item, quantity: 1 }]
      }
    })
    setCartOpen(true)
  }

  // Update quantity
  const handleUpdateQuantity = (itemId, newQuantity) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === itemId ? { ...item, quantity: newQuantity } : item
      )
    )
  }

  // Remove item
  const handleRemoveItem = (itemId) => {
    setCartItems((prev) => prev.filter((item) => item.id !== itemId))
  }

  // Checkout
  const handleCheckout = () => {
    alert('Thank you for your order!')
    setCartItems([])
  }

  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0)

  return (
    <div className="app-root">
      <Header 
        cartCount={cartCount} 
        onCartClick={() => setCartOpen(true)}
      />
      <main>
        <Hero onOrderNow={() => window.scrollTo({ top: document.getElementById('menu').offsetTop - 60, behavior: 'smooth' })} />
        <Menu onAddToCart={handleAddToCart} />
      </main>
      <Footer />
      <Cart
        isOpen={cartOpen}
        onClose={() => setCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onCheckout={handleCheckout}
      />
    </div>
  )
}

export default App
