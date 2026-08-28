import Link from "next/link";

const products = [
  {
    slug: "bc-mdt",
    name: "BC-MDT",
    category: "Law Enforcement",
    description:
      "A complete Mobile Data Terminal for FiveM police, sheriff, state police and federal departments.",
    features: [
      "CAD integration",
      "Player database",
      "Vehicle database",
      "Warrants",
      "BOLOs",
      "Mugshots",
      "NCIC-style records",
    ],
  },
  {
    slug: "bc-dispatch",
    name: "BC-Dispatch",
    category: "Communications",
    description:
      "A modern dispatch platform built for police, fire, EMS and communications departments.",
    features: [
      "Live calls",
      "Unit management",
      "911 calls",
      "Dispatch statuses",
      "Department support",
      "CAD integration",
      "Radio integration",
    ],
  },
  {
    slug: "bc-doj",
    name: "BC-DOJ",
    category: "Justice",
    description:
      "A complete justice-management system for courts, prosecutors, attorneys and law enforcement.",
    features: [
      "Cases",
      "Court records",
      "Warrants",
      "Citations",
      "Charges",
      "Judges",
      "Attorney management",
    ],
  },
  {
    slug: "bc-scoreboard",
    name: "BC-Scoreboard",
    category: "Core",
    description:
      "A professional FiveM scoreboard with player information and server statistics.",
    features: [
      "Live player count",
      "Server uptime",
      "Player avatars",
      "Department counts",
      "Custom branding",
      "QBCore support",
      "ESX support",
    ],
  },
  {
    slug: "bc-banking",
    name: "BC-Banking",
    category: "Economy",
    description:
      "A modern banking experience designed for immersive FiveM roleplay servers.",
    features: [
      "Bank accounts",
      "Transactions",
      "Transfers",
      "Account history",
      "Business banking",
      "Configurable UI",
      "Framework support",
    ],
  },
  {
    slug: "bc-taxi",
    name: "BC-Taxi",
    category: "Jobs",
    description:
      "A complete taxi job system with driver management and customer trips.",
    features: [
      "Taxi requests",
      "Driver status",
      "Trip management",
      "Fare system",
      "Driver payouts",
      "Job integration",
      "Configurable rates",
    ],
  },
];

export default function ProductsPage() {
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
          <img src="/logo.png" alt="BC Custom Scripts" className="logo-image" />

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

      <section className="products-hero">
        <div className="section-container">
          <span className="eyebrow">BC CUSTOM SCRIPTS STORE</span>

          <h1>
            Premium scripts.
            <br />
            <span>Built for FiveM.</span>
          </h1>

          <p>
            Explore the BC Custom Scripts ecosystem and
            bring professional tools to your roleplay server.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="section-container">
          <div className="products">
            {products.map((product) => (
              <article className="product" key={product.slug}>
                <div className="product-top">
                  <div className="product-icon">BC</div>

                  <span className="status">
                    Coming Soon
                  </span>
                </div>

                <span className="category">
                  {product.category}
                </span>

                <h3>{product.name}</h3>

                <p>{product.description}</p>

                <ul className="product-features">
                  {product.features.slice(0, 4).map((feature) => (
                    <li key={feature}>✓ {feature}</li>
                  ))}
                </ul>

                <div className="product-bottom">
                  <span>Premium Resource</span>

                  <Link href={`/products/${product.slug}`}>
                    View Product →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <footer>
        <div className="footer-container">
          <div className="logo">
            <span className="logo-box">BC</span>

            <span>
              <strong>BC CUSTOM</strong>
              <small>SCRIPTS</small>
            </span>
          </div>

          <p>
            © {new Date().getFullYear()} BC Custom Scripts.
            All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}