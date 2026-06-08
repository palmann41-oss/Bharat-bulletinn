export default function BharatBulletin() {
  return (
    <div>
      {/* Header */}
      <header style={{ padding: '20px', borderBottom: '1px solid #ccc' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', maxWidth: '1200px', margin: '0 auto' }}>
          <h1>Bharat Bulletin</h1>
          <div>
            <a href="https://www.facebook.com/share/1SdiZiAL4J/?mibextid=wwXIfr" target="_blank">📘 Facebook</a>
            <a href="#mobile-app" style={{ marginLeft: '20px' }}>📱 App</a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <div style={{ background: '#dc2626', color: 'white', padding: '60px 20px', textAlign: 'center' }}>
        <h2>Bharat Bulletin</h2>
        <p>Real-time Hindi News • Updated every 30 seconds</p>
      </div>

      {/* News Section */}
      <div style={{ maxWidth: '1200px', margin: '40px auto', padding: '0 20px' }}>
        <h3>Latest News</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
          {[1,2,3].map(i => (
            <div key={i} style={{ border: '1px solid #ccc', padding: '20px' }}>
              <h4>News Headline {i}</h4>
              <p>This is a sample news description.</p>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile App Section */}
      <section id="mobile-app" style={{ background: '#dc2626', color: 'white', padding: '60px 20px', textAlign: 'center' }}>
        <h2>Download the Bharat Bulletin App</h2>
        <p>Real-time updates • Offline mode • Push notifications</p>
        <img 
          src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=https://expo.dev/@your-username/bharat-bulletin" 
          alt="QR Code" 
          style={{ margin: '20px 0' }}
        />
        <br />
        <a href="https://expo.dev/@your-username/bharat-bulletin" target="_blank" style={{ color: 'white' }}>📱 Download App</a>
      </section>

      <footer style={{ padding: '20px', textAlign: 'center', fontSize: '14px' }}>
        © 2026 Bharat Bulletin • Connected to Mobile App
      </footer>
    </div>
  );
}
