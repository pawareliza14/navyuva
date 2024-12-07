const express = require('express');
const router = express.Router();
const projectProfileController = require('../controller/projectProfile.js');

// Routes
router.post('/', projectProfileController.createProjectProfile);
router.get('/', projectProfileController.getAllProjectProfiles);
router.get('/:id', projectProfileController.getProjectProfileById);
router.put('/:id', projectProfileController.updateProjectProfile);
router.delete('/:id', projectProfileController.deleteProjectProfile);

module.exports = router;
