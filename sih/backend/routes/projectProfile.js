const express = require('express');
const router = express.Router();
const projectProfileController = require('../controller/projectProfile.js');

// Routes
router.post('/project-profiles', projectProfileController.createProjectProfile);
router.get('/project-profiles', projectProfileController.getAllProjectProfiles);
router.get('/project-profiles/:id', projectProfileController.getProjectProfileById);
router.put('/project-profiles/:id', projectProfileController.updateProjectProfile);
router.delete('/project-profiles/:id', projectProfileController.deleteProjectProfile);

module.exports = router;
