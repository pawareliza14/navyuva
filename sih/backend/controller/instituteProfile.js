const ResearchInstitute = require("../models/instituteProfile.js");

// Create a new research institute
exports.createInstitute = async (req, res) => {
  try {
    const institute = new ResearchInstitute(req.body);
    await institute.save();
    res.status(201).json({ success: true, data: institute });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};

// Get all research institutes
exports.getAllInstitutes = async (req, res) => {
  try {
    const institutes = await ResearchInstitute.find();
    res.status(200).json({ success: true, data: institutes });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

// Get a single research institute by ID
exports.getInstituteById = async (req, res) => {
  try {
    const institute = await ResearchInstitute.findById(req.params.id);
    if (!institute) {
      return res.status(404).json({ success: false, message: "Institute not found" });
    }
    res.status(200).json({ success: true, data: institute });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

// Update a research institute by ID
exports.updateInstitute = async (req, res) => {
  try {
    const institute = await ResearchInstitute.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!institute) {
      return res.status(404).json({ success: false, message: "Institute not found" });
    }
    res.status(200).json({ success: true, data: institute });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};

// Delete a research institute by ID
exports.deleteInstitute = async (req, res) => {
  try {
    const institute = await ResearchInstitute.findByIdAndDelete(req.params.id);
    if (!institute) {
      return res.status(404).json({ success: false, message: "Institute not found" });
    }
    res.status(200).json({ success: true, message: "Institute deleted successfully" });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};
