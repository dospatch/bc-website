import Image from "next/image";
import Link from "next/link";

export type Product = {
  slug: string;
  name: string;
  category: string;
  tagline: string;
  description: string;
  image: string;
  status: string;
  price: string;
  features: string[];
  integrations: string[];
  requirements: string[];
};

type ProductPageProps = {
  product: Product;
};

export default function ProductPage({
  product,
}: ProductPageProps) {
  return (
    <main>
      {/* NAVBAR */}

      <header className="navbar">
        <div className="nav-container">
          <Link href="/" className="logo">
            <span className="logo-box">
              BC
            </span>

            <span>
              <strong>BC CUSTOM</strong>
              <small>SCRIPTS</small>
            </span>
          </Link>

          <nav>
            <Link href="/">
              Home
            </Link>

            <Link href="/products">
              Products
            </Link>

            <Link href="/#integrations">
              Integrations
            </Link>

            <Link href="/#support">
              Support
            </Link>
          </nav>

          <Link
            href="/products"
            className="nav-button"
          >
            Store
          </Link>
        </div>
      </header>

      {/* HERO */}

      <section className="product-detail-hero">
        <div className="section-container">

          <Link
            href="/products"
            className="back-link"
          >
            ← Back to Products
          </Link>

          <div className="product-detail-grid">

            {/* LEFT */}

            <div>
              <span className="eyebrow">
                {product.category} • FIVE M
              </span>

              <h1>
                {product.name}

                <span>
                  {product.tagline}
                </span>
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
                      <strong>
                        {integration}
                      </strong>

                      <span>
                        Supported
                      </span>
                    </div>
                  ))}

              </div>
            </div>

            {/* RIGHT */}

            <div className="product-preview">

              <div className="preview-window">

                <div className="preview-bar">
                  <span />
                  <span />
                  <span />
                </div>

                <div className="preview-image">

                  <Image
                    src={product.image}
                    alt={`${product.name} preview`}
                    fill
                    priority
                    sizes="(max-width: 900px) 100vw, 50vw"
                  />

                </div>

              </div>

            </div>

          </div>
        </div>
      </section>

      {/* FEATURES */}

      <section
        id="features"
        className="section product-section"
      >
        <div className="section-container">

          <div className="section-heading">

            <span className="eyebrow">
              POWERFUL TOOLS
            </span>

            <h2>
              Everything your
              <span>
                {" "}
                department needs.
              </span>
            </h2>

            <p>
              {product.name} provides the
              tools your FiveM community
              needs in one professional
              interface.
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
                    {String(index + 1).padStart(
                      2,
                      "0"
                    )}
                  </div>

                  <h3>
                    {feature}
                  </h3>

                  <p>
                    Professional {feature.toLowerCase()} tools built into{" "}
                    {product.name}.
                  </p>

                </article>
              )
            )}

          </div>

        </div>
      </section>

      {/* INTEGRATIONS */}

      <section className="section compatibility-section">
        <div className="section-container">

          <div className="section-heading center">

            <span className="eyebrow">
              INTEGRATIONS
            </span>

            <h2>
              Built to work with
              <span>
                {" "}
                your server.
              </span>
            </h2>

          </div>

          <div className="compatibility-grid">

            {product.integrations.map(
              (integration) => (
                <div
                  className="compatibility-card"
                  key={integration}
                >

                  <strong>
                    {integration}
                  </strong>

                  <span>
                    Integration
                  </span>

                  <b>
                    SUPPORTED
                  </b>

                </div>
              )
            )}

          </div>

        </div>
      </section>

      {/* REQUIREMENTS */}

      <section className="section requirements-section">
        <div className="section-container">

          <div className="requirements-grid">

            <div>

              <span className="eyebrow">
                REQUIREMENTS
              </span>

              <h2>
                Simple to
                <span>
                  {" "}
                  install.
                </span>
              </h2>

              <p>
                Everything required to
                run {product.name} will be
                provided with your purchase.
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
                      Required for
                      {` ${product.name}`}.
                    </p>

                  </div>
                )
              )}

            </div>

          </div>

        </div>
      </section>

      {/* PURCHASE */}

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

              <h2>
                {product.name}
              </h2>

              <p>
                {product.description}
              </p>

            </div>

            <div className="purchase-price">

              <small>
                PRICE
              </small>

              <strong>
                {product.price}
              </strong>

            </div>

            <div className="purchase-actions">

              <button disabled>
                {product.status}
              </button>

              <Link href="/products">
                View All Products
              </Link>

            </div>

          </div>

        </div>
      </section>

      {/* FOOTER */}

      <footer>

        <div className="footer-container">

          <Link
            href="/"
            className="logo"
          >

            <span className="logo-box">
              BC
            </span>

            <span>
              <strong>
                BC CUSTOM
              </strong>

              <small>
                SCRIPTS
              </small>
            </span>

          </Link>

          <p>
            © {new Date().getFullYear()} BC
            Custom Scripts. All rights
            reserved.
          </p>

        </div>

      </footer>
    </main>
  );
}