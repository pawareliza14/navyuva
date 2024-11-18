const mongoose = require('mongoose');

const researchProjectSchema = mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  institute: { type: String, required: true },
  funding: { type: Number, required: true },
  milestones: { type: [String], default: [] },
}, { timestamps: true });

module.exports = mongoose.model('ResearchProject', researchProjectSchema);
