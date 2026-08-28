import Link from "next/link";

export type Product = {
  name: string;
  category: string;
  tagline: string;
  description: string;
  features: string[];
  integrations: string[];
  requirements: string[];
  status: string;
};

export default function ProductPage({
  product,
}: {
  product: Product;
}) {
  return (
    <main>
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

      <section className="product-detail-hero">
        <div className="section-container">
          <Link href="/products" className="back-link">
            ← Back to Products
          </Link>

          <div className="product-detail-grid">
            <div>
              <div className="large-product-icon">
                BC
              </div>

              <span className="eyebrow">
                {product.category} • FIVE M
              </span>

              <h1>
                {product.name}
                <span>{product.tagline}</span>
              </h1>

              <p className="product-lead">
                {product.description}
              </p>

              <div className="product-actions">
                <a
                  href="#purchase"
                  className="primary-button"
                >
                  Buy {product.name}
                </a>

                <a
                  href="#features"
                  className="secondary-button"
                >
                  Explore Features
                </a>
              </div>

              <div className="product-meta">
                {product.integrations
                  .slice(0, 3)
                  .map((integration) => (
                    <div key={integration}>
                      <strong>{integration}</strong>
                      <span>Supported</span>
                    </div>
                  ))}
              </div>
            </div>

            <div className="product-preview">
              <div className="preview-window">
                <div className="preview-bar">
                  <span />
                  <span />
                  <span />
                </div>

                <div className="preview-content">
                  <div className="preview-sidebar">
                    <div className="preview-logo">
                      BC
                    </div>

                    <div />
                    <div />
                    <div />
                    <div />
                    <div />
                  </div>

                  <div className="preview-main">
                    <div className="preview-heading">
                      <div>
                        <small>
                          BC CUSTOM SCRIPTS
                        </small>

                        <strong>
                          {product.name}
                        </strong>
                      </div>

                      <div className="preview-status">
                        {product.status}
                      </div>
                    </div>

                    <div className="preview-cards">
                      <div>
                        <small>PRODUCT</small>
                        <strong>BC</strong>
                      </div>

                      <div>
                        <small>VERSION</small>
                        <strong>1.0</strong>
                      </div>

                      <div>
                        <small>STATUS</small>
                        <strong>ON</strong>
                      </div>
                    </div>

                    <div className="preview-panel">
                      <small>
                        SYSTEM INFORMATION
                      </small>

                      {product.features
                        .slice(0, 4)
                        .map((feature) => (
                          <div
                            className="preview-row"
                            key={feature}
                          >
                            <span>{feature}</span>
                            <span>READY</span>
                          </div>
                        ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="preview-glow" />
            </div>
          </div>
        </div>
      </section>

      <section
        id="features"
        className="section product-section"
      >
        <div className="section-container">
          <div className="section-heading">
            <span className="eyebrow">
              FEATURES
            </span>

            <h2>
              Powerful tools.
              <span> Simple experience.</span>
            </h2>

            <p>
              Everything you need to get the most out
              of {product.name}.
            </p>
          </div>

          <div className="feature-grid">
            {product.features.map(
              (feature, index) => (
                <article
                  className="feature-card"
                  key={feature}
                >
                  <div className="feature-icon">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  <h3>{feature}</h3>

                  <p>
                    Built into {product.name} with a
                    clean and professional experience
                    for your FiveM community.
                  </p>
                </article>
              )
            )}
          </div>
        </div>
      </section>

      <section className="section compatibility-section">
        <div className="section-container">
          <div className="section-heading center">
            <span className="eyebrow">
              INTEGRATIONS
            </span>

            <h2>
              Built for your
              <span> server.</span>
            </h2>
          </div>

          <div className="compatibility-grid">
            {product.integrations.map(
              (integration) => (
                <div
                  className="compatibility-card"
                  key={integration}
                >
                  <strong>{integration}</strong>

                  <span>
                    Integration / Compatibility
                  </span>

                  <b>SUPPORTED</b>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      <section className="section requirements-section">
        <div className="section-container">
          <div className="requirements-grid">
            <div>
              <span className="eyebrow">
                REQUIREMENTS
              </span>

              <h2>
                Ready to
                <span> deploy.</span>
              </h2>

              <p>
                Get {product.name} running on your
                server with the required dependencies
                and configuration.
              </p>
            </div>

            <div className="requirements-card">
              {product.requirements.map(
                (requirement, index) => (
                  <div key={requirement}>
                    <span>
                      {String(index + 1).padStart(
                        2,
                        "0"
                      )}
                    </span>

                    <strong>
                      {requirement}
                    </strong>

                    <p>
                      Required for proper operation.
                    </p>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </section>

      <section
        id="purchase"
        className="purchase-section"
      >
        <div className="section-container">
          <div className="purchase-card">
            <div>
              <span className="eyebrow">
                BC CUSTOM SCRIPTS
              </span>

              <h2>{product.name}</h2>

              <p>
                {product.tagline} for FiveM.
              </p>
            </div>

            <div className="purchase-price">
              <small>STATUS</small>

              <strong>
                {product.status}
              </strong>
            </div>

            <div className="purchase-actions">
              <button disabled>
                Coming Soon
              </button>

              <Link href="/products">
                View Products
              </Link>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <div className="footer-container">
          <div className="logo">
            <span className="logo-box">
              BC
            </span>

            <span>
              <strong>BC CUSTOM</strong>
              <small>SCRIPTS</small>
            </span>
          </div>

          <p>
            © {new Date().getFullYear()} BC Custom
            Scripts. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}
