import React from 'react';
import './PatentPage.css';
import { Bar, Pie } from 'react-chartjs-2'; // Chart.js for visualizations
import { FaSearch, FaCalendarAlt } from 'react-icons/fa'; // Import icons
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale, ArcElement } from 'chart.js';

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale, ArcElement);

const PatentPage = () => {
  const patents = [
    { title: 'AI for Healthcare', number: 'US1234567', filingDate: '01/15/2021', grantDate: '05/22/2022', status: 'Granted', researchArea: 'AI', abstract: 'An AI solution for healthcare diagnostics.' },
    { title: 'Renewable Energy Storage', number: 'US2345678', filingDate: '03/20/2020', grantDate: '10/12/2021', status: 'Granted', researchArea: 'Renewable Energy', abstract: 'A new method for efficient energy storage.' },
    { title: 'Biotech Genomics', number: 'US3456789', filingDate: '06/12/2022', status: 'Pending', researchArea: 'Biotechnology', abstract: 'Genomic advancements for disease prediction.' },
  ];

  const patentYearData = {
    labels: ['2020', '2021', '2022'],
    datasets: [
      {
        label: 'Patents Filed',
        data: [1, 2, 1],
        backgroundColor: '#2e1e77',
      },
    ],
  };

  const patentCategoryData = {
    labels: ['AI', 'Renewable Energy', 'Biotechnology'],
    datasets: [
      {
        label: 'Patent Categories',
        data: [1, 1, 1],
        backgroundColor: ['#4c6ef5', '#72c2f1', '#e1a3f3'],
      },
    ],
  };

  return (
    <div className="patent-page">
      <h1>Patents of XYZ Research Project</h1>

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
        <div className="chart">
          <h3>Patents by Year</h3>
          <Bar data={patentYearData} />
        </div>
        <div className="chart">
          <h3>Patents by Category</h3>
          <Pie data={patentCategoryData} />
        </div>
      </div>

      {/* Patent List */}
      <div className="patent-list">
        <h3>Patent List</h3>
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Patent Number</th>
              <th>Filing Date</th>
              <th>Grant Date</th>
              <th>Status</th>
              <th>Research Area</th>
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
                <td>{patent.researchArea}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PatentPage;
