import React, { useState } from "react";
import "./Form.css";

const ResearchInstituteForm = () => {
  const [formData, setFormData] = useState({
    basicDetails: {
      name: "",
      location: { address: "", city: "", state: "", country: "" },
      type: "",
      affiliation: "",
      registrationNumber: "",
      website: "",
      contact: { email: "", phone: "" },
      yearOfEstablishment: "",
      leadership: { director: "", dean: "" },
    },
    researchCapabilities: {
      departments: [],
      coreAreasOfResearch: [],
      specializedLabs: [],
      certifications: [],
      notableAchievements: [],
    },
    researchOutput: {
      publications: { total: 0, citationCount: 0 },
      patents: { filed: 0, granted: 0 },
      completedProjects: [],
    },
    infrastructure: {
      campusSize: "",
      facilities: [],
      researchEquipment: [],
    },
  });

  const handleChange = (e, path) => {
    const keys = path.split(".");
    setFormData((prev) => {
      const updated = { ...prev };
      let obj = updated;
      for (let i = 0; i < keys.length - 1; i++) {
        obj = obj[keys[i]];
      }
      obj[keys[keys.length - 1]] = e.target.value;
      return updated;
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Data:", formData);
    // You can integrate this with your backend API
  };

  return (
    <div className="main-content">
      <h1>Research Institute Form</h1>
      <form className="research-institute-form" onSubmit={handleSubmit}>
        <section>
          <h3>Basic Details</h3>
          <input
            type="text"
            placeholder="Institute Name"
            value={formData.basicDetails.name}
            onChange={(e) => handleChange(e, "basicDetails.name")}
          />
          <div className="location">
            <input
              type="text"
              placeholder="Address"
              value={formData.basicDetails.location.address}
              onChange={(e) => handleChange(e, "basicDetails.location.address")}
            />
            <input
              type="text"
              placeholder="City"
              value={formData.basicDetails.location.city}
              onChange={(e) => handleChange(e, "basicDetails.location.city")}
            />
            <input
              type="text"
              placeholder="State"
              value={formData.basicDetails.location.state}
              onChange={(e) => handleChange(e, "basicDetails.location.state")}
            />
            <input
              type="text"
              placeholder="Country"
              value={formData.basicDetails.location.country}
              onChange={(e) => handleChange(e, "basicDetails.location.country")}
            />
          </div>
          <select
            value={formData.basicDetails.type}
            onChange={(e) => handleChange(e, "basicDetails.type")}
          >
            <option value="">Select Type</option>
            <option value="Public">Public</option>
            <option value="Private">Private</option>
            <option value="Autonomous">Autonomous</option>
          </select>
          <input
            type="text"
            placeholder="Affiliation"
            value={formData.basicDetails.affiliation}
            onChange={(e) => handleChange(e, "basicDetails.affiliation")}
          />
          <input
            type="text"
            placeholder="Registration Number"
            value={formData.basicDetails.registrationNumber}
            onChange={(e) =>
              handleChange(e, "basicDetails.registrationNumber")
            }
          />
          <input
            type="text"
            placeholder="Website"
            value={formData.basicDetails.website}
            onChange={(e) => handleChange(e, "basicDetails.website")}
          />
          <input
            type="email"
            placeholder="Contact Email"
            value={formData.basicDetails.contact.email}
            onChange={(e) => handleChange(e, "basicDetails.contact.email")}
          />
          <input
            type="text"
            placeholder="Contact Phone"
            value={formData.basicDetails.contact.phone}
            onChange={(e) => handleChange(e, "basicDetails.contact.phone")}
          />
        </section>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ResearchInstituteForm;
