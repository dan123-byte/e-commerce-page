function ProductCard({ product, onAddToCart }) {
  return (
    <article className="product-card">
      <div className="product-image">
        <span>{product.emoji}</span>
      </div>

      <div className="product-info">
        <p className="product-category">
          {product.category}
        </p>

        <h3>{product.name}</h3>

        <div className="product-bottom">
          <strong>
            ₱{product.price.toLocaleString("en-PH")}
          </strong>

          <button
            className="add-button"
            aria-label={`Add ${product.name} to cart`}
            onClick={() => onAddToCart(product)}
          >
            +
          </button>
        </div>
      </div>
    </article>
  );
}

export default ProductCard;