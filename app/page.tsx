import Link from "next/link";

const products = [
  {
    name: "BC-MDT",
    category: "Law Enforcement",
    description:
      "A modern Mobile Data Terminal built for serious FiveM roleplay communities.",
    status: "Coming Soon",
  },
  {
    name: "BC-Dispatch",
    category: "Communications",
    description:
      "A powerful dispatch system for police, fire, EMS and communications teams.",
    status: "Coming Soon",
  },
  {
    name: "BC-DOJ",
    category: "Justice",
    description:
      "Justice-system tools for cases, warrants, citations and court workflows.",
    status: "Coming Soon",
  },
  {
    name: "BC-Scoreboard",
    category: "Core",
    description:
      "A clean and configurable FiveM scoreboard for players and departments.",
    status: "Coming Soon",
  },
  {
    name: "BC-Banking",
    category: "Economy",
    description:
      "Modern banking and financial tools designed for FiveM roleplay servers.",
    status: "Coming Soon",
  },
  {
    name: "BC-Taxi",
    category: "Jobs",
    description:
      "A complete taxi job experience with driver, customer and trip management.",
    status: "Coming Soon",
  },
];

export default function Home() {
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
            <Link href="#products">Products</Link>
            <Link href="#integrations">Integrations</Link>
            <Link href="#about">About</Link>
            <Link href="#support">Support</Link>
          </nav>

          <Link href="#products" className="nav-button">
            Store
          </Link>
        </div>
      </header>

      <section className="hero">
        <div className="hero-glow" />

        <div className="hero-container">
          <div className="hero-content">
            <div className="announcement">
              <span className="pulse" />
              BC Custom Scripts
            </div>

            <h1>
              Scripts built for
              <br />
              <span>better roleplay.</span>
            </h1>

            <p>
              Premium FiveM scripts and integrations designed to
              help your server run better, look better and scale
              with your community.
            </p>

            <div className="hero-actions">
              <Link href="#products" className="button primary">
                Explore Products →
              </Link>

              <a
                href="https://discord.com/"
                target="_blank"
                rel="noreferrer"
                className="button secondary"
              >
                Join Discord
              </a>
            </div>

            <div className="compatibility">
              <span>✓ FiveM</span>
              <span>✓ QBCore</span>
              <span>✓ ESX</span>
              <span>✓ Sonoran CAD</span>
            </div>
          </div>

          <div className="terminal">
            <div className="terminal-header">
              <div>
                <i />
                <i />
                <i />
              </div>

              <span>bc-custom-scripts</span>
            </div>

            <div className="terminal-body">
              <p>
                <b>$</b> bc start
              </p>

              <p className="green">
                ✓ BC Custom Scripts initialized
              </p>

              <p className="gray">
                → Loading product ecosystem...
              </p>

              <p className="gray">
                → BC-MDT module
              </p>

              <p className="gray">
                → BC-Dispatch module
              </p>

              <p className="gray">
                → Sonoran CAD integration
              </p>

              <hr />

              <p>
                <b>BC</b> Ready for your server.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="stats">
        <div>
          <strong>FiveM</strong>
          <span>Platform</span>
        </div>

        <div>
          <strong>QBCore</strong>
          <span>Framework</span>
        </div>

        <div>
          <strong>ESX</strong>
          <span>Framework</span>
        </div>

        <div>
          <strong>API</strong>
          <span>Integration Ready</span>
        </div>
      </section>

      <section id="products" className="section">
        <div className="section-container">
          <div className="section-heading">
            <div>
              <span className="eyebrow">THE STORE</span>

              <h2>BC Custom Scripts</h2>

              <p>
                Explore the growing collection of BC resources.
              </p>
            </div>
          </div>

          <div className="products">
            {products.map((product) => (
              <article className="product" key={product.name}>
                <div className="product-top">
                  <div className="product-icon">BC</div>

                  <span className="status">
                    {product.status}
                  </span>
                </div>

                <span className="category">
                  {product.category}
                </span>

                <h3>{product.name}</h3>

                <p>{product.description}</p>

                <div className="product-bottom">
                  <span>Coming Soon</span>

                  <Link href={`/products/${product.name.toLowerCase()}`}>
                    View Product →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="integrations" className="section integrations">
        <div className="section-container">
          <div className="center-heading">
            <span className="eyebrow">INTEGRATIONS</span>

            <h2>Built for your server.</h2>

            <p>
              BC Custom Scripts is designed around the tools
              your FiveM community already uses.
            </p>
          </div>

          <div className="integration-grid">
            {[
              ["QB", "QBCore", "Framework"],
              ["ES", "ESX", "Framework"],
              ["SC", "Sonoran CAD", "CAD"],
              ["OX", "oxmysql", "Database"],
              ["OL", "ox_lib", "Library"],
              ["FM", "FiveM", "Platform"],
            ].map(([icon, name, type]) => (
              <div className="integration" key={name}>
                <span>{icon}</span>

                <div>
                  <strong>{name}</strong>
                  <small>{type}</small>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="section">
        <div className="section-container about">
          <div>
            <span className="eyebrow">
              BC CUSTOM SCRIPTS
            </span>

            <h2>
              More than scripts.
              <br />
              An ecosystem.
            </h2>

            <p>
              BC Custom Scripts is being built as a connected
              ecosystem of FiveM resources. Every product is
              designed with compatibility, performance and
              future integrations in mind.
            </p>
          </div>

          <div className="feature-box">
            <div>
              <strong>01</strong>
              <span>Modern UI</span>
            </div>

            <div>
              <strong>02</strong>
              <span>Expandable</span>
            </div>

            <div>
              <strong>03</strong>
              <span>Developer Friendly</span>
            </div>

            <div>
              <strong>04</strong>
              <span>Roleplay Ready</span>
            </div>
          </div>
        </div>
      </section>

      <section id="support" className="cta">
        <div className="section-container">
          <span className="eyebrow">READY?</span>

          <h2>Build your server with BC.</h2>

          <p>
            New products, integrations and resources are
            coming to BC Custom Scripts.
          </p>

          <Link href="#products" className="button primary">
            Explore the Store →
          </Link>
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