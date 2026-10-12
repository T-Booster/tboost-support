export default function SupportPage() {
  return (
    <div style={{
      fontFamily: 'system-ui, -apple-system, sans-serif',
      maxWidth: '800px',
      margin: '0 auto',
      padding: '40px 20px',
      lineHeight: '1.6',
      color: 'var(--text)'
    }}>

      {/* Header */}
      <header style={{ textAlign: 'center', marginBottom: '50px' }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '10px', color: 'var(--heading)' }}>
          FunFit — Support
        </h1>
        <p style={{ fontSize: '1.1rem', color: 'var(--muted)' }}>
          Your AI-powered health optimization companion
        </p>
      </header>

      {/* Contact Section */}
      <section style={{
        backgroundColor: 'var(--surface)',
        padding: '30px',
        borderRadius: '8px',
        marginBottom: '40px'
      }}>
        <h2 style={{ marginTop: 0 }}>Contact Support</h2>
        <p>
          For assistance, questions, or feedback, please email us at:
        </p>
        <p style={{ fontSize: '1.2rem', margin: '15px 0' }}>
          <a
            href="mailto:support@funfit.ai"
            style={{ color: 'var(--accent)', textDecoration: 'none' }}
          >
            support@funfit.ai
          </a>
        </p>
        <p style={{ fontSize: '0.95rem', color: 'var(--muted)' }}>
          We typically respond within 24-48 hours.
        </p>
      </section>

      {/* FAQ Section */}
      <section style={{ marginBottom: '40px' }}>
        <h2>Frequently Asked Questions</h2>

        <div style={{ marginTop: '30px' }}>
          <h3 style={{ color: 'var(--accent)' }}>What is FunFit?</h3>
          <p>
            FunFit is an iOS health optimization app featuring AI-powered food scanning,
            a personalized hormone optimization score, gamified daily challenges, global leaderboards,
            workout and sleep tracking, and an AI health chat for personalized insights.
          </p>
        </div>

        <div style={{ marginTop: '30px' }}>
          <h3 style={{ color: 'var(--accent)' }}>How does the food scanning work?</h3>
          <p>
            Simply take a photo of your meal or enter the food name. Our AI analyzes the image
            and provides detailed nutritional information including macros, calories, and a
            health optimization score.
          </p>
        </div>

        <div style={{ marginTop: '30px' }}>
          <h3 style={{ color: 'var(--accent)' }}>Is my health data private?</h3>
          <p>
            Your food photos, body scans, lab results and weight history are private — no other
            user can see them. They are stored in your account on our servers (Supabase), not in
            iCloud. When you use an AI feature, the relevant content is sent to OpenAI to produce
            your result. We do not sell your data and we never use health data for advertising.
            The <a href="/privacy" style={{ color: 'var(--accent)' }}>Privacy Policy</a> lists
            every provider and exactly what each one receives.
          </p>
        </div>

        <div style={{ marginTop: '30px' }}>
          <h3 style={{ color: 'var(--accent)' }}>Do I need a subscription?</h3>
          <p>
            FunFit requires a paid subscription for full access. You can explore the app
            with a free trial, but a subscription is needed to use all features.
          </p>
        </div>

        <div style={{ marginTop: '30px' }}>
          <h3 style={{ color: 'var(--accent)' }}>How do I cancel my subscription?</h3>
          <p>
            To cancel your subscription, open the iOS Settings app → tap your name → Subscriptions →
            select FunFit → tap &quot;Cancel Subscription&quot;. You&apos;ll retain access until the current
            billing period ends.
          </p>
        </div>
      </section>

      {/* Disclaimer */}
      <section style={{
        backgroundColor: 'var(--warn-bg)',
        padding: '20px',
        borderRadius: '8px',
        borderLeft: '4px solid var(--warn-border)',
        marginBottom: '40px'
      }}>
        <h3 style={{ marginTop: 0, color: 'var(--warn-text)' }}>Medical Disclaimer</h3>
        <p style={{ fontSize: '0.95rem', color: 'var(--warn-text)', margin: 0 }}>
          FunFit is for informational purposes only and is not a substitute for professional
          medical advice, diagnosis, or treatment. Always consult your physician before making
          any health-related decisions or starting new nutrition or fitness programs.
        </p>
      </section>

      {/* Footer */}
      <footer style={{
        textAlign: 'center',
        paddingTop: '40px',
        borderTop: '1px solid var(--rule-strong)',
        color: 'var(--muted)',
        fontSize: '0.9rem'
      }}>
        <p style={{ marginBottom: '12px' }}>
          <a href="/privacy" style={{ color: 'var(--accent)', textDecoration: 'none' }}>Privacy Policy</a>
          {'  ·  '}
          <a href="/terms" style={{ color: 'var(--accent)', textDecoration: 'none' }}>Terms of Service</a>
        </p>
        <p>&copy; 2026 INFLUOGEN LLC. All rights reserved.</p>
      </footer>
    </div>
  );
}
