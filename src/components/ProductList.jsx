import ProductCard from "./ProductCard";

function ProductList({ products, onAddToCart }) {
  return (
    <section className="products-section" id="products">
      <div className="section-heading">
        <div>
          <p className="eyebrow">OUR COLLECTION</p>
          <h2>Featured Products</h2>
        </div>

        <p>Find your next favorite gadget.</p>
      </div>

      <div className="product-grid">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={onAddToCart}
          />
        ))}
      </div>
    </section>
  );
}

export default ProductList;