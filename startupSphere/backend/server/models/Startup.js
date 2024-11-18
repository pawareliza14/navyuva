const mongoose = require('mongoose');

const startupSchema = mongoose.Schema({
  name: { type: String, required: true },
  founders: { type: [String], required: true },
  description: { type: String, required: true },
  funding: { type: Number, required: true },
  stage: { type: String, enum: ['Ideation', 'Prototype', 'Growth'], default: 'Ideation' },
}, { timestamps: true });

module.exports = mongoose.model('Startup', startupSchema);
