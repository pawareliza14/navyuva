const mongoose = require("mongoose");

const projectProfileSchema = new mongoose.Schema({
  projectTitle: {
    type: String,
    required: true,
  },
  principalInvestigator: {
    name: { type: String, required: true },
    contactDetails: { type: String },
    designation: { type: String },
  },
  coInvestigators: [{
    name: { type: String, required: true },
    role: { type: String, required: true }
  }],
  projectAbstract: {
    type: String,
    required: true,
  },
  startDate: {
    type: Date,
    required: true,
  },
  endDate: {
    type: Date,
    required: true,
  },
  projectCategory: { type: String },
  fundingAgency: {
    name: { type: String, required: true },
    details: { type: String },
  },
  projectBudget: {
    total: { type: Number, required: true },
    breakdown: {
      personnel: { type: Number },
      equipment: { type: Number },
      researchExpenses: { type: Number },
    }
  },
  ethicalApproval: {
    status: { type: String },
    details: { type: String },
  },
  intellectualPropertyRights: {
    status: { type: String },
    details: { type: String },
  },
  institutionalApproval: {
    status: { type: String },
    details: { type: String },
  }
});

module.exports = mongoose.model("ProjectProfile", projectProfileSchema);
