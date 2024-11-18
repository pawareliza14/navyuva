const Patent = require('../models/Patent');

const getPatents = async (req, res) => {
  const patents = await Patent.find();
  res.status(200).json(patents);
};

const createPatent = async (req, res) => {
  const patent = new Patent(req.body);
  await patent.save();
  res.status(201).json(patent);
};

module.exports = { getPatents, createPatent };
