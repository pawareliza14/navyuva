import React, { useState } from 'react';
import './PeoplePage.css';

const PeoplePage = () => {
  // Dummy Data with English names and details
  const people = [
    {
      name: 'Dr. Alisha Patel',
      department: 'Health Department',
      experience: '10 years',
      areaOfExpertise: 'Artificial Intelligence',
      contact: 'dr.alisha@university.org',
      category: 'Leadership Team',
    },
    {
      name: 'Mr. Bharat Desai',
      department: 'Technology Development',
      experience: '8 years',
      areaOfExpertise: 'Machine Learning',
      contact: 'bharat.desai@university.org',
      category: 'Leadership Team',
    },
    {
      name: 'Dr. Mayur Patel',
      department: 'Biological Research',
      experience: '15 years',
      areaOfExpertise: 'Biology',
      contact: 'mayur.patel@university.org',
      category: 'Principal Investigators',
    },
    {
      name: 'Sireen Mistry',
      department: 'Soft Machines and Fabrication',
      experience: '5 years',
      areaOfExpertise: 'Research Management',
      contact: 'sireen.mistry@university.org',
      category: 'Project Managers',
    },
    {
      name: 'Siddhi Shah',
      department: 'Regulatory Affairs',
      experience: '7 years',
      areaOfExpertise: 'Regulations & Compliance',
      contact: 'siddhi.shah@university.org',
      category: 'Regulatory and Compliance Officers',
    },
    {
      name: 'Ravi Ramesh',
      department: 'Biotechnology',
      experience: '9 years',
      areaOfExpertise: 'Genetic Engineering',
      contact: 'ravi.ramesh@university.org',
      category: 'Laboratory Technicians',
    },
    {
      name: 'Kavita Mehta',
      department: 'Data Analytics',
      experience: '6 years',
      areaOfExpertise: 'Data Science',
      contact: 'kavita.mehta@university.org',
      category: 'Data Analysts and Statisticians',
    },
    {
      name: 'Dr. Rajesh Kumar',
      department: 'Research and Development',
      experience: '20 years',
      areaOfExpertise: 'Renewable Energy',
      contact: 'rajesh.kumar@university.org',
      category: 'Scientific Advisory Board',
    },
    {
      name: 'Priya Verma',
      department: 'Ethics',
      experience: '12 years',
      areaOfExpertise: 'Research Ethics',
      contact: 'priya.verma@university.org',
      category: 'Ethics Committee Members',
    },
  ];

  // Search State
  const [searchTerm, setSearchTerm] = useState('');

  // Filtered Data Based on Search
  const filteredPeople = people.filter((person) =>
    person.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Grouped People by Category
  const groupedPeople = filteredPeople.reduce((acc, person) => {
    if (!acc[person.category]) {
      acc[person.category] = [];
    }
    acc[person.category].push(person);
    return acc;
  }, {});

  return (
    <div className="people-page">
      <h1>Research Project Management People</h1>

      {/* Search Bar */}
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search for people..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* All Sections */}
      {Object.keys(groupedPeople).map((category) => (
        <div key={category} className="category-section">
          <h3>{category}</h3>
          <div className="people-grid">
            {groupedPeople[category].map((person, index) => (
              <div key={index} className="person-card">
                <h4>{person.name}</h4>
                <p><strong>Department:</strong> {person.department}</p>
                <p><strong>Experience:</strong> {person.experience}</p>
                <p><strong>Area of Expertise:</strong> {person.areaOfExpertise}</p>
                <p><strong>Contact:</strong> {person.contact}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default PeoplePage;
