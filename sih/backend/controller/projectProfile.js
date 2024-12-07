const ProjectProfile = require('../models/projectProfile.js'); // Adjust the path as necessary

// Create a new project profile
exports.createProjectProfile = async (req, res) => {
  try {
    const projectProfile = new ProjectProfile(req.body);
    await projectProfile.save();
    res.status(201).json({ message: "Project profile created successfully", data: projectProfile });
  } catch (error) {
    res.status(400).json({ message: "Failed to create project profile", error: error.message });
  }
};

// Get all project profiles
exports.getAllProjectProfiles = async (req, res) => {
  try {
    const projectProfiles = await ProjectProfile.find();
    res.status(200).json({ message: "Project profiles fetched successfully", data: projectProfiles });
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch project profiles", error: error.message });
  }
};

// Get a single project profile by ID
exports.getProjectProfileById = async (req, res) => {
  try {
    const projectProfile = await ProjectProfile.findById(req.params.id);
    if (!projectProfile) {
      return res.status(404).json({ message: "Project profile not found" });
    }
    res.status(200).json({ message: "Project profile fetched successfully", data: projectProfile });
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch project profile", error: error.message });
  }
};

// Update a project profile
exports.updateProjectProfile = async (req, res) => {
  try {
    const projectProfile = await ProjectProfile.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!projectProfile) {
      return res.status(404).json({ message: "Project profile not found" });
    }
    res.status(200).json({ message: "Project profile updated successfully", data: projectProfile });
  } catch (error) {
    res.status(400).json({ message: "Failed to update project profile", error: error.message });
  }
};

// Delete a project profile
exports.deleteProjectProfile = async (req, res) => {
  try {
    const projectProfile = await ProjectProfile.findByIdAndDelete(req.params.id);
    if (!projectProfile) {
      return res.status(404).json({ message: "Project profile not found" });
    }
    res.status(200).json({ message: "Project profile deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Failed to delete project profile", error: error.message });
  }
};
