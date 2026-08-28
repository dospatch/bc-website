import Link from "next/link";

export default function RegisterPage() {
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
            <h1>Create account.</h1>
            <p>
              Create your BC Custom Scripts customer
              account to manage your products and licenses.
            </p>
          </div>

          <form>
            <div className="auth-two-column">
              <label>
                First Name
                <input
                  type="text"
                  placeholder="First name"
                  required
                />
              </label>

              <label>
                Last Name
                <input
                  type="text"
                  placeholder="Last name"
                  required
                />
              </label>
            </div>

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
                placeholder="Create a password"
                required
              />
            </label>

            <label>
              Confirm Password
              <input
                type="password"
                placeholder="Confirm your password"
                required
              />
            </label>

            <label className="checkbox-label terms">
              <input type="checkbox" required />
              <span>
                I agree to the Terms of Service and Privacy
                Policy.
              </span>
            </label>

            <button type="submit" className="auth-button">
              Create Account
            </button>
          </form>

          <p className="auth-register">
            Already have an account?
            <Link href="/login">
              Sign in
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
