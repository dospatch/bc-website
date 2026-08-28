import Link from "next/link";

const products = [
  {
    slug: "bc-mdt",
    name: "BC-MDT",
    category: "Law Enforcement",
    description:
      "A complete Mobile Data Terminal for FiveM police, sheriff, state police and federal departments.",
  },
  {
    slug: "bc-dispatch",
    name: "BC-Dispatch",
    category: "Communications",
    description:
      "A modern dispatch platform for police, fire, EMS and communications departments.",
  },
  {
    slug: "bc-doj",
    name: "BC-DOJ",
    category: "Justice",
    description:
      "Justice-management tools for cases, warrants, citations and court workflows.",
  },
  {
    slug: "bc-scoreboard",
    name: "BC-Scoreboard",
    category: "Core",
    description:
      "A professional FiveM scoreboard with player information and server statistics.",
  },
  {
    slug: "bc-banking",
    name: "BC-Banking",
    category: "Economy",
    description:
      "Modern banking tools designed for immersive FiveM roleplay servers.",
  },
  {
    slug: "bc-taxi",
    name: "BC-Taxi",
    category: "Jobs",
    description:
      "A complete taxi job system with driver management and customer trips.",
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
            Explore the BC Custom Scripts ecosystem and bring
            professional tools to your roleplay server.
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
