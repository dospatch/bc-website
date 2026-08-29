import Link from "next/link";

export type Product = {
  slug: string;
  name: string;
  category: string;
  tagline: string;
  description: string;
  image: string | null;
  status: string;
  price: string;
  features: string[];
  integrations: string[];
  requirements: string[];
};

type ProductPageProps = {
  product: Product;
};

export default function ProductPage({ product }: ProductPageProps) {
  return (
    <main>
      {/* NAVBAR */}
      <header className="navbar">
        <div className="nav-container">
          <Link href="/" className="logo">
            <span className="logo-box">BC</span>

            <span>
              <strong>BC CUSTOM</strong>
              <small>SCRIPTS</small>
            </span>
          </Link>

          <nav>
            <Link href="/">Home</Link>
            <Link href="/products">Products</Link>
            <Link href="/#integrations">Integrations</Link>
            <Link href="/#support">Support</Link>
          </nav>

          <Link href="/products" className="nav-button">
            Store
          </Link>
        </div>
      </header>

      {/* PRODUCT HERO */}
      <section className="product-detail-hero">
        <div className="section-container">
          <Link href="/products" className="back-link">
            ← Back to Products
          </Link>

          <div className="product-detail-grid">
            {/* PRODUCT INFORMATION */}
            <div>
              <span className="eyebrow">
                {product.category.toUpperCase()} • FIVE M
              </span>

              <h1>
                {product.name}
                <span>{product.tagline}</span>
              </h1>

              <p className="product-lead">
                {product.description}
              </p>

              <div className="product-actions">
                <a href="#purchase" className="primary-button">
                  Buy {product.name}
                </a>

                <a href="#features" className="secondary-button">
                  Explore Features
                </a>
              </div>

              <div className="product-meta">
                {product.integrations.slice(0, 3).map((integration) => (
                  <div key={integration}>
                    <strong>{integration}</strong>
                    <span>Supported</span>
                  </div>
                ))}
              </div>
            </div>

            {/* PRODUCT IMAGE */}
            <div className="product-preview">
              <div className="preview-window">
                <div className="preview-bar">
                  <span />
                  <span />
                  <span />
                </div>

                <div className="product-image-container">
                  {product.image ? (
                    <img
                      src={product.image}
                      alt={product.name}
                      className="product-image"
                    />
                  ) : (
                    <div className="product-image-placeholder">
                      <span>BC</span>
                      <strong>{product.name}</strong>
                      <small>Product Preview Coming Soon</small>
                    </div>
                  )}
                </div>
              </div>

              <div className="preview-glow" />
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section id="features" className="section product-section">
        <div className="section-container">
          <div className="section-heading">
            <span className="eyebrow">POWERFUL TOOLS</span>

            <h2>
              Everything your
              <span> server needs.</span>
            </h2>

            <p>
              Explore everything included with {product.name}.
            </p>
          </div>

          <div className="feature-grid">
            {product.features.map((feature, index) => (
              <article className="feature-card" key={feature}>
                <div className="feature-icon">
                  {index + 1}
                </div>

                <h3>{feature}</h3>

                <p>
                  Professional {product.name} functionality
                  designed for FiveM roleplay communities.
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* INTEGRATIONS */}
      <section className="section compatibility-section">
        <div className="section-container">
          <div className="section-heading center">
            <span className="eyebrow">BUILT TO INTEGRATE</span>

            <h2>
              Works with your
              <span> server.</span>
            </h2>
          </div>

          <div className="compatibility-grid">
            {product.integrations.map((integration) => (
              <div
                className="compatibility-card"
                key={integration}
              >
                <strong>{integration}</strong>
                <span>Integration</span>
                <b>SUPPORTED</b>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REQUIREMENTS */}
      <section className="section requirements-section">
        <div className="section-container">
          <div className="requirements-grid">
            <div>
              <span className="eyebrow">REQUIREMENTS</span>

              <h2>
                Simple to
                <span> install.</span>
              </h2>

              <p>
                {product.name} is designed to fit into your
                existing FiveM server.
              </p>
            </div>

            <div className="requirements-card">
              {product.requirements.map((requirement, index) => (
                <div key={requirement}>
                  <span>
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <strong>{requirement}</strong>

                  <p>
                    Required for {product.name}.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PURCHASE */}
      <section id="purchase" className="purchase-section">
        <div className="section-container">
          <div className="purchase-card">
            <div>
              <span className="eyebrow">
                BC CUSTOM SCRIPTS
              </span>

              <h2>{product.name}</h2>

              <p>{product.description}</p>
            </div>

            <div className="purchase-price">
              <small>PRICE</small>
              <strong>{product.price}</strong>
            </div>

            <div className="purchase-actions">
              <button disabled>{product.status}</button>

              <Link href="/products">
                View All Products
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SIMPLE FOOTER */}
      <footer>
        <div className="footer-container">
          <p>
            © {new Date().getFullYear()} BC Custom Scripts.
            All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}