const Startup = require('../models/Startup');

const getStartups = async (req, res) => {
  const startups = await Startup.find();
  res.status(200).json(startups);
};

const createStartup = async (req, res) => {
  const startup = new Startup(req.body);
  await startup.save();
  res.status(201).json(startup);
};

module.exports = { getStartups, createStartup };
