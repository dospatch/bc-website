import Image from "next/image";
import Link from "next/link";

const products = [
  {
    slug: "bc-mdt",
    name: "BC-MDT",
    category: "Law Enforcement",
    tagline: "Mobile Data Terminal",
    description:
      "A modern, professional Mobile Data Terminal designed for FiveM roleplay communities. Manage people, vehicles, reports, warrants, BOLOs and more from one powerful system.",
    image: "/products/bc-mdt.png",
    status: "COMING SOON",
    price: "Coming Soon",
    features: [
      "Character Database",
      "Vehicle Database",
      "Warrants",
      "BOLO System",
      "Mugshots",
      "Reports",
      "Citations",
      "NCIC-Style Search",
    ],
  },

  {
    slug: "bc-dispatch",
    name: "BC-Dispatch",
    category: "Communications",
    tagline: "Professional Dispatch System",
    description:
      "A modern dispatch platform built for police, fire, EMS and communications departments. Manage calls, units, statuses and communications from one system.",
    image: null,
    status: "COMING SOON",
    price: "Coming Soon",
    features: [
      "Live Calls",
      "911 Calls",
      "Unit Management",
      "Dispatch Status",
      "CAD Integration",
      "Radio Integration",
      "Department Support",
    ],
  },

  {
    slug: "bc-doj",
    name: "BC-DOJ",
    category: "Justice",
    tagline: "Justice Management System",
    description:
      "A complete justice-management platform for courts, prosecutors, attorneys and law enforcement agencies.",
    image: null,
    status: "COMING SOON",
    price: "Coming Soon",
    features: [
      "Cases",
      "Court Records",
      "Warrants",
      "Citations",
      "Charges",
      "Judges",
      "Attorney Management",
    ],
  },

  {
    slug: "bc-scoreboard",
    name: "BC-Scoreboard",
    category: "Core",
    tagline: "FiveM Server Scoreboard",
    description:
      "A professional FiveM scoreboard designed to display live player information, server statistics and department activity.",
    image: null,
    status: "COMING SOON",
    price: "Coming Soon",
    features: [
      "Live Player Count",
      "Server Uptime",
      "Player Avatars",
      "Department Counts",
      "Custom Branding",
      "QBCore Support",
      "ESX Support",
    ],
  },

  {
    slug: "bc-banking",
    name: "BC-Banking",
    category: "Economy",
    tagline: "Modern FiveM Banking System",
    description:
      "A professional banking experience designed to bring a complete financial system to your FiveM roleplay server.",
    image: "/products/bc-banking.png",
    status: "COMING SOON",
    price: "Coming Soon",
    features: [
      "Personal Accounts",
      "Business Accounts",
      "Money Transfers",
      "Transaction History",
      "Deposits",
      "Withdrawals",
      "Account Management",
      "Bank Locations",
    ],
  },

  {
    slug: "bc-taxi",
    name: "BC-Taxi",
    category: "Jobs",
    tagline: "Complete Taxi Job System",
    description:
      "A complete taxi job system with driver management, customer trips, fares and configurable payouts.",
    image: null,
    status: "COMING SOON",
    price: "Coming Soon",
    features: [
      "Taxi Requests",
      "Driver Status",
      "Trip Management",
      "Fare System",
      "Driver Payouts",
      "Job Integration",
      "Configurable Rates",
    ],
  },
];

export default function ProductsPage() {
  return (
    <main>
      {/* =====================================================
          NAVBAR
      ===================================================== */}

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

      {/* =====================================================
          PRODUCTS HERO
      ===================================================== */}

      <section className="products-hero">
        <div className="section-container">
          <span className="eyebrow">
            BC CUSTOM SCRIPTS STORE
          </span>

          <h1>
            Premium scripts.
            <br />

            <span>
              Built for FiveM.
            </span>
          </h1>

          <p>
            Professional FiveM resources designed
            to help communities build better,
            more immersive roleplay experiences.
          </p>
        </div>
      </section>

      {/* =====================================================
          PRODUCTS
      ===================================================== */}

      <section className="section">
        <div className="section-container">
          <div className="products-header">
            <div>
              <span className="eyebrow">
                OUR PRODUCTS
              </span>

              <h2>
                The BC Custom
                <span> ecosystem.</span>
              </h2>
            </div>

            <p>
              Browse our growing collection of
              professional FiveM resources.
            </p>
          </div>

          <div className="products">
            {products.map((product) => (
              <article
                className="product"
                key={product.slug}
              >
                {/* PRODUCT IMAGE */}

                {product.image && (
                  <div className="product-image-container">
                    <Image
                      src={product.image}
                      alt={`${product.name} product preview`}
                      fill
                      sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 33vw"
                      className="product-image"
                    />

                    <div className="product-status">
                      {product.status}
                    </div>
                  </div>
                )}

                {!product.image && (
                  <div className="product-image-container product-image-placeholder">
                    <div className="product-status">
                      {product.status}
                    </div>
                  </div>
                )}

                {/* PRODUCT BRAND */}

                <div className="product-brand-small">
                  <span className="logo-box">
                    BC
                  </span>

                  <span>
                    <strong>
                      {product.name}
                    </strong>

                    <small>
                      {product.category}
                    </small>
                  </span>
                </div>

                {/* CATEGORY */}

                <span className="category">
                  {product.category}
                </span>

                {/* PRODUCT NAME */}

                <h3>
                  {product.name}
                </h3>

                {/* TAGLINE */}

                <h4>
                  {product.tagline}
                </h4>

                {/* DESCRIPTION */}

                <p>
                  {product.description}
                </p>

                {/* FEATURES */}

                <ul className="product-features">
                  {product.features
                    .slice(0, 4)
                    .map((feature) => (
                      <li key={feature}>
                        <span>✓</span>
                        {feature}
                      </li>
                    ))}
                </ul>

                {/* PRODUCT FOOTER */}

                <div className="product-bottom">
                  <div>
                    <small>PRICE</small>

                    <strong>
                      {product.price}
                    </strong>
                  </div>

                  <Link
                    href={`/products/${product.slug}`}
                  >
                    View Product →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          CUSTOM PRODUCT SECTION
      ===================================================== */}

      <section className="section custom-products-section">
        <div className="section-container">
          <div className="custom-products-card">
            <div>
              <span className="eyebrow">
                MORE COMING
              </span>

              <h2>
                More tools.
                <span> More possibilities.</span>
              </h2>

              <p>
                BC Custom Scripts is continuously
                expanding its collection of FiveM
                resources. New products,
                integrations and features are
                coming soon.
              </p>
            </div>

            <Link
              href="/#support"
              className="secondary-button"
            >
              Request a Product
            </Link>
          </div>
        </div>
      </section>

      {/* =====================================================
          FOOTER
      ===================================================== */}

      <footer>
        <div className="footer-container">
          <Link href="/" className="logo">
            <span className="logo-box">
              BC
            </span>

            <span>
              <strong>BC CUSTOM</strong>
              <small>SCRIPTS</small>
            </span>
          </Link>

          <div className="footer-links">
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
          </div>

          <p>
            © {new Date().getFullYear()} BC
            Custom Scripts. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}