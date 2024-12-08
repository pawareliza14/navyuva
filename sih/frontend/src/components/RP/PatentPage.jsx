import React from 'react';
import './PatentPage.css';
import { Bar, Pie, Line, Scatter } from 'react-chartjs-2';
import { FaSearch, FaCalendarAlt } from 'react-icons/fa';
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, LineElement, CategoryScale, LinearScale, ArcElement, PointElement } from 'chart.js';

ChartJS.register(Title, Tooltip, Legend, BarElement, LineElement, CategoryScale, LinearScale, ArcElement, PointElement);

const PatentPage = () => {
  const patents = [
    { title: 'Smart Textile Innovations', number: 'IN1234567', filingDate: '01/15/2021', grantDate: '05/22/2022', status: 'Granted', region: 'Ahmedabad', researchArea: 'Textiles', citations: 10 },
    { title: 'AI for Pharmaceuticals', number: 'IN2345678', filingDate: '03/20/2020', grantDate: '10/12/2021', status: 'Granted', region: 'Vadodara', researchArea: 'AI', citations: 15 },
    { title: 'Renewable Energy Storage', number: 'IN3456789', filingDate: '06/12/2022', status: 'Pending', region: 'Surat', researchArea: 'Renewable Energy', citations: 8 },
    // Add more entries as needed
  ];

  const patentsByRegionData = {
    labels: ['Ahmedabad', 'Vadodara', 'Surat', 'Rajkot', 'Gandhinagar'],
    datasets: [
      {
        label: 'Patents Filed',
        data: [12, 9, 7, 3, 5],
        backgroundColor: ['#4caf50', '#2196f3', '#ff9800', '#e91e63', '#9c27b0'],
      },
    ],
  };

  const patentsByCategoryData = {
    labels: ['Textiles', 'AI', 'Renewable Energy', 'Pharmaceuticals', 'Engineering'],
    datasets: [
      {
        label: 'Research Categories',
        data: [20, 18, 12, 25, 15],
        backgroundColor: ['#4c6ef5', '#72c2f1', '#e1a3f3', '#f54291', '#42f57b'],
      },
    ],
  };

  const filingToGrantTimelineData = {
    labels: ['2018', '2019', '2020', '2021', '2022'],
    datasets: [
      {
        label: 'Average Filing-to-Grant Time (months)',
        data: [24, 22, 20, 18, 15],
        borderColor: '#ff9800',
        backgroundColor: 'rgba(255, 152, 0, 0.3)',
      },
    ],
  };

  const patentImpactData = {
    datasets: [
      {
        label: 'Patent Impact (Citations vs. Filing Year)',
        data: [
          { x: 2018, y: 15 },
          { x: 2019, y: 18 },
          { x: 2020, y: 10 },
          { x: 2021, y: 20 },
          { x: 2022, y: 8 },
        ],
        backgroundColor: '#4caf50',
      },
    ],
  };

  return (
    <div className="patent-page">
      <h1>IPR Trends</h1>

      {/* Filters Section */}
      <div className="filters">
        <div className="search-bar">
          <label htmlFor="search">Search Patents</label>
          <div className="input-container">
            <FaSearch className="icon" />
            <input id="search" type="text" placeholder="Search by keyword..." />
          </div>
        </div>
        <div className="filter">
          <label htmlFor="date">Select Date</label>
          <div className="input-container">
            <FaCalendarAlt className="icon" />
            <input id="date" type="date" />
          </div>
        </div>
      </div>

      {/* Visualizations Section */}
      <div className="visualizations">
        {/* <div className="chart">
          <h3>Patents by Region</h3>
          <Bar data={patentsByRegionData} />
        </div> */}
        <div className="chart">
          <h3>Patents by Research Area</h3>
          <Pie data={patentsByCategoryData} />
        </div>
        <div className="chart">
          <h3>Average Filing-to-Grant Time</h3>
          <Line data={filingToGrantTimelineData} />
        </div>
        <div className="chart">
          <h3>Patent Impact: Citations vs. Filing Year</h3>
          <Scatter data={patentImpactData} />
        </div>
      </div>

      {/* Patent List */}
      <div className="patent-list">
        <h3>Patent Details</h3>
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Patent Number</th>
              <th>Filing Date</th>
              <th>Grant Date</th>
              <th>Status</th>
              <th>Region</th>
              <th>Research Area</th>
              <th>Citations</th>
            </tr>
          </thead>
          <tbody>
            {patents.map((patent, index) => (
              <tr key={index}>
                <td>{patent.title}</td>
                <td>{patent.number}</td>
                <td>{patent.filingDate}</td>
                <td>{patent.grantDate || 'N/A'}</td>
                <td>{patent.status}</td>
                <td>{patent.region}</td>
                <td>{patent.researchArea}</td>
                <td>{patent.citations}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PatentPage;
