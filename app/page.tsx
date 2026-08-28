import Link from "next/link";

const products = [
  {
    slug: "bc-mdt",
    name: "BC-MDT",
    category: "Law Enforcement",
    description:
      "A modern Mobile Data Terminal designed for FiveM police, sheriff, state police and federal departments.",
    image: "/products/bc-mdt.png",
    status: "COMING SOON",
  },
  {
    slug: "bc-dispatch",
    name: "BC-Dispatch",
    category: "Communications",
    description:
      "A professional dispatch system for police, fire, EMS and communications departments.",
    image: "/products/bc-dispatch.png",
    status: "COMING SOON",
  },
  {
    slug: "bc-doj",
    name: "BC-DOJ",
    category: "Justice",
    description:
      "A complete justice management system for courts, prosecutors, attorneys and law enforcement.",
    image: "/products/bc-doj.png",
    status: "COMING SOON",
  },
  {
    slug: "bc-scoreboard",
    name: "BC-Scoreboard",
    category: "Core",
    description:
      "A professional FiveM scoreboard showing players, departments and server statistics.",
    image: "/products/bc-scoreboard.png",
    status: "COMING SOON",
  },
  {
    slug: "bc-banking",
    name: "BC-Banking",
    category: "Economy",
    description:
      "A modern banking system designed for immersive FiveM roleplay servers.",
    image: "/products/bc-banking.png",
    status: "COMING SOON",
  },
  {
    slug: "bc-taxi",
    name: "BC-Taxi",
    category: "Jobs",
    description:
      "A complete taxi job system with driver management, customer trips and configurable fares.",
    image: "/products/bc-taxi.png",
    status: "COMING SOON",
  },
  {
    slug: "bc-adminmenu",
    name: "BC-AdminMenu",
    category: "Administration",
    description:
      "A powerful administration menu designed for managing your FiveM roleplay server.",
    image: "/products/bc-adminmenu.png",
    status: "COMING SOON",
  },
];

export default function ProductsPage() {
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

      <section className="products-hero">
        <div className="section-container">
          <span className="eyebrow">
            BC CUSTOM SCRIPTS STORE
          </span>

          <h1>
            Premium scripts.
            <br />
            <span>Built for FiveM.</span>
          </h1>

          <p>
            Explore the BC Custom Scripts ecosystem
            and bring professional tools to your
            roleplay server.
          </p>
        </div>
      </section>

      {/* PRODUCTS */}

      <section className="section">
        <div className="section-container">
          <div className="products">
            {products.map((product) => (
              <article
                className="product"
                key={product.slug}
              >
                {/* PRODUCT IMAGE */}

                <div className="product-image-wrapper">
                  <img
                    src={product.image}
                    alt={`${product.name} preview`}
                    className="product-card-image"
                  />
                </div>

                {/* PRODUCT INFO */}

                <div className="product-top">
                  <span className="category">
                    {product.category}
                  </span>

                  <span className="status">
                    {product.status}
                  </span>
                </div>

                <h3>{product.name}</h3>

                <p>{product.description}</p>

                {/* PRODUCT BUTTON */}

                <div className="product-bottom">
                  <span>
                    Premium Resource
                  </span>

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
              <strong>BC CUSTOM</strong>
              <small>SCRIPTS</small>
            </span>
          </Link>

          <p>
            © {new Date().getFullYear()} BC
            Custom Scripts. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}