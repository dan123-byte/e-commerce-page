function Cart({
  cart,
  onUpdateQuantity,
  onRemove,
  onClearCart,
  onCheckout,
}) {
  const subtotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  function formatPrice(price) {
    return `₱${price.toLocaleString("en-PH")}`;
  }

  return (
    <section className="cart-section" id="cart">
      <div className="section-heading">
        <div>
          <p className="eyebrow">YOUR SELECTION</p>
          <h2>Shopping Cart</h2>
        </div>

        <a className="continue-shopping" href="#products">
          Continue Shopping →
        </a>
      </div>

      {cart.length === 0 ? (
        <div className="empty-cart">
          <span>🛒</span>
          <h3>Your cart is empty</h3>
          <p>Add some gadgets to get started.</p>

          <a className="primary-button" href="#products">
            Browse Products
          </a>
        </div>
      ) : (
        <div className="cart-layout">
          <div className="cart-items">
            {cart.map((item) => (
              <article className="cart-item" key={item.id}>
                <div className="cart-item-image">
                  <span>{item.emoji}</span>
                </div>

                <div className="cart-item-info">
                  <p className="product-category">
                    {item.category}
                  </p>

                  <h3>{item.name}</h3>
                  <p>{formatPrice(item.price)} each</p>

                  <button
                    className="remove-button"
                    onClick={() => onRemove(item.id)}
                  >
                    Remove
                  </button>
                </div>

                <div className="cart-item-right">
                  <div className="quantity-control">
                    <button
                      aria-label={`Decrease ${item.name} quantity`}
                      onClick={() =>
                        onUpdateQuantity(item.id, -1)
                      }
                    >
                      −
                    </button>

                    <span>{item.quantity}</span>

                    <button
                      aria-label={`Increase ${item.name} quantity`}
                      onClick={() =>
                        onUpdateQuantity(item.id, 1)
                      }
                    >
                      +
                    </button>
                  </div>

                  <strong className="line-total">
                    {formatPrice(item.price * item.quantity)}
                  </strong>
                </div>
              </article>
            ))}
          </div>

          <aside className="order-summary">
            <h3>Order Summary</h3>

            <div className="summary-row">
              <span>Subtotal</span>
              <span>{formatPrice(subtotal)}</span>
            </div>

            <div className="summary-row">
              <span>Shipping</span>
              <span>Calculated at checkout</span>
            </div>

            <div className="summary-divider" />

            <div className="summary-row summary-total">
              <span>Total</span>
              <strong>{formatPrice(subtotal)}</strong>
            </div>

            <p className="summary-note">
              Demo store: shipping and payment are not yet included.
            </p>

            <button
              className="checkout-button"
              onClick={onCheckout}
            >
              Proceed to Checkout →
            </button>

            <button
              className="clear-cart-button"
              onClick={onClearCart}
            >
              Clear Cart
            </button>
          </aside>
        </div>
      )}
    </section>
  );
}

export default Cart;