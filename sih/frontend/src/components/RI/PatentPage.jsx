import React, { useState } from 'react';
import './PatentPage.css';
import { Line, Pie } from 'react-chartjs-2';
import { FaSearch } from 'react-icons/fa';
import { Chart as ChartJS, Title, Tooltip, Legend, LineElement, CategoryScale, LinearScale, PointElement, ArcElement } from 'chart.js';

ChartJS.register(Title, Tooltip, Legend, LineElement, CategoryScale, LinearScale, PointElement, ArcElement);

const PatentPage = () => {
  // Dummy Data
  const patents = [
    {
      title: 'AI for Healthcare',
      number: 'US1234567',
      filingDate: '2021-01-15',
      grantDate: '2022-05-22',
      status: 'Granted',
      researchArea: 'AI',
      abstract: 'An AI solution for healthcare diagnostics.',
      inventors: ['Dr. Alice Smith', 'Dr. John Doe'],
      licensing: 'Non-exclusive license to MedTech Inc.',
    },
    // Additional patent entries...
  ];

  const trademarks = [
    {
      name: 'HealthAI',
      registrationNumber: 'TM123456',
      status: 'Registered',
      class: '10',
      filingDate: '2020-05-15',
      registrationDate: '2021-08-20',
      validity: '2025-12-31',
      holder: 'XYZ Research Institute',
    },
    // Additional trademark entries...
  ];

  const copyrights = [
    {
      title: 'HealthAI Codebase',
      registrationNumber: 'CR123456',
      status: 'Registered',
      type: 'Software',
      filingDate: '2020-07-10',
      registrationDate: '2021-01-05',
      validity: '2030-01-01',
      holder: 'XYZ Research Institute',
    },
    // Additional copyright entries...
  ];

  const ipDisputes = [
    {
      title: 'Patent Dispute on AI for Healthcare',
      disputeNumber: 'DS123456',
      type: 'Patent',
      description: 'Dispute over the originality of the AI algorithm.',
      status: 'Ongoing',
      filingDate: '2023-01-10',
      involvedParties: ['XYZ Research Institute', 'TechAI Corp'],
    },
    // Additional dispute entries...
  ];

  // Search State
  const [searchTerm, setSearchTerm] = useState('');
  const [activeList, setActiveList] = useState('patents'); // State to track active list

  // Filtered Data Based on Search
  const filteredPatents = patents.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const filteredTrademarks = trademarks.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const filteredCopyrights = copyrights.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const filteredDisputes = ipDisputes.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Data for IP Type Pie Chart
  const ipTypeData = {
    labels: ['Patents', 'Trademarks', 'Copyrights'],
    datasets: [
      {
        label: 'IP Types',
        data: [patents.length, trademarks.length, copyrights.length],
        backgroundColor: ['#4caf50', '#ff9800', '#2196f3'],
      },
    ],
  };

  // Timeline Data for Patent Activities
  const patentTimelineData = {
    labels: ['2020', '2021', '2022', '2023'],
    datasets: [
      {
        label: 'Filed',
        data: [1, 2, 1, 1],
        borderColor: '#4caf50',
        fill: false,
      },
      {
        label: 'Granted',
        data: [0, 1, 1, 0],
        borderColor: '#2196f3',
        fill: false,
      },
      {
        label: 'Pending',
        data: [0, 0, 1, 1],
        borderColor: '#ff9800',
        fill: false,
      },
    ],
  };

  return (
    <div className="patent-page">
      <h1>IPR Dashboard</h1>

      {/* Search Bar */}
      <div className="search-bar">
        <FaSearch className="icon" />
        <input
          type="text"
          placeholder="Search for patents, trademarks, copyrights, or disputes..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* IP Type Distribution Pie Chart */}
      <div className="visualizations">
        <div className="chart">
          <h3>IP Types Distribution</h3>
          <Pie data={ipTypeData} />
        </div>

        {/* Patent Activities Timeline */}
        <div className="chart">
          <h3>Patent Activities Over Time</h3>
          <Line data={patentTimelineData} />
        </div>
      </div>

      {/* List of Options */}
      <div className="ip-options">
  <button
    style={{ backgroundColor: activeList === 'patents' ? '#c7dcff' : '#fff' }}
    onClick={() => setActiveList('patents')}
  >
    Patents
  </button>
  <div className="separator"></div>
  <button
    style={{ backgroundColor: activeList === 'trademarks' ? '#c7dcff' : '#fff' }}
    onClick={() => setActiveList('trademarks')}
  >
    Trademarks
  </button>
  <div className="separator"></div>
  <button
    style={{ backgroundColor: activeList === 'copyrights' ? '#c7dcff' : '#fff' }}
    onClick={() => setActiveList('copyrights')}
  >
    Copyrights
  </button>
  <div className="separator"></div>
  <button
    style={{ backgroundColor: activeList === 'ipDisputes' ? '#c7dcff' : '#fff' }}
    onClick={() => setActiveList('ipDisputes')}
  >
    IP Disputes
  </button>
</div>

<style>
  {`
    .ip-options {
      display: flex;
      justify-content: center; /* Align the buttons in the center */
      gap: 10px; /* Adds spacing between the buttons */
      margin-bottom: 20px; /* Optional: Adds spacing below the options */
      padding: 15px; /* Padding inside the container */
      border-radius: 10px; /* Rounded corners for the container */
      box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.1); /* Optional shadow for depth */
      background-color: #f5f5f5; /* Light gray background for the options container */
    }

    .ip-options button {
    color:black;
      cursor: pointer;
      padding: 10px 20px;
      border: none;
      border-radius: 5px;
      font-size: 18px;
      transition: background-color 0.3s;
    }

    .ip-options .separator {
      width: 1px;
      background-color: #ccc;
      height: 50%; /* Adjust the height as needed */
      align-self: center;
    }

    .ip-options button:hover {
      background-color: #e0e0e0;
    }
  `}
</style>



      {/* Dynamic List Section */}
      <div className="ip-section">
        {activeList === 'patents' && (
          <>
            <h3>Patents</h3>
            {filteredPatents.length > 0 ? (
              <table>
                <thead>
                  <tr>
                    <th>Title</th>
                    <th>Patent Number</th>
                    <th>Filing Date</th>
                    <th>Grant Date</th>
                    <th>Status</th>
                    <th>Research Area</th>
                    <th>Abstract</th>
                    <th>Inventors</th>
                    <th>Licensing</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredPatents.map((patent, index) => (
                    <tr key={index}>
                      <td>{patent.title}</td>
                      <td>{patent.number}</td>
                      <td>{patent.filingDate}</td>
                      <td>{patent.grantDate || 'N/A'}</td>
                      <td>{patent.status}</td>
                      <td>{patent.researchArea}</td>
                      <td>{patent.abstract}</td>
                      <td>{patent.inventors.join(', ')}</td>
                      <td>{patent.licensing}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <p>No patents found</p>
            )}
          </>
        )}

        {activeList === 'trademarks' && (
          <>
            <h3>Trademarks</h3>
            {filteredTrademarks.length > 0 ? (
              <table>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Registration Number</th>
                    <th>Status</th>
                    <th>Class</th>
                    <th>Filing Date</th>
                    <th>Registration Date</th>
                    <th>Validity</th>
                    <th>Holder</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredTrademarks.map((trademark, index) => (
                    <tr key={index}>
                      <td>{trademark.name}</td>
                      <td>{trademark.registrationNumber}</td>
                      <td>{trademark.status}</td>
                      <td>{trademark.class}</td>
                      <td>{trademark.filingDate}</td>
                      <td>{trademark.registrationDate}</td>
                      <td>{trademark.validity}</td>
                      <td>{trademark.holder}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <p>No trademarks found</p>
            )}
          </>
        )}

        {activeList === 'copyrights' && (
          <>
            <h3>Copyrights</h3>
            {filteredCopyrights.length > 0 ? (
              <table>
                <thead>
                  <tr>
                    <th>Title</th>
                    <th>Registration Number</th>
                    <th>Status</th>
                    <th>Type</th>
                    <th>Filing Date</th>
                    <th>Registration Date</th>
                    <th>Validity</th>
                    <th>Holder</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredCopyrights.map((copyright, index) => (
                    <tr key={index}>
                      <td>{copyright.title}</td>
                      <td>{copyright.registrationNumber}</td>
                      <td>{copyright.status}</td>
                      <td>{copyright.type}</td>
                      <td>{copyright.filingDate}</td>
                      <td>{copyright.registrationDate}</td>
                      <td>{copyright.validity}</td>
                      <td>{copyright.holder}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <p>No copyrights found</p>
            )}
          </>
        )}

        {activeList === 'ipDisputes' && (
          <>
            <h3>IP Disputes</h3>
            {filteredDisputes.length > 0 ? (
              <table>
                <thead>
                  <tr>
                    <th>Title</th>
                    <th>Dispute Number</th>
                    <th>Type</th>
                    <th>Description</th>
                    <th>Status</th>
                    <th>Filing Date</th>
                    <th>Involved Parties</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredDisputes.map((dispute, index) => (
                    <tr key={index}>
                      <td>{dispute.title}</td>
                      <td>{dispute.disputeNumber}</td>
                      <td>{dispute.type}</td>
                      <td>{dispute.description}</td>
                      <td>{dispute.status}</td>
                      <td>{dispute.filingDate}</td>
                      <td>{dispute.involvedParties.join(', ')}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <p>No disputes found</p>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default PatentPage;
