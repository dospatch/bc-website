import Link from "next/link";

const products = [
  {
    name: "BC-MDT",
    description: "Mobile Data Terminal",
    version: "1.0.0",
    status: "ACTIVE",
  },
  {
    name: "BC-Dispatch",
    description: "Emergency Dispatch System",
    version: "1.0.0",
    status: "ACTIVE",
  },
];

export default function DashboardPage() {
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
            <Link href="/dashboard">Dashboard</Link>
            <Link href="/products">Store</Link>
            <Link href="/#support">Support</Link>
          </nav>

          <Link href="/login" className="nav-button">
            Sign Out
          </Link>
        </div>
      </header>

      <section className="dashboard-page">
        <div className="section-container">
          <div className="dashboard-header">
            <div>
              <span className="eyebrow">
                CUSTOMER PORTAL
              </span>

              <h1>
                Welcome back,
                <span> Customer.</span>
              </h1>

              <p>
                Manage your BC Custom Scripts products,
                licenses and downloads.
              </p>
            </div>

            <Link
              href="/products"
              className="primary-button"
            >
              Browse Store
            </Link>
          </div>

          <div className="dashboard-stats">
            <div>
              <span>PRODUCTS</span>
              <strong>2</strong>
            </div>

            <div>
              <span>ACTIVE LICENSES</span>
              <strong>2</strong>
            </div>

            <div>
              <span>ORDERS</span>
              <strong>2</strong>
            </div>

            <div>
              <span>ACCOUNT</span>
              <strong>ACTIVE</strong>
            </div>
          </div>

          <div className="dashboard-section-heading">
            <div>
              <span className="eyebrow">
                YOUR PRODUCTS
              </span>

              <h2>
                Purchased <span>Products</span>
              </h2>
            </div>
          </div>

          <div className="customer-products">
            {products.map((product) => (
              <article
                className="customer-product"
                key={product.name}
              >
                <div className="customer-product-icon">
                  BC
                </div>

                <div className="customer-product-info">
                  <span>{product.status}</span>

                  <h3>{product.name}</h3>

                  <p>{product.description}</p>

                  <small>
                    Version {product.version}
                  </small>
                </div>

                <div className="customer-product-actions">
                  <button>
                    Download
                  </button>

                  <button>
                    License
                  </button>

                  <Link
                    href={`/products/${product.name
                      .toLowerCase()
                      .replace("bc-", "bc-")}`}
                  >
                    Product
                  </Link>
                </div>
              </article>
            ))}
          </div>

          <div className="dashboard-bottom-grid">
            <div className="dashboard-panel">
              <div className="panel-heading">
                <div>
                  <span className="eyebrow">
                    LICENSES
                  </span>

                  <h3>License Keys</h3>
                </div>
              </div>

              <div className="license-row">
                <div>
                  <strong>BC-MDT</strong>
                  <span>
                    BCMDT-XXXX-XXXX-XXXX
                  </span>
                </div>

                <b>ACTIVE</b>
              </div>

              <div className="license-row">
                <div>
                  <strong>BC-Dispatch</strong>
                  <span>
                    BCDIS-XXXX-XXXX-XXXX
                  </span>
                </div>

                <b>ACTIVE</b>
              </div>
            </div>

            <div className="dashboard-panel">
              <div className="panel-heading">
                <div>
                  <span className="eyebrow">
                    SUPPORT
                  </span>

                  <h3>Need Help?</h3>
                </div>
              </div>

              <p>
                Have an issue with one of your BC Custom
                Scripts products?
              </p>

              <Link href="/#support">
                Contact Support →
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
