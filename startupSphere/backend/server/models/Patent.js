const mongoose = require('mongoose');

const patentSchema = mongoose.Schema({
  title: { type: String, required: true },
  applicationNumber: { type: String, required: true, unique: true },
  status: { type: String, enum: ['Pending', 'Granted'], default: 'Pending' },
  owner: { type: String, required: true },
  filingDate: { type: Date, required: true },
}, { timestamps: true });

module.exports = mongoose.model('Patent', patentSchema);
