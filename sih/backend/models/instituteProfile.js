const mongoose = require("mongoose");

const researchInstituteSchema = new mongoose.Schema(
  {
    basicDetails: {
      name: { type: String, required: true },
      location: {
        address: { type: String, required: true },
        city: { type: String, required: true },
        state: { type: String, required: true },
        country: { type: String, required: true },
      },
      type: {
        type: String,
        enum: ["Public", "Private", "Autonomous", "Government-Owned"],
        required: true,
      },
      affiliation: { type: String },
      registrationNumber: { type: String, unique: true },
      website: { type: String },
      contact: {
        email: { type: String },
        phone: { type: String },
        socialMediaLinks: {
          facebook: { type: String },
          twitter: { type: String },
          linkedin: { type: String },
          instagram: { type: String },
        },
      },
      yearOfEstablishment: { type: Number },
    },
    leadershipAndGovernance: {
      headOfInstitute: {
        name: { type: String },
        designation: { type: String },
      },
      governingBody: [
        {
          name: { type: String },
          role: { type: String },
          affiliation: { type: String },
        },
      ],
      departments: [{ type: String }],
    },
    researchCapabilities: {
      coreAreasOfResearch: [{ type: String }],
      laboratories: [
        {
          name: { type: String },
          description: { type: String },
          specializedFacilities: [{ type: String }],
        },
      ],
      majorEquipment: [
        {
          name: { type: String },
          description: { type: String },
          uniqueFeatures: { type: String },
        },
      ],
      certificationsAccreditations: [
        {
          name: { type: String },
          issuingBody: { type: String },
          year: { type: Number },
        },
      ],
      fundingSources: [{ type: String }],
    },
    researchOutput: {
      publications: {
        total: { type: Number, default: 0 },
        citationCount: { type: Number, default: 0 },
        recentPublications: [
          {
            title: { type: String },
            journal: { type: String },
            year: { type: Number },
          },
        ],
      },
      patents: {
        filed: { type: Number, default: 0 },
        granted: { type: Number, default: 0 },
      },
    },
    achievementsAndImpact: {
      awardsAndRecognitions: [
        {
          title: { type: String },
          awardedBy: { type: String },
          year: { type: Number },
        },
      ],
      societalImpact: [
        {
          description: { type: String },
          area: { type: String },
          year: { type: Number },
        },
      ],
      innovations: [
        {
          title: { type: String },
          description: { type: String },
          status: { type: String },
        },
      ],
      policyContributions: [
        {
          title: { type: String },
          description: { type: String },
          year: { type: Number },
        },
      ],
    },
    humanResources: {
      researchers: { type: Number, default: 0 },
      facultyMembers: { type: Number, default: 0 },
      supportStaff: { type: Number, default: 0 },
      studentsInvolved: { type: Number, default: 0 },
    },
    infrastructure: {
      campusSize: { type: String },
      facilities: [{ type: String }],
      researchEquipment: [
        {
          name: { type: String },
          description: { type: String },
        },
      ],
      libraries: [
        {
          name: { type: String },
          resources: [{ type: String }],
        },
      ],
    },
    collaborations: [
      {
        name: { type: String },
        type: { type: String },
        startYear: { type: Number },
        description: { type: String },
      },
    ],
    funding: {
      sources: [{ type: String }],
      annualBudget: { type: Number },
      majorGrants: [
        {
          grantName: { type: String },
          fundingAgency: { type: String },
          amount: { type: Number },
          yearGranted: { type: Number },
        },
      ],
    },
    miscellaneous: {
      memberships: [
        {
          organization: { type: String },
          role: { type: String },
          yearJoined: { type: Number },
        },
      ],
      ethicsAndCompliance: {
        researchEthicsPolicies: [{ type: String }],
        complianceFrameworks: [{ type: String }],
      },
      eventsAndConferences: [
        {
          title: { type: String },
          description: { type: String },
          date: { type: Date },
          hosted: { type: Boolean },
          location: { type: String },
        },
      ],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("ResearchInstitute", researchInstituteSchema);
