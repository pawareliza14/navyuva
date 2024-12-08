import React, { useState, useEffect } from "react";
import './Profile.css'; // Link your CSS file
import '@fortawesome/fontawesome-free/css/all.min.css';


const dummyData = {
  basicDetails: {
    name: "National Research Institute",
    location: {
      address: "123 Research Lane",
      city: "Innovation City",
      state: "Knowledge State",
      country: "Educationland",
    },
    type: "Public",
    yearOfEstablishment: 1985,
    website: "https://www.example.com",
    contact: {
      email: "info@example.com",
      phone: "+1234567890",
    },
  },
  leadershipAndGovernance: {
    headOfInstitute: {
      name: "Dr. Jane Smith",
      designation: "Director",
    },
    governingBody: [
      { name: "John Doe", role: "Chairperson", affiliation: "University A" },
      { name: "Alice Brown", role: "Member", affiliation: "Research Center B" },
    ],
    departments: ["Biotechnology", "Nanotechnology", "AI and Robotics"],
  },
  researchCapabilities: {
    coreAreasOfResearch: ["Genomics", "Renewable Energy", "Machine Learning"],
    specializedLabs: ["Bio Lab", "AI Research Lab"],
    certifications: ["ISO 9001", "Green Lab Certification"],
  },
  researchOutput: {
    publications: {
      total: 500,
      citationCount: 12000,
      recentPublications: [
        { title: "AI in Healthcare", journal: "Medical AI Journal", year: 2023 },
        { title: "Renewable Energy Systems", journal: "Energy Tech", year: 2022 },
      ],
    },
  },
  humanResources: {
    researchers: 50,
    facultyMembers: 20,
    supportStaff: 30,
    studentsInvolved: 200,
  },
  infrastructure: {
    campusSize: "50 Acres",
    facilities: ["Library", "Auditorium", "Sports Complex"],
    researchEquipment: [
      { name: "Electron Microscope", description: "High-resolution imaging" },
      { name: "Supercomputer", description: "AI and data processing" },
    ],
  },
  collaborations: [
    {
      name: "Global Tech University",
      type: "Academic",
      description: "Joint research on AI applications",
      startYear: 2020,
    },
    {
      name: "Clean Energy Initiative",
      type: "Industry",
      description: "Developing next-gen solar panels",
      startYear: 2021,
    },
  ],
  funding: {
    annualBudget: 2000000,
    majorGrants: [
      {
        grantName: "AI Research Grant",
        fundingAgency: "National Science Foundation",
        amount: 500000,
        yearGranted: 2023,
      },
    ],
  },
  miscellaneous: {
    memberships: [
      { organization: "Global Research Alliance", role: "Member", yearJoined: 2015 },
    ],
    ethicsAndCompliance: {
      researchEthicsPolicies: ["Policy 1: No animal testing", "Policy 2: Data privacy adherence"],
    },
    eventsAndConferences: [
      {
        title: "Annual AI Conference",
        description: "Showcasing latest research in AI",
        date: "2024-03-15",
        location: "Innovation City",
      },
    ],
  },
};

const ResearchInstitutePage = () => {
  const [researchInstitute, setResearchInstitute] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Simulate an API call
    setTimeout(() => {
      try {
        setResearchInstitute(dummyData);
      } catch (err) {
        setError(`Failed to load data: ${err.message}`);
      }
    }, 1000); // Simulating delay
  }, []);

  const getArrayOrEmpty = (array) => Array.isArray(array) ? array : [];

  if (error) {
    return <div>{error}</div>;
  }

  if (!researchInstitute) {
    return <div>Loading...</div>;
  }

  return (
    <div className="research-institute-page">
      

      <div className="profile-header">
  <div className="profile-header-content">
    <h1>{researchInstitute.basicDetails?.name}</h1>
    <p className="location">
      <i className="fas fa-map-marker-alt"></i> {researchInstitute.basicDetails?.location?.address}, 
      {researchInstitute.basicDetails?.location?.city}, 
      {researchInstitute.basicDetails?.location?.state}, 
      {researchInstitute.basicDetails?.location?.country}
    </p>
    
    {/* Flex container for Type and Year of Establishment */}
    <div className="type-year">
      <p><i className="fas fa-cogs"></i> {researchInstitute.basicDetails?.type}</p>
      <p><i className="fas fa-calendar-alt"></i> {researchInstitute.basicDetails?.yearOfEstablishment}</p>
    </div>
    
    {/* Flex container for Link, Email, and Phone */}
    <div className="contact-info">
      <p><i className="fas fa-link"></i> <a href={researchInstitute.basicDetails?.website} target="_blank" rel="noopener noreferrer">{researchInstitute.basicDetails?.website}</a></p>
      <p><i className="fas fa-envelope"></i> {researchInstitute.basicDetails?.contact?.email}</p>
      <p><i className="fas fa-phone"></i> {researchInstitute.basicDetails?.contact?.phone}</p>
    </div>
  </div>
</div>



      {/* Leadership and Governance Section */}
      <h2>Leadership and Governance</h2>
      <div className="grid" style={{ backgroundColor: '#e5ecf8', padding: '20px', borderRadius: '8px' }}>
        {/* Head of Institute Section */}
        <div className="card">
          <h3>Head of Institute</h3>
          <p>{researchInstitute.leadershipAndGovernance?.headOfInstitute?.name} ({researchInstitute.leadershipAndGovernance?.headOfInstitute?.designation})</p>
        </div>

        {/* Container for Governing Body and Departments side by side */}
        <div className="side-by-side" style={{ display: 'flex', gap: '30px', justifyContent: 'space-between' }}>
        {/* Governing Body Section */}
        <div className="card" style={{ flex: 1 }}>
          <h3>Governing Body</h3>
          <ul>
            {getArrayOrEmpty(researchInstitute.leadershipAndGovernance?.governingBody).map((member, index) => (
              <li key={index}>{member.name} - {member.role} ({member.affiliation})</li>
            ))}
          </ul>
        </div>

        {/* Departments Section */}
        <div className="card" style={{ flex: 1 }}>
          <h3>Departments</h3>
          <ul>
            {getArrayOrEmpty(researchInstitute.leadershipAndGovernance?.departments).map((department, index) => (
              <li key={index}>{department}</li>
            ))}
          </ul>
        </div>
        </div>
        </div>


     {/* Research Capabilities Section */}
<h2>Research Capabilities</h2>
<div className="grid" style={{ backgroundColor: '#e5ecf8', padding: '20px', borderRadius: '8px' }}>
  {/* Core Areas of Research Section */}
  <div className="card">
    <h3>Core Areas of Research</h3>
    <ul>
      {getArrayOrEmpty(researchInstitute.researchCapabilities?.coreAreasOfResearch).map((area, index) => (
        <li key={index}>{area}</li>
      ))}
    </ul>
  </div>

  {/* Container for Laboratories and Certifications side by side */}
  <div className="side-by-side" style={{ display: 'flex', gap: '30px', justifyContent: 'space-between' }}>
    {/* Laboratories Section */}
    <div className="card" style={{ flex: 1 }}>
      <h3>Laboratories</h3>
      <ul>
        {getArrayOrEmpty(researchInstitute.researchCapabilities?.specializedLabs).map((lab, index) => (
          <li key={index}>{lab}</li>
        ))}
      </ul>
    </div>

    {/* Certifications Section */}
    <div className="card" style={{ flex: 1 }}>
      <h3>Certifications</h3>
      <ul>
        {getArrayOrEmpty(researchInstitute.researchCapabilities?.certifications).map((cert, index) => (
          <li key={index}>{cert}</li>
        ))}
      </ul>
    </div>
  </div>
</div>


      {/* Research Output Section */}

      <h2>Research Output</h2>
<div className="grid" style={{ backgroundColor: '#e5ecf8', padding: '20px', borderRadius: '8px' }}>
  <div className="card">
    <div 
      className="stats-row" 
      style={{ padding:'0 300px',display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}
    >
      <p style={{ margin: 0 }}><strong>Total Publications:</strong> {researchInstitute.researchOutput?.publications?.total}</p>
      <p style={{ margin: 0 }}><strong>Total Citations:</strong> {researchInstitute.researchOutput?.publications?.citationCount}</p>
    </div>
    
    {/* Recent Publications */}
    <div className="side-by-side" style={{ display: 'flex', gap: '30px', justifyContent: 'space-between' }}>
      <div className="card" style={{ flex: 1 }}>
        <h3>Recent Publications</h3>
        <ul>
          {getArrayOrEmpty(researchInstitute.researchOutput?.publications?.recentPublications).map((pub, index) => (
            <li key={index}>
              <strong>{pub.title}</strong> ({pub.year}) - {pub.journal}
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>
</div>



{/* Human Resources, Infrastructure, Collaborations, Funding, and Miscellaneous Sections */}
<h2>Other</h2>
<div style={{marginTop:'40px', display: 'flex', gap: '15px', justifyContent: 'space-between', backgroundColor: '#e5ecf8', padding: '20px', borderRadius: '8px' }}>

  {/* Human Resources Section */}
  <div style={{ flex: 1, textAlign: 'left', backgroundColor: '#fff', padding: '20px', borderRadius: '8px'  }}>
    <h3>Human Resources</h3>
    <p>Researchers: {researchInstitute.humanResources?.researchers}</p>
    <p>Faculty Members: {researchInstitute.humanResources?.facultyMembers}</p>
    <p>Support Staff: {researchInstitute.humanResources?.supportStaff}</p>
    <p>Students Involved: {researchInstitute.humanResources?.studentsInvolved}</p>
  </div>

  {/* Infrastructure Section */}
  <div style={{ flex: 1, textAlign: 'left', backgroundColor: '#fff', padding: '20px', borderRadius: '8px'  }}>
    <h3>Infrastructure</h3>
    <p>Campus Size: {researchInstitute.infrastructure?.campusSize}</p>
    <h4>Facilities</h4>
    <ul>
      {getArrayOrEmpty(researchInstitute.infrastructure?.facilities).map((facility, index) => (
        <li key={index}>{facility}</li>
      ))}
    </ul>
    <h4>Research Equipment</h4>
    <ul>
      {getArrayOrEmpty(researchInstitute.infrastructure?.researchEquipment).map((equipment, index) => (
        <li key={index}>
          <strong>{equipment.name}</strong> - {equipment.description}
        </li>
      ))}
    </ul>
  </div>

  {/* Collaborations Section */}
  <div style={{flex: 1, textAlign: 'left', backgroundColor: '#fff', padding: '20px', borderRadius: '8px'  }}>
    <h3>Collaborations</h3>
    <ul>
      {getArrayOrEmpty(researchInstitute.collaborations).map((collaboration, index) => (
        <li key={index}>
          <strong>{collaboration.name}</strong> - {collaboration.type} ({collaboration.startYear})
          <p>{collaboration.description}</p>
        </li>
      ))}
    </ul>
  </div>

  {/* Funding Section */}
  <div style={{flex: 1, textAlign: 'left', backgroundColor: '#fff', padding: '20px', borderRadius: '8px'  }}>
    <h3>Funding</h3>
    <p>{researchInstitute.funding?.annualBudget ? `$${researchInstitute.funding?.annualBudget.toLocaleString()}` : "Data not available"}</p>

    <h4>Major Grants</h4>
    <ul>
      {getArrayOrEmpty(researchInstitute.funding?.majorGrants).map((grant, index) => (
        <li key={index}>
          <strong>{grant.grantName}</strong> - {grant.fundingAgency} ({grant.yearGranted})
          <p>Amount: ${grant.amount.toLocaleString()}</p>
        </li>
      ))}
    </ul>
  </div>

  {/* Miscellaneous Section */}
  <div style={{flex: 1, textAlign: 'left', backgroundColor: '#fff', padding: '20px', borderRadius: '8px'  }}>
    <h3>Miscellaneous</h3>
    <h4>Memberships</h4>
    <ul>
      {getArrayOrEmpty(researchInstitute.miscellaneous?.memberships).map((membership, index) => (
        <li key={index}>{membership.organization} - {membership.role} ({membership.yearJoined})</li>
      ))}
    </ul>
    <h4>Ethics and Compliance</h4>
    <ul>
      {getArrayOrEmpty(researchInstitute.miscellaneous?.ethicsAndCompliance?.researchEthicsPolicies).map((policy, index) => (
        <li key={index}>{policy}</li>
      ))}
    </ul>
    <h4>Events and Conferences</h4>
    <ul>
      {getArrayOrEmpty(researchInstitute.miscellaneous?.eventsAndConferences).map((event, index) => (
        <li key={index}>
          <strong>{event.title}</strong> ({event.date}) - {event.description} at {event.location}
        </li>
      ))}
    </ul>
  </div>

</div>

    </div>
  );
};

export default ResearchInstitutePage;
