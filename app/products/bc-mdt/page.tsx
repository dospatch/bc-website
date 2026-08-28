import Link from "next/link";

export default function BCMdtPage() {
  return (
    <main>
      <header className="navbar">
        <div className="nav-container">
          <Link href="/" className="logo">
            <img src="/mdt.png" alt="BC Logo" />
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
              <div className="large-product-icon">BC</div>

              <span className="eyebrow">
                LAW ENFORCEMENT • FIVE M
              </span>

              <h1>
                BC-MDT
                <span>Mobile Data Terminal</span>
              </h1>

              <p className="product-lead">
                A modern, professional Mobile Data Terminal designed
                for FiveM roleplay communities. Give your law
                enforcement departments the tools they need to manage
                people, vehicles, reports, warrants and more.
              </p>

              <div className="product-actions">
                <a
                  href="#purchase"
                  className="primary-button"
                >
                  Buy BC-MDT
                </a>

                <a
                  href="#features"
                  className="secondary-button"
                >
                  Explore Features
                </a>
              </div>

              <div className="product-meta">
                <div>
                  <strong>QBCore</strong>
                  <span>Supported</span>
                </div>

                <div>
                  <strong>ESX</strong>
                  <span>Supported</span>
                </div>

                <div>
                  <strong>Sonoran</strong>
                  <span>Integration</span>
                </div>
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
                    <div className="preview-logo">BC</div>
                    <div />
                    <div />
                    <div />
                    <div />
                    <div />
                  </div>

                  <div className="preview-main">
                    <div className="preview-heading">
                      <div>
                        <small>BC-MDT</small>
                        <strong>Mobile Data Terminal</strong>
                      </div>

                      <div className="preview-status">
                        ONLINE
                      </div>
                    </div>

                    <div className="preview-cards">
                      <div>
                        <small>ACTIVE UNITS</small>
                        <strong>24</strong>
                      </div>

                      <div>
                        <small>OPEN CALLS</small>
                        <strong>08</strong>
                      </div>

                      <div>
                        <small>WARRANTS</small>
                        <strong>12</strong>
                      </div>
                    </div>

                    <div className="preview-panel">
                      <small>RECENT ACTIVITY</small>

                      <div className="preview-row">
                        <span>Traffic Stop</span>
                        <span>10-50</span>
                      </div>

                      <div className="preview-row">
                        <span>BOLO Created</span>
                        <span>BOLO</span>
                      </div>

                      <div className="preview-row">
                        <span>Unit Dispatched</span>
                        <span>ACTIVE</span>
                      </div>

                      <div className="preview-row">
                        <span>Report Submitted</span>
                        <span>REPORT</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="preview-glow" />
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="section product-section">
        <div className="section-container">
          <div className="section-heading">
            <span className="eyebrow">POWERFUL TOOLS</span>

            <h2>
              Everything your
              <span> department needs.</span>
            </h2>

            <p>
              BC-MDT brings the most important law enforcement
              systems together in one clean interface.
            </p>
          </div>

          <div className="feature-grid">
            <Feature
              icon="◉"
              title="Character Database"
              text="Search and manage detailed character records, identities, licenses and department information."
            />

            <Feature
              icon="▣"
              title="Vehicle Database"
              text="Look up vehicles, registrations, plates and ownership information quickly."
            />

            <Feature
              icon="!"
              title="Warrants"
              text="Create, search and manage active warrants from the MDT."
            />

            <Feature
              icon="⌖"
              title="BOLO System"
              text="Create and manage Be-On-the-Lookout alerts for people and vehicles."
            />

            <Feature
              icon="◆"
              title="Mugshots"
              text="Store and display mugshot information alongside character records."
            />

            <Feature
              icon="▤"
              title="Reports"
              text="Create professional incident and arrest reports directly through the MDT."
            />

            <Feature
              icon="§"
              title="Citations"
              text="Create citations and maintain enforcement records for your department."
            />

            <Feature
              icon="⌁"
              title="Dispatch Calls"
              text="Connect MDT functionality with your server's dispatch and communications systems."
            />

            <Feature
              icon="⌕"
              title="NCIC-Style Search"
              text="Quickly search people, vehicles, warrants, BOLOs and records."
            />
          </div>
        </div>
      </section>

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
            <div className="compatibility-card">
              <strong>QBCore</strong>
              <span>Framework Support</span>
              <b>SUPPORTED</b>
            </div>

            <div className="compatibility-card">
              <strong>ESX</strong>
              <span>Framework Support</span>
              <b>SUPPORTED</b>
            </div>

            <div className="compatibility-card">
              <strong>Sonoran CAD</strong>
              <span>CAD Integration</span>
              <b>INTEGRATION</b>
            </div>

            <div className="compatibility-card">
              <strong>oxmysql</strong>
              <span>Database</span>
              <b>SUPPORTED</b>
            </div>
          </div>
        </div>
      </section>

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
                BC-MDT is designed to fit into an existing FiveM
                server without unnecessary complexity.
              </p>
            </div>

            <div className="requirements-card">
              <div>
                <span>01</span>
                <strong>FiveM Server</strong>
                <p>A running FiveM server environment.</p>
              </div>

              <div>
                <span>02</span>
                <strong>Database</strong>
                <p>MySQL-compatible database support.</p>
              </div>

              <div>
                <span>03</span>
                <strong>Framework</strong>
                <p>QBCore or ESX depending on configuration.</p>
              </div>

              <div>
                <span>04</span>
                <strong>Dependencies</strong>
                <p>Required dependencies will be listed with your purchase.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="purchase" className="purchase-section">
        <div className="section-container">
          <div className="purchase-card">
            <div>
              <span className="eyebrow">BC CUSTOM SCRIPTS</span>

              <h2>
                BC-MDT
              </h2>

              <p>
                Professional MDT tools for your FiveM roleplay
                community.
              </p>
            </div>

            <div className="purchase-price">
              <small>PRICE</small>
              <strong>Coming Soon</strong>
            </div>

            <div className="purchase-actions">
              <button disabled>
                Coming Soon
              </button>

              <Link href="/products">
                View All Products
              </Link>
            </div>
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

function Feature({
  icon,
  title,
  text,
}: {
  icon: string;
  title: string;
  text: string;
}) {
  return (
    <article className="feature-card">
      <div className="feature-icon">{icon}</div>

      <h3>{title}</h3>

      <p>{text}</p>
    </article>
  );
}
