import { useEffect, useState } from "react";
import "./App.css";

import products from "./data/product";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";

function App() {
  const [cart, setCart] = useState(() => {
      const savedCart = localStorage.getItem("tinkrtech-cart");

      return savedCart ? JSON.parse(savedCart) : [];
  });
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [completedOrder, setCompletedOrder] = useState(null);

  useEffect(() => {
      localStorage.setItem("tinkrtech-cart", JSON.stringify(cart));
  }, [cart]);

  function addToCart(product) {
    setCart((currentCart) => {
      const existingProduct = currentCart.find(
        (item) => item.id === product.id
      );

      if (existingProduct) {
        return currentCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...currentCart, { ...product, quantity: 1 }];
    });
  }

  function updateQuantity(productId, amount) {
    setCart((currentCart) =>
      currentCart
        .map((item) =>
          item.id === productId
            ? { ...item, quantity: item.quantity + amount }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  }

  function removeFromCart(productId) {
    setCart((currentCart) =>
      currentCart.filter((item) => item.id !== productId)
    );
  }

  function clearCart() {
    setCart([]);
  }

  function handlePlaceOrder(order) {
      setCompletedOrder(order);
      setIsCheckingOut(false);
      setCart([]);
      localStorage.removeItem("tinkrtech-cart");
  }

  const cartCount = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <div className="store">
      <Navbar cartCount={cartCount} />

      <main>
        <Hero />

        <ProductList
          products={products}
          onAddToCart={addToCart}
        />
        
        {completedOrder ? (
          <section className="order-success">
            <h2>🎉 Order Placed Successfully!</h2>
            <p>Thank you for shopping at TinkrTech.</p>

            <p>
              Order Number: <strong>{completedOrder.orderNumber}</strong>
            </p>

            <p>
              Total:{" "}
              <strong>
                ₱
                {completedOrder.total.toLocaleString("en-PH", {
                  minimumFractionDigits: 2,
                })}
              </strong>
            </p>

            <button onClick={() => setCompletedOrder(null)}>
              Continue Shopping
            </button>
          </section>
        ) : isCheckingOut ? (
          <Checkout
            cart={cart}
            onPlaceOrder={handlePlaceOrder}
            onBack={() => setIsCheckingOut(false)}
          />
        ) : (
          <Cart
            cart={cart}
            onUpdateQuantity={updateQuantity}
            onRemove={removeFromCart}
            onClearCart={clearCart}
            onCheckout={() => setIsCheckingOut(true)}
          />
        )}

        <section className="about-section" id="about">
          <h2>Tech that fits your everyday.</h2>

          <p>
            Discover practical gadgets, thoughtful designs,
            and everyday essentials at TinkrTech.
          </p>
        </section>
      </main>

      <footer>
        <a className="logo" href="#home">
          Tinkr<span>Tech</span>
        </a>

        <p>
          © 2026 TinkrTech. Demo store for portfolio practice.
        </p>
      </footer>
    </div>
  );
}

export default App;