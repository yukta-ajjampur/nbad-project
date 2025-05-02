import React, { useEffect, useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
import API from '../api'; // Axios instance

export default function Summary() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch the summary chart data
    API.get('/api/summary-data')
      .then(res => {
        setData(res.data);
      })
      .catch(err => {
        console.error(err);
      });
  }, []);

  return (
    <div style={containerStyle}>
      {/* Page Title */}
      <h1 style={pageTitle}>Summary: Ocean Energy Potential</h1>

      {/* Chart Section */}
      <div style={cardStyle}>
        <h2 style={sectionTitle}>Monthly Energy Production Growth</h2>

        {/* Chart */}
        <div style={chartContainer}>
          <BarChart width={600} height={300} data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="energyProduced" fill="#4facfe" />
          </BarChart>
        </div>

        {/* Explanation */}
        <p style={paragraphText}>
          This bar chart shows the estimated monthly increase in ocean energy production 
          based on recent clean energy advancements. As technology matures and testing infrastructure 
          improves, energy capture from ocean sources is expected to grow consistently.
        </p>
      </div>
    </div>
  );
}

// --- Beautiful inline styles ---
const containerStyle = {
  padding: '30px',
  maxWidth: '1000px',
  margin: '0 auto',
  fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  backgroundColor: '#f9fafc',
};

const pageTitle = {
  textAlign: 'center',
  fontSize: '32px',
  marginBottom: '30px',
  color: '#333',
};

const cardStyle = {
  backgroundColor: '#ffffff',
  padding: '30px',
  borderRadius: '12px',
  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)',
  marginBottom: '20px',
};

const sectionTitle = {
  fontSize: '24px',
  marginBottom: '20px',
  color: '#444',
  textAlign: 'center',
};

const chartContainer = {
  display: 'flex',
  justifyContent: 'center',
  marginBottom: '20px',
};

const paragraphText = {
  lineHeight: '1.7',
  fontSize: '17px',
  color: '#555',
  textAlign: 'justify',
};
