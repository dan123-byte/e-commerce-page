function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <p className="eyebrow">THE NEXT-GEN TECH STORE</p>

        <h1>
          Upgrade your
          <br />
          everyday tech.
        </h1>

        <p className="hero-description">
          Discover gadgets and accessories designed
          to make your everyday better.
        </p>

        <a className="primary-button" href="#products">
          Shop Now →
        </a>
      </div>

      <div className="hero-art" aria-hidden="true">
        <span>🎧</span>
        <span>⌨️</span>
        <span>🖱️</span>
      </div>
    </section>
  );
}

export default Hero;