import React, { useState, useEffect } from "react";
import './Profile.css'; // Make sure to link the CSS file

const ResearchInstitutePage = () => {
  const [researchInstitute, setResearchInstitute] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('http://localhost:5000/api/research-institutes') // Replace with your actual API endpoint
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error(`Error ${response.status}: ${response.statusText}`);
        }
      })
      .then((data) => {
        if (data.success && Array.isArray(data.data) && data.data.length > 0) {
          setResearchInstitute(data.data[0]); // Get the first item from the 'data' array
        } else {
          throw new Error('No data available or invalid format');
        }
      })
      .catch((error) => {
        console.error("Error fetching research institute data:", error);
        setError(`Failed to load data. Error: ${error.message}`);
      });
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
      {/* Basic Details Section */}
      <h1>{researchInstitute.basicDetails?.name}</h1>
      <div className="grid">
        <div className="card">
          <p>{researchInstitute.basicDetails?.location?.address}, {researchInstitute.basicDetails?.location?.city}, {researchInstitute.basicDetails?.location?.state}, {researchInstitute.basicDetails?.location?.country}</p>
          <p>Type: {researchInstitute.basicDetails?.type}</p>
          <p>Year of Establishment: {researchInstitute.basicDetails?.yearOfEstablishment}</p>
          <p>Website: <a href={researchInstitute.basicDetails?.website}>{researchInstitute.basicDetails?.website}</a></p>
          <p>Email: {researchInstitute.basicDetails?.contact?.email}</p>
          <p>Phone: {researchInstitute.basicDetails?.contact?.phone}</p>
        </div>
      </div>

      {/* Leadership and Governance Section */}
      <h2>Leadership and Governance</h2>
      <div className="grid">
        <div className="card">
          <p>Head of Institute: {researchInstitute.leadershipAndGovernance?.headOfInstitute?.name} ({researchInstitute.leadershipAndGovernance?.headOfInstitute?.designation})</p>
          <h3>Governing Body</h3>
          <ul>
            {getArrayOrEmpty(researchInstitute.leadershipAndGovernance?.governingBody).map((member, index) => (
              <li key={index}>{member.name} - {member.role} ({member.affiliation})</li>
            ))}
          </ul>
          <h3>Departments</h3>
          <ul>
            {getArrayOrEmpty(researchInstitute.leadershipAndGovernance?.departments).map((department, index) => (
              <li key={index}>{department}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* Research Capabilities Section */}
      <h2>Research Capabilities</h2>
      <div className="grid">
        <div className="card">
          <h3>Core Areas of Research</h3>
          <ul>
            {getArrayOrEmpty(researchInstitute.researchCapabilities?.coreAreasOfResearch).map((area, index) => (
              <li key={index}>{area}</li>
            ))}
          </ul>
          <h3>Laboratories</h3>
          <ul>
            {getArrayOrEmpty(researchInstitute.researchCapabilities?.specializedLabs).map((lab, index) => (
              <li key={index}>{lab}</li>
            ))}
          </ul>
          <h3>Certifications</h3>
          <ul>
            {getArrayOrEmpty(researchInstitute.researchCapabilities?.certifications).map((cert, index) => (
              <li key={index}>{cert}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* Research Output Section */}
      <h2>Research Output</h2>
      <div className="grid">
        <div className="card">
          <h3>Publications</h3>
          <p>Total Publications: {researchInstitute.researchOutput?.publications?.total}</p>
          <p>Total Citation Count: {researchInstitute.researchOutput?.publications?.citationCount}</p>
          <h4>Recent Publications</h4>
          <ul>
            {getArrayOrEmpty(researchInstitute.researchOutput?.publications?.recentPublications).map((pub, index) => (
              <li key={index}>
                <strong>{pub.title}</strong> - {pub.journal} ({pub.year})
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Human Resources Section */}
      <h2>Human Resources</h2>
      <div className="grid">
        <div className="card">
          <p>Researchers: {researchInstitute.humanResources?.researchers}</p>
          <p>Faculty Members: {researchInstitute.humanResources?.facultyMembers}</p>
          <p>Support Staff: {researchInstitute.humanResources?.supportStaff}</p>
          <p>Students Involved: {researchInstitute.humanResources?.studentsInvolved}</p>
        </div>
      </div>

      {/* Infrastructure Section */}
      <h2>Infrastructure</h2>
      <div className="grid">
        <div className="card">
          <p>Campus Size: {researchInstitute.infrastructure?.campusSize}</p>
          <h3>Facilities</h3>
          <ul>
            {getArrayOrEmpty(researchInstitute.infrastructure?.facilities).map((facility, index) => (
              <li key={index}>{facility}</li>
            ))}
          </ul>
          <h3>Research Equipment</h3>
          <ul>
            {getArrayOrEmpty(researchInstitute.infrastructure?.researchEquipment).map((equipment, index) => (
              <li key={index}>{equipment.name}: {equipment.description}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* Collaborations Section */}
      <h2>Collaborations</h2>
      <div className="grid">
        <div className="card">
          <ul>
            {getArrayOrEmpty(researchInstitute.collaborations).map((collaboration, index) => (
              <li key={index}>
                <strong>{collaboration.name}</strong> ({collaboration.type}) - {collaboration.description} 
                (Started: {collaboration.startYear})
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Funding Section */}
      <h2>Funding</h2>
      <div className="grid">
        <div className="card">
          <p>Annual Budget: ${researchInstitute.funding?.annualBudget}</p>
          <h3>Major Grants</h3>
          <ul>
            {getArrayOrEmpty(researchInstitute.funding?.majorGrants).map((grant, index) => (
              <li key={index}>
                <strong>{grant.grantName}</strong> - {grant.fundingAgency} (${grant.amount}) ({grant.yearGranted})
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Miscellaneous Section */}
      <h2>Miscellaneous</h2>
      <div className="grid">
        <div className="card">
          <h3>Memberships</h3>
          <ul>
            {getArrayOrEmpty(researchInstitute.miscellaneous?.memberships).map((membership, index) => (
              <li key={index}>
                <strong>{membership.organization}</strong> ({membership.role}) - Joined: {membership.yearJoined}
              </li>
            ))}
          </ul>
          <h3>Ethics & Compliance</h3>
          <ul>
            {getArrayOrEmpty(researchInstitute.miscellaneous?.ethicsAndCompliance?.researchEthicsPolicies).map((policy, index) => (
              <li key={index}>{policy}</li>
            ))}
          </ul>
          <h3>Events & Conferences</h3>
          <ul>
            {getArrayOrEmpty(researchInstitute.miscellaneous?.eventsAndConferences).map((event, index) => (
              <li key={index}>
                <strong>{event.title}</strong> - {event.description} ({event.date}) at {event.location}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ResearchInstitutePage;
