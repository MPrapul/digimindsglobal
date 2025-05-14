export default function BasicPage() {
  return (
    <div style={{ padding: '2rem' }}>
      <h1 style={{ color: '#1E4799' }}>DigiMindsGlobal Basic Page</h1>
      <p>This is a pure JavaScript page with no TypeScript or CSS dependencies.</p>
      <a href="/" style={{ 
        display: 'inline-block', 
        marginTop: '1rem', 
        padding: '0.5rem 1rem', 
        backgroundColor: '#1E4799', 
        color: 'white', 
        textDecoration: 'none', 
        borderRadius: '0.25rem' 
      }}>
        Back to Home
      </a>
    </div>
  )
} 