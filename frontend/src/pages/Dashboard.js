import React from 'react';

export default function Dashboard() {
  return (
    <div style={containerStyle}>
      {/* Welcome Section */}
      <div style={welcomeCard}>
        <h1 style={welcomeTitle}>Welcome to F71 - Clean Energy Innovations</h1>
        <p style={taglineText}>Discover the future of renewable energy technologies</p>
      </div>

      {/* Summary of Innovation */}
      <div style={summaryCard}>
        <h2 style={sectionTitle}>Summary of Innovation</h2>
        <p style={paragraphText}>
          Ocean energy technologies, including wave and tidal systems, have reached a critical stage in their development. 
          Researchers at the National Renewable Energy Laboratory (NREL) highlight that while prototypes have shown promising results, 
          significant challenges remain before full commercial deployment. Testing and validation infrastructure are key barriers slowing progress, 
          as many devices must endure harsh ocean environments for years before being considered reliable. Despite these hurdles, the potential is massive: 
          wave and tidal energy could provide clean, predictable, renewable power to coastal regions globally. Strategic investments in robust testing programs 
          and facilities are essential to accelerate certification efforts. Ocean energy could play a critical role in diversifying the renewable energy mix, 
          helping to meet climate goals.
        </p>
        <p style={sourceText}>
          Source: <a href="https://www.nrel.gov/news/features/2025/ocean-energy-is-almost-ready-but-it-needs-a-boost-over-the-testing-barrier.html" 
          target="_blank" rel="noopener noreferrer" style={linkStyle}>NREL News</a>
        </p>
      </div>

      {/* Technical Overview */}
      <div style={techOverviewCard}>
        <h2 style={sectionTitle}>Technical Overview</h2>
        <p style={paragraphText}>
          This application uses <strong>React</strong> for the frontend and <strong>Node.js</strong> for the backend, with <strong>MySQL</strong> for the database. 
          JWT tokens are utilized for secure user authentication. The application is hosted using <strong>NGINX</strong> for frontend delivery 
          and the backend APIs operate independently on port 3000, and the frontend is running on default port 80. The project emphasizes full decoupling between frontend and backend, enabling 
          a modern Single Page Application (SPA) architecture.
        </p>
      </div>
    </div>
  );
}

// --- Stylish Inline CSS ---
const containerStyle = {
  padding: '30px',
  maxWidth: '1000px',
  margin: '0 auto',
  fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  backgroundColor: '#f9fafc',
};

const welcomeCard = {
  background: 'linear-gradient(to right, #4facfe, #00f2fe)',
  color: '#fff',
  padding: '40px 20px',
  borderRadius: '15px',
  marginBottom: '30px',
  textAlign: 'center',
  boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.1)',
};

const welcomeTitle = {
  fontSize: '32px',
  margin: '0 0 10px 0',
};

const taglineText = {
  fontSize: '18px',
  margin: '0',
};

const sectionTitle = {
  fontSize: '26px',
  color: '#333',
  marginBottom: '15px',
};

const summaryCard = {
  backgroundColor: '#ffffff',
  padding: '30px',
  borderRadius: '12px',
  marginBottom: '25px',
  boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.08)',
};

const techOverviewCard = {
  backgroundColor: '#e9f5ff',
  padding: '30px',
  borderRadius: '12px',
  boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.08)',
};

const paragraphText = {
  lineHeight: '1.7',
  fontSize: '17px',
  color: '#555',
};

const sourceText = {
  marginTop: '20px',
  fontStyle: 'italic',
  fontSize: '15px',
};

const linkStyle = {
  color: '#0066cc',
  textDecoration: 'underline',
};
