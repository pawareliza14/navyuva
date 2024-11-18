const ResearchProject = require('../models/ResearchProject');

const getResearchProjects = async (req, res) => {
  const projects = await ResearchProject.find();
  res.status(200).json(projects);
};

const createResearchProject = async (req, res) => {
  const project = new ResearchProject(req.body);
  await project.save();
  res.status(201).json(project);
};

module.exports = { getResearchProjects, createResearchProject };
