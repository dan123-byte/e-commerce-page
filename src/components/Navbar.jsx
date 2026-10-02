function Navbar({ cartCount = 0 }) {
  return (
    <nav className="navbar">
      <a className="logo" href="#home">
        Tinkr<span>Tech</span>
      </a>

      <div className="nav-links">
        <a href="#home">Home</a>
        <a href="#products">Products</a>
        <a href="#about">About</a>
      </div>

      <a className="cart-button" href="#cart">
        🛒 Cart <span>{cartCount}</span>
      </a>
    </nav>
  );
}

export default Navbar;