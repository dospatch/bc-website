import Link from "next/link";

export default function LoginPage() {
  return (
    <main className="auth-page">
      <div className="auth-background" />

      <div className="auth-container">
        <Link href="/" className="auth-logo">
          <span className="logo-box">BC</span>
          <span>
            <strong>BC CUSTOM</strong>
            <small>SCRIPTS</small>
          </span>
        </Link>

        <div className="auth-card">
          <div className="auth-heading">
            <span className="eyebrow">CUSTOMER PORTAL</span>
            <h1>Welcome back.</h1>
            <p>
              Sign in to manage your BC Custom Scripts
              products, licenses and downloads.
            </p>
          </div>

          <form>
            <label>
              Email Address
              <input
                type="email"
                placeholder="you@example.com"
                required
              />
            </label>

            <label>
              Password
              <input
                type="password"
                placeholder="••••••••"
                required
              />
            </label>

            <div className="auth-options">
              <label className="checkbox-label">
                <input type="checkbox" />
                <span>Remember me</span>
              </label>

              <Link href="/forgot-password">
                Forgot password?
              </Link>
            </div>

            <button type="submit" className="auth-button">
              Sign In
            </button>
          </form>

          <div className="auth-divider">
            <span>OR</span>
          </div>

          <p className="auth-register">
            Don't have an account?
            <Link href="/register">
              Create an account
            </Link>
          </p>
        </div>

        <Link href="/products" className="auth-back">
          ← Back to Store
        </Link>
      </div>
    </main>
  );
}
