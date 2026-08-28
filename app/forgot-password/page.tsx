import Link from "next/link";

export default function ForgotPasswordPage() {
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
            <span className="eyebrow">ACCOUNT RECOVERY</span>

            <h1>Forgot password?</h1>

            <p>
              Enter the email address associated with your
              account and we'll send you a password reset
              link.
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

            <button type="submit" className="auth-button">
              Send Reset Link
            </button>
          </form>

          <p className="auth-register">
            Remember your password?
            <Link href="/login">
              Back to Sign In
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
