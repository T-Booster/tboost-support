export default function SupportPage() {
  return (
    <div style={{
      fontFamily: 'system-ui, -apple-system, sans-serif',
      maxWidth: '800px',
      margin: '0 auto',
      padding: '40px 20px',
      lineHeight: '1.6',
      color: '#333'
    }}>

      {/* Header */}
      <header style={{ textAlign: 'center', marginBottom: '50px' }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '10px', color: '#1a1a1a' }}>
          MAXI AI — Support
        </h1>
        <p style={{ fontSize: '1.1rem', color: '#666' }}>
          Your AI-powered health optimization companion
        </p>
      </header>

      {/* Contact Section */}
      <section style={{
        backgroundColor: '#f5f5f5',
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
            href="mailto:maxiai@influogen.com"
            style={{ color: '#0066cc', textDecoration: 'none' }}
          >
            maxiai@influogen.com
          </a>
        </p>
        <p style={{ fontSize: '0.95rem', color: '#666' }}>
          We typically respond within 24-48 hours.
        </p>
      </section>

      {/* FAQ Section */}
      <section style={{ marginBottom: '40px' }}>
        <h2>Frequently Asked Questions</h2>

        <div style={{ marginTop: '30px' }}>
          <h3 style={{ color: '#0066cc' }}>What is MAXI AI?</h3>
          <p>
            MAXI AI is an iOS health optimization app featuring AI-powered food scanning,
            a personalized hormone optimization score, gamified daily challenges, global leaderboards,
            workout and sleep tracking, and an AI health chat for personalized insights.
          </p>
        </div>

        <div style={{ marginTop: '30px' }}>
          <h3 style={{ color: '#0066cc' }}>How does the food scanning work?</h3>
          <p>
            Simply take a photo of your meal or enter the food name. Our AI analyzes the image
            and provides detailed nutritional information including macros, calories, and a
            health optimization score.
          </p>
        </div>

        <div style={{ marginTop: '30px' }}>
          <h3 style={{ color: '#0066cc' }}>Is my health data private?</h3>
          <p>
            Yes. Your health data is stored securely on your device and in your private iCloud account.
            We do not share your personal health information with third parties.
          </p>
        </div>

        <div style={{ marginTop: '30px' }}>
          <h3 style={{ color: '#0066cc' }}>Do I need a subscription?</h3>
          <p>
            MAXI AI requires a paid subscription for full access. You can explore the app
            with a free trial, but a subscription is needed to use all features.
          </p>
        </div>

        <div style={{ marginTop: '30px' }}>
          <h3 style={{ color: '#0066cc' }}>How do I cancel my subscription?</h3>
          <p>
            To cancel your subscription, open the iOS Settings app → tap your name → Subscriptions →
            select MAXI AI → tap &quot;Cancel Subscription&quot;. You&apos;ll retain access until the current
            billing period ends.
          </p>
        </div>
      </section>

      {/* Disclaimer */}
      <section style={{
        backgroundColor: '#fff3cd',
        padding: '20px',
        borderRadius: '8px',
        borderLeft: '4px solid #ffc107',
        marginBottom: '40px'
      }}>
        <h3 style={{ marginTop: 0, color: '#856404' }}>Medical Disclaimer</h3>
        <p style={{ fontSize: '0.95rem', color: '#856404', margin: 0 }}>
          MAXI AI is for informational purposes only and is not a substitute for professional
          medical advice, diagnosis, or treatment. Always consult your physician before making
          any health-related decisions or starting new nutrition or fitness programs.
        </p>
      </section>

      {/* Footer */}
      <footer style={{
        textAlign: 'center',
        paddingTop: '40px',
        borderTop: '1px solid #ddd',
        color: '#888',
        fontSize: '0.9rem'
      }}>
        <p>&copy; 2025 MAXI AI. All rights reserved.</p>
      </footer>
    </div>
  );
}
