import React, { useEffect, useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
import API from '../api'; // Axios instance

export default function Reports() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch the reports chart data
    API.get('/api/reports-data')
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
      <h1 style={pageTitle}>Reports: Ocean Energy Cost Trends</h1>

      {/* Chart Section */}
      <div style={cardStyle}>
        <h2 style={sectionTitle}>Monthly Cost Reduction in Ocean Energy Technology</h2>

        {/* Chart */}
        <div style={chartContainer}>
          <LineChart width={600} height={300} data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="costReduction" stroke="#00c6ff" strokeWidth={3} />
          </LineChart>
        </div>

        {/* Explanation */}
        <p style={paragraphText}>
          This line chart illustrates the monthly trend of cost reduction in ocean energy technologies. 
          As manufacturing processes improve and testing barriers are overcome, ocean energy is expected to become 
          increasingly affordable, supporting its broader adoption and integration into clean energy grids.
        </p>
      </div>
    </div>
  );
}

// --- Stylish inline styles ---
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
