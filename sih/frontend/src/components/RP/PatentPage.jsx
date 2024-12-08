import React from 'react';
import './EvaluationMetricsPage.css';
import { Bar, Line, Scatter } from 'react-chartjs-2';
import { FaSearch, FaCalendarAlt } from 'react-icons/fa';
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, LineElement, CategoryScale, LinearScale, ArcElement, PointElement } from 'chart.js';

ChartJS.register(Title, Tooltip, Legend, BarElement, LineElement, CategoryScale, LinearScale, ArcElement, PointElement);

const EvaluationMetricsPage = () => {
  const patents = [
    { title: 'Smart Textile Innovations', number: 'IN1234567', filingDate: '01/15/2021', grantDate: '05/22/2022', status: 'Granted', researchArea: 'Textiles', citations: 10 },
    { title: 'AI for Pharmaceuticals', number: 'IN2345678', filingDate: '03/20/2020', grantDate: '10/12/2021', status: 'Granted', researchArea: 'AI', citations: 15 },
    { title: 'Renewable Energy Storage', number: 'IN3456789', filingDate: '06/12/2022', status: 'Pending', researchArea: 'Renewable Energy', citations: 8 },
    // Add more entries as needed
  ];

  const publications = [
    { title: 'AI for Healthcare Innovations', authors: 'Dr. Smith, Dr. Lee', year: '2024', project: 'AI in Healthcare' },
    { title: 'Advancements in Renewable Energy', authors: 'Dr. Patel, Dr. Kumar', year: '2023', project: 'Energy Research' },
    { title: 'Smart Textiles for Sustainability', authors: 'Dr. Gupta, Dr. Sharma', year: '2023', project: 'Textile Engineering' },
    // Add more publications as needed
  ];

  const studentInvolvementData = {
    labels: ['2020', '2021', '2022', '2023', '2024'],
    datasets: [
      {
        label: 'Students Involved',
        data: [15, 30, 45, 60, 75],
        backgroundColor: '#4caf50',
      },
    ],
  };

  const publicationsByYearData = {
    labels: ['2020', '2021', '2022', '2023', '2024'],
    datasets: [
      {
        label: 'Publications by Year',
        data: [3, 5, 10, 7, 4],
        backgroundColor: '#72c2f1',
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

  const ipDisputeData = [
    {
      disputeTitle: 'Patent Infringement by Tech Innovators',
      patentNumber: 'IN1234567',
      disputeType: 'Infringement',
      status: 'Ongoing',
      disputeDate: '03/20/2023',
      resolutionDate: 'N/A',
      region: 'North America',
      partiesInvolved: 'Tech Innovators vs Innovate Co.',
    },
    {
      disputeTitle: 'AI Research Patent Dispute',
      patentNumber: 'IN2345678',
      disputeType: 'Ownership',
      status: 'Resolved',
      disputeDate: '07/15/2022',
      resolutionDate: '11/10/2022',
      region: 'Europe',
      partiesInvolved: 'AI Research Labs vs Smart Tech Inc.',
    },
    // Add more dispute entries as needed
  ];

  return (
    <div className="patent-page">
      <h1>Evaluation Metrics</h1>

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
        <div className="chart-block">
          <h3 className="chart-title">Student Involvement by Year</h3>
          <Bar data={studentInvolvementData} />
        </div>
        <div className="chart-block">
          <h3 className="chart-title">Publications by Year</h3>
          <Bar data={publicationsByYearData} />
        </div>
        <div className="chart-block">
          <h3 className="chart-title">Average Filing-to-Grant Time</h3>
          <Line data={filingToGrantTimelineData} />
        </div>
        <div className="chart-block">
          <h3 className="chart-title">Patent Impact: Citations vs. Filing Year</h3>
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
                <td>{patent.researchArea}</td>
                <td>{patent.citations}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Latest Publications */}
      <div className="latest-publications">
        <h3>Latest Publications</h3>
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Authors</th>
              <th>Year</th>
              <th>Project</th>
            </tr>
          </thead>
          <tbody>
            {publications.map((publication, index) => (
              <tr key={index}>
                <td>{publication.title}</td>
                <td>{publication.authors}</td>
                <td>{publication.year}</td>
                <td>{publication.project}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* IP Dispute Section */}
      <div className="ip-dispute-section">
        <h3>IP Disputes</h3>
        <table>
          <thead>
            <tr>
              <th>Dispute Title</th>
              <th>Patent Number</th>
              <th>Dispute Type</th>
              <th>Status</th>
              <th>Dispute Date</th>
              <th>Resolution Date</th>
              <th>Region</th>
              <th>Parties Involved</th>
            </tr>
          </thead>
          <tbody>
            {ipDisputeData.map((dispute, index) => (
              <tr key={index}>
                <td>{dispute.disputeTitle}</td>
                <td>{dispute.patentNumber}</td>
                <td>{dispute.disputeType}</td>
                <td>{dispute.status}</td>
                <td>{dispute.disputeDate}</td>
                <td>{dispute.resolutionDate || 'N/A'}</td>
                <td>{dispute.region}</td>
                <td>{dispute.partiesInvolved}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EvaluationMetricsPage;
